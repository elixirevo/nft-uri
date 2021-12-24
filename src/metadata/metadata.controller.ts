import { Controller, Get, Param } from '@nestjs/common';
import { MetadataService } from './metadata.service';

@Controller('metadata')
export class MetadataController {
  constructor(private metadataService: MetadataService) {}
  @Get(':id')
  getMetadataById(@Param('id') id: string) {
    return this.metadataService.getMetadataById(id);
  }
}
