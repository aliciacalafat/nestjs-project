import { Module } from '@nestjs/common';
import { GaleriaModule } from './galeria/galeria.module';
import { GaleriaService } from './galeria/galeria.service';
import { GaleriaController } from './galeria/galeria.controller';

@Module({
  imports: [GaleriaModule],
 // controllers: [GaleriaController],
 // providers: [GaleriaService],
})
export class AppModule {}
