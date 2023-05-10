import { ApiProperty } from "@nestjs/swagger";
import { Entity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";
import { Column } from "typeorm/decorator/columns/Column";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";

@Entity({name: 'Customer'})
export class Customer {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number

    @ApiProperty()
    @Column({length: 50})
    firstName: string

    @ApiProperty()
    @Column({length: 50})
    lastName: string

    @ApiProperty()
    @Column({length: 50})
    email: string

    @ApiProperty()
    @Column({length: 100})
    category: string

    @ApiProperty()
    @CreateDateColumn()
    createdOn: Date

    @ApiProperty()
    @UpdateDateColumn()
    updatedOn: Date

    @ApiProperty()
    @DeleteDateColumn()
    deletedOn: Date
}