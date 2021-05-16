import { bootstrap } from './app';
import { AppConfigService } from './modules/common/services/app-config/app-config.service';

export async function startLocal(): Promise<any> {
	const app = await bootstrap();
	const appConfig = AppConfigService.getAppConfig();
	app.listen(appConfig.port, async (err) => {
		if (err) {
			process.stderr.write(`Error starting the fastify app - ${err.message}`);
			await app.close();
			process.exit(1);
		}
		console.log(`Server started running on port -${appConfig.port}`);
	});
}
startLocal();
