// Controlador básico.
// Son los responsables de manejar los requests de entrada y de devolver las responses al cliente.
// El mecanismo de enrutamiento controla qué controlador recibe qué solicitudes. Es frecuente que 
// cada controlador tenga más de una ruta y que diferentes rutas hagan diferentes acciones.

import { BadRequestException, Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { ApiBadGatewayResponse, ApiNoContentResponse, ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateImageDto } from 'src/galeria/dto/create-image.dto';
import { Gallery } from 'src/galeria/entities/gallery.entity';
import { GaleriaService } from '../services/galeria.service';

@ApiTags('images')
@Controller('images')
export class GaleriaController {
  constructor(private readonly galeriaService: GaleriaService) {}

  // Con Get() creamos un handler para una endpoint con un request específico.
  // El endpoint es definido como el método request Get() y el path de la ruta.
  // Este path para el handler, se determina al concatenar el prefijo declarado por el controlador
  // y el que hemos puesto en el decorador (@...) del método. 
  // En nuestro caso: GET/id.
  @Get()
  async findAll(): Promise<Gallery[]>{
    return await this.galeriaService.findAll();
  }

  @ApiOkResponse({type: Gallery, isArray:true})
  @Get(':id') 
  async findOne(@Param('id') id: string): Promise<Gallery> {
      return await this.galeriaService.findOne(Number(id));
  }

  //@ApiResponse({status: 201, description: 'La imagen fue creada'})
  @ApiNoContentResponse({type: Gallery})
  @ApiBadGatewayResponse()
  @HttpCode(204)
  @Post()
  async create(@Body() createImageDto: CreateImageDto){
    if(!createImageDto.name){
      throw new BadRequestException();
    }
    return this.galeriaService.create(createImageDto);
  }
  
}
