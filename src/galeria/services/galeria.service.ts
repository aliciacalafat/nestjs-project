// Servicio básico.
// Los services forman parte de un grupo más grande conocidos como providers: 
// services, repositories, factories, helpers... 
// Una de las ventajas de los providers es que pueden ser inyectados como
// una dependencia, de manera que podemos crear relaciones entre varios objetos,
// delegando la función de conectarlos entre ellos a Nest.


import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateImageDto } from 'src/galeria/dto/create-image.dto';
import { data } from 'src/galeria/dto/gallery.dto';
import { Gallery } from 'src/galeria/entities/gallery.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GaleriaService {
 // private readonly images: Gallery[] = [
 //   {id: 1, name: 'silla', price: 180, description: 'holis'},
 //   {id: 2, name: 'taza', price: 5, description: 'jiji'},
 // ]; //donde pone data, tendrías que poner this.images
  constructor(
    @InjectRepository(Gallery)
    private galleryRepository: Repository<Gallery>,
  ){}

  async findAll(): Promise<Gallery[]> {
    return await this.galleryRepository.find();
  }

  async findOne(id:number): Promise<Gallery>{
    return await this.galleryRepository.findOne(id);

  }

  async create(gallery: CreateImageDto): Promise<Gallery>{
    const newImage = {id: Date.now(), ...gallery};
    data.push(newImage);
    return newImage;
  }
}