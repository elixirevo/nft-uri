import { Controller, Get, Param } from '@nestjs/common';
import { V0Service } from './v0.service';

@Controller('v0')
export class V0Controller {
  constructor(private v0Service: V0Service) {}

  @Get(':id')
  getMetadataById(@Param('id') id: string) {
    return this.v0Service.getMetadataById(id);
  }
}
