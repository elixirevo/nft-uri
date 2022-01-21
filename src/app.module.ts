import { Module } from '@nestjs/common';
import { V0Module } from './v0/v0.module';
import { V1Module } from './v1/v1.module';

@Module({
  imports: [V0Module, V1Module],
})
export class AppModule {}
