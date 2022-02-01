import { ApiProperty } from "@nestjs/swagger";

export class Gallery {
    @ApiProperty()
    id: number;
    @ApiProperty()
    name: string;
    @ApiProperty()
    price: number;
    @ApiProperty()
    description: string;
}