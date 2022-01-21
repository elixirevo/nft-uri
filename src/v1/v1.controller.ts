import { Controller, Get, Param } from '@nestjs/common';
import { V1Service } from './v1.service';

@Controller('v1')
export class V1Controller {
  constructor(private v1Service: V1Service) {}

  @Get(':id')
  getMetadataById(@Param('id') id: string) {
    return this.v1Service.getMetadataById(id);
  }
}
