// Servicio básico.
// Los services forman parte de un grupo más grande conocidos como providers: 
// services, repositories, factories, helpers... 
// Una de las ventajas de los providers es que pueden ser inyectados como
// una dependencia, de manera que podemos crear relaciones entre varios objetos,
// delegando la función de conectarlos entre ellos a Nest.


import { Injectable } from '@nestjs/common';
import { CreateImageDto } from 'src/galeria/dto/create-image.dto';
import { data } from 'src/galeria/dto/gallery.dto';
import { Gallery } from 'src/galeria/entities/gallery.entity';

@Injectable()
export class GaleriaService {
 // private readonly images: Gallery[] = [
 //   {id: 1, name: 'silla', price: 180, description: 'holis'},
 //   {id: 2, name: 'taza', price: 5, description: 'jiji'},
 // ]; //donde pone data, tendrías que poner this.images

  findAll(): Gallery[] {
    return data;
  }

  findOne(id:number): Gallery{
    return data.find((gallery) => gallery.id === id);

  }

  create(gallery: CreateImageDto): Gallery{
    const newImage = {id: Date.now(), ...gallery};
    data.push(newImage);
    return newImage;
  }
}