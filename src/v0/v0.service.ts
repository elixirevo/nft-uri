import { Injectable } from '@nestjs/common';
import { V0Contract } from '../klaytn/index';
import metadata from '../../metadata/metadata.json';

@Injectable()
export class V0Service {
  async getMetadataById(id: string) {
    const parseIntId = parseInt(id);
    const isNum: any = await V0Contract.ownerOf(id)
      .then(() => {
        return true;
      })
      .catch(() => {
        return false;
      });
    if (isNum) {
      return metadata[parseIntId - 1];
    } else {
      return 'Unexpected token id';
    }
  }
}
