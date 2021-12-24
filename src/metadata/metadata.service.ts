import { Injectable } from '@nestjs/common';

@Injectable()
export class MetadataService {
  getMetadataById(id: string) {
    return `${id} is id`;
  }
}
