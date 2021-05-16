import { FastifyInstance } from 'fastify';
import * as path from 'path';
import { AppConfigService } from './modules/common/services/app-config/app-config.service';
import { ServerAdapterService } from './server-adapter.service';
import { NestFactory } from '@nestjs/core';
import { NestFastifyApplication, FastifyAdapter } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { AppUtilService } from './modules/common/services/app-util/app-util.service';
import { CustomExceptionFilter } from './modules/common/filters/custom-exception.filter';
import { HttpCommonInterceptor } from './modules/common/interceptors/http-common.interceptor';
import compress from 'fastify-compress';

export async function bootstrap(): Promise<FastifyInstance> {
	let pathOfConfig: string;
	let app: NestFastifyApplication;
	console.log('process.env', process.env.NODE_ENV);
	if (process.env.NODE_ENV === 'dev' || process.env.NODE_EN === 'development') {
		pathOfConfig = path.join(process.cwd(), './config/development/.env');
		console.log('pathConfig:', pathOfConfig);
		require('dotenv').config({ path: pathOfConfig });
	}

	try {
		const appConfig = AppConfigService.getAppConfig();
		console.log('getting appconfig :', appConfig);
		const fastifyInstance = ServerAdapterService.cconfigureInstance();
		const fastifyAdapter = new FastifyAdapter(fastifyInstance);
		app = await NestFactory.create<NestFastifyApplication>(AppModule, fastifyAdapter);
		// Register compression
		await app.register(compress, { encodings: ['gzip', 'deflate'] });
		console.log('app create');
		// configure cors
		await ServerAdapterService.configureCors(fastifyInstance);

		// configure filters and interceptors
		console.log('getting app config:', appConfig);
		// configure validation exception handlers
		app.setGlobalPrefix(appConfig.contextPath);
		app.useGlobalPipes(
			new ValidationPipe({
				exceptionFactory: (errors) => AppUtilService.customValidationExceptionFactory(errors),
			}),
		);
		app.useGlobalFilters(new CustomExceptionFilter());
		app.useGlobalInterceptors(new HttpCommonInterceptor());

		await app.init();
		return fastifyInstance;
	} catch (err) {
		process.on('unhandledRejection', (event) => {
			process.stderr.write('Closing the app because of unhandled rejection:' + event);
			process.exit(1);
		});

		process.on('SIGTERM', async () => {
			process.stdout.write('Closing the app because Ctrl+C is pressed');
			// TODO: any gracefull shutdown needed ? like closing the database connection
			try {
				await app.close();
			} catch (err) {
				process.stderr.write('Cannot gracefully shutdown the app - hence closing abruptly:', err.message);
				process.exit(1);
			}

			process.exit(1);
		});

		process.stderr.write('Error in creating fastify -Stopping the server:', err.message);
		process.exit(1);
	}
}
