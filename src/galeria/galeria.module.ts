// Módulo de la app.
// El decorador @Module() provee de metadata que Nest utiliza para
// organizar la estructura de la app.

import { Module } from '@nestjs/common';
import { GaleriaController } from './galeria.controller';
import { GaleriaService } from './galeria.service';

@Module({
 // imports: [],
  controllers: [GaleriaController],
  providers: [GaleriaService],
})
export class GaleriaModule {}