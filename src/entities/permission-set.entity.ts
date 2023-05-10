import { ApiProperty } from "@nestjs/swagger";
import { CreateDateColumn, UpdateDateColumn, Entity, DeleteDateColumn, ManyToMany, OneToMany } from "typeorm";
import { Column } from "typeorm/decorator/columns/Column";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";
import { PermissionSetPermission } from "./permission-set.permission.entity";
import { UserPermissionSetXR } from "./user.permission-set-xr.entity";

@Entity({name: 'PermissionSet'})
export class PermissionSet {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number

    @ApiProperty()
    @Column({length: 50, unique: true})
    permissionSetName: string

    @ApiProperty()
    @Column({length: 200})
    permissionSetDescription: string

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

    @ApiProperty()
    @OneToMany(() => PermissionSetPermission, (permset) => permset.permissionSet)
    permissions: PermissionSetPermission[]
}