import { ApiProperty } from "@nestjs/swagger";
import { ManyToOne, CreateDateColumn, UpdateDateColumn, Entity, DeleteDateColumn, Unique } from "typeorm";
import { Column } from "typeorm/decorator/columns/Column";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";
import { PermissionSet } from "./permission-set.entity";
import { User } from "./user.entity";

@Entity({name: 'User_PermissionSet_XR'})
@Unique("UQ_USER_PERMISSIONSET",['user','permissionSet'])
export class UserPermissionSetXR {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number

    @ApiProperty()
    @ManyToOne(() => User, (usr) => usr.userPermissionXR)
    user: User

    @ApiProperty()
    @ManyToOne(() => PermissionSet, (perm) => perm.userPermissionXR)
    permissionSet: PermissionSet

    @ApiProperty()
    @Column({nullable: true})
    beginDate: Date

    @ApiProperty()
    @Column({nullable: true})
    endDate: Date

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