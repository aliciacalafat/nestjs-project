import { ApiProperty } from "@nestjs/swagger";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

// export class Gallery {
//     @ApiProperty()
//     id: number;
//     @ApiProperty()
//     name: string;
//     @ApiProperty()
//     price: number;
//     @ApiProperty()
//     description: string;
// }

@Entity("Gallery")
export class Gallery {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    price: number;
    
    @Column()
    description: string;
}