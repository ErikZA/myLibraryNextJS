import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
