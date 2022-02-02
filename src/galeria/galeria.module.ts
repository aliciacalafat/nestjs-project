// Módulo de la app.
// El decorador @Module() provee de metadata que Nest utiliza para
// organizar la estructura de la app.

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GaleriaController } from './controllers/galeria.controller';
import { Gallery } from './entities/gallery.entity';
import { GaleriaService } from './services/galeria.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Gallery])
  ],
  controllers: [GaleriaController],
  providers: [GaleriaService],
})
export class GaleriaModule {}