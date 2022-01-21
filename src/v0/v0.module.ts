import { Module } from '@nestjs/common';
import { V0Controller } from './v0.controller';
import { V0Service } from './v0.service';

@Module({
  controllers: [V0Controller],
  providers: [V0Service],
})
export class V0Module {}
