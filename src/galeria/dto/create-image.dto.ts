// Objeto para transportar datos. El DTO (Dara Transfer Object) contiene las propiedades del objeto. 
// Datos que pueden tener su origen en una o más endidades de información.

import { ApiProperty } from "@nestjs/swagger";

export class CreateImageDto{
    @ApiProperty({
        description: 'Image Name',
        type: 'string',
    })
    name: string;

    @ApiProperty({
        description: 'Product Price',
        type: 'number',
    })
    price: number;

    @ApiProperty({
        description: 'Object Description',
        type: 'string',
    })
    description: string;

}