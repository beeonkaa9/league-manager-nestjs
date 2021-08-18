import { Module } from '@nestjs/common';
import { SeedsModule } from './seeds/seeds.module';

@Module({
  imports: [SeedsModule]
})
export class DatabaseModule {}
