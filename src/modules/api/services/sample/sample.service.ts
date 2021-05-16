import { Injectable } from '@nestjs/common';

@Injectable()
export class SampleService {
	constructor() {}

	public async returnSample() {
		return { message: 'Done' };
	}
}
