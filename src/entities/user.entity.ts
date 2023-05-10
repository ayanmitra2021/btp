import { ApiProperty } from "@nestjs/swagger";
import { OneToMany, CreateDateColumn, UpdateDateColumn, Entity, DeleteDateColumn, VersionColumn } from "typeorm";
import { Column } from "typeorm/decorator/columns/Column";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";
import { UserPermissionSetXR } from "./user.permission-set-xr.entity";

@Entity({name: 'User'})
export class User {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number

    @ApiProperty()
    @Column({length: 50, unique: true})
    userId: string

    @ApiProperty()
    @Column({length: 50})
    email: string

    @ApiProperty()
    @Column({length: 20, nullable: true})
    division: string

    @ApiProperty()
    @Column({length: 20, nullable: true})
    subDivision: string

    @ApiProperty()
    @CreateDateColumn()
    createdOn: Date

    @ApiProperty()
    @UpdateDateColumn()
    updatedOn: Date

    @ApiProperty()
    @DeleteDateColumn()
    deletedOn: Date

    @ApiProperty()
    @OneToMany(() => UserPermissionSetXR, (uxr) => uxr.user)
    userPermissionXR: UserPermissionSetXR[]
}