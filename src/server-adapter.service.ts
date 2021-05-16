import { FastifyInstance } from 'fastify';
import cors from 'fastify-cors';
import fastify from 'fastify';
import { v4 as uuidv4 } from 'uuid';

import { AppConfigService } from './modules/common/services/app-config/app-config.service';

export class ServerAdapterService {
	constructor() {}

	static async configureCors(app: FastifyInstance): Promise<void> {
		// eslint-disable-next-line @typescript-eslint/no-var-requires
		await app.register(cors);
	}

	static cconfigureInstance(): FastifyInstance {
		const appConfig = AppConfigService.getAppConfig();
		// return fastify({
		// 	ignoreTrailingSlash: true,
		// 	caseSensitive: true,
		// 	requestIdHeader: 'request-uuid',
		// 	genReqId: () => uuidv4().toString(),
		// 	trustProxy: true,
		// 	pluginTimeout: 100000,
		// 	requestIdLogLabel: 'req-id-label',
		// 	version: appConfig.appVersion,
		// });
		return fastify({
			ignoreTrailingSlash: false,
			caseSensitive: true,
			genReqId: () => uuidv4().toString(),
			trustProxy: true,
			pluginTimeout: appConfig.timeout,
			requestIdHeader: 'req-id',
		});
	}
}
