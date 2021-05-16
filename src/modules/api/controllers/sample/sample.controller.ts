import { Controller, Get } from '@nestjs/common';
import { SampleService } from '../../services/sample/sample.service';

@Controller('sample')
export class SampleController {
	constructor(private readonly sampleService: SampleService) {}

	@Get()
	public async getSample(): Promise<unknown> {
		return this.sampleService.returnSample();
	}
}
