import { Module } from '@nestjs/common';
import { GaleriaModule } from './galeria/galeria.module';
import { GaleriaService } from './galeria/services/galeria.service';
import { GaleriaController } from './galeria/controllers/galeria.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'alicia',
      password: '1234',
      database: 'my_db',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false,
      retryDelay: 3000,
      retryAttempts: 10
    }),
    GaleriaModule
  ],
 // controllers: [GaleriaController],
 // providers: [GaleriaService],
})
export class AppModule {}
