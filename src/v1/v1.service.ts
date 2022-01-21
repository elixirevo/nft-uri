import { Injectable } from '@nestjs/common';
import { V1Contract } from '../ethereum/index';
import metadata from '../../metadata/metadata.json';

@Injectable()
export class V1Service {
  async getMetadataById(id: string) {
    const parseIntId = parseInt(id);
    const isNum: any = await V1Contract.ownerOf(id)
      .then(() => {
        return true;
      })
      .catch(() => {
        return false;
      });
    if (isNum) {
      return metadata[parseIntId - 1];
    } else {
      return 'Unexpected token';
    }
  }
}
