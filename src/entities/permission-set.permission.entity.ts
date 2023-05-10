import { ApiProperty } from "@nestjs/swagger";
import { ManyToOne, CreateDateColumn, UpdateDateColumn, Entity, DeleteDateColumn, Unique } from "typeorm";
import { Column } from "typeorm/decorator/columns/Column";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";
import { PermissionSet } from "./permission-set.entity";

@Entity({name: 'PermissionSet_Permission'})
@Unique("UQ_PERMISSIONSET_PERMISSION",['permissionSet','permissionName'])
export class PermissionSetPermission {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number

    @ApiProperty()
    @ManyToOne(() => PermissionSet, (perm) => perm.permissions)
    permissionSet: PermissionSet

    @ApiProperty()
    @Column({length: 50})
    permissionName: string

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