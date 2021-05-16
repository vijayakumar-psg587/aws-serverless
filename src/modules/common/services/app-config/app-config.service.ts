import { Injectable } from '@nestjs/common';
import { AppConfigModel } from '../../models/app-config.model';
import { APP_CONST } from '../../utils/app.constant';

@Injectable()
export class AppConfigService {
	static appConfigModel: AppConfigModel;
	constructor() {}

	static getAppConfig(): AppConfigModel {
		if (!AppConfigService.appConfigModel) {
			AppConfigService.appConfigModel = new AppConfigModel();
			AppConfigService.appConfigModel.contextPath = APP_CONST.COMMON.APP_CONTEXT;
			AppConfigService.appConfigModel.retries = +process.env.HTTP_RETRIES;
			AppConfigService.appConfigModel.port = process.env.APP_PORT ? process.env.APP_PORT : APP_CONST.COMMON.DEFAULT_APP_PORT;
			AppConfigService.appConfigModel.host = process.env.APP_HOST ? process.env.APP_HOST : null;
			AppConfigService.appConfigModel.appVersion = process.env.APP_VERSION;
			AppConfigService.appConfigModel.timeout = +process.env.HTTP_TIMEOUT;
			AppConfigService.appConfigModel.maxRedirects = +process.env.HTTP_MAX_REDIRECTS;
			AppConfigService.appConfigModel.maxSockets = +process.env.HTTP_MAX_SOCKETS;
		}
		return AppConfigService.appConfigModel;
	}
}
