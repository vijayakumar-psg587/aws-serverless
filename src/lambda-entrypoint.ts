import { Context, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

import * as fastify from 'fastify';
import { proxy } from 'aws-serverless-fastify';
import { bootstrap } from './app';

let fastifyServer: fastify.FastifyInstance;

export async function handler(event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {
	console.log('path is', event.path);
	if (!fastifyServer) {
		fastifyServer = await bootstrap();
	}
	return await proxy(fastifyServer, event, context);
}
