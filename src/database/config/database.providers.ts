import { TypeOrmModule } from '@nestjs/typeorm';
import { configuration } from './ormconfig';

export const DatabaseProvider = TypeOrmModule.forRootAsync({
  useFactory: () => configuration,
});
