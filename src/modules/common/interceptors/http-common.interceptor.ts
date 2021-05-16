import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as fastify from 'fastify';
import { APP_CONST } from '../utils/app.constant';

@Injectable()
export class HttpCommonInterceptor implements NestInterceptor {
	intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
		return next.handle().pipe(
			map((resp) => {
				const res = context.switchToHttp().getResponse() as fastify.FastifyReply;
				res.header('aws-app-name', APP_CONST.COMMON.APP_NAME);
				return resp;
			}),
		);
	}
}
