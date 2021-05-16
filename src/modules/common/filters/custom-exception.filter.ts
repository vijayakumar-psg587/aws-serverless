import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import * as fastify from 'fastify';
import { APP_CONST } from '../utils/app.constant';

@Catch()
export class CustomExceptionFilter implements ExceptionFilter {
	catch(exception: any, host: ArgumentsHost) {
		console.log('exception coming in:', exception);
		const res = host.switchToHttp().getResponse() as fastify.FastifyReply;
		res.headers({ APP_NAME: APP_CONST.COMMON.APP_NAME }).send(exception);
	}
}
