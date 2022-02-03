import { Module } from '@nestjs/common';
import { GaleriaModule } from './galeria/galeria.module';
import { GaleriaService } from './galeria/services/galeria.service';
import { GaleriaController } from './galeria/controllers/galeria.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Console } from 'console';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      // port: 5431,
      // username: 'alicia',
      // password: '1234',
      // database: 'my_db',
      url: "postgresql://alicia:1234@database:5432/my_db",
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
//    entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false,
      migrations: [__dirname + "/database/migrations/*{.ts,.js}"],
      migrationsTableName: "migrations_typeorm",
      migrationsRun: true,
      autoLoadEntities: true,
    }),
    GaleriaModule
  ],
 // controllers: [GaleriaController],
 // providers: [GaleriaService],
})
export class AppModule {}


// En el ormconfig.json: {
//   "type": "postgres",
//   "host": "localhost",
//   "port": 5431,
//   "username": "alicia",
//   "password": "1234",
//   "database": "my_db",
//   "entities": ["src/**/*.entity.ts"],
//   "synchronize": false,
//   "migrationsTableName": "migrations",
//   "migrations": ["src/database/migrations/*.ts"],
//   "cli":{
//       "migrationsDir": "src/database/migrations"
//   }
// }
