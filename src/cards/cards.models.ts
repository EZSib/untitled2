import {Model, Table, Column, DataType, BelongsTo, ForeignKey} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/users.models";
import {UserColumn} from "../columns/columns.models";

interface CardCreationAttrs {
    cardId: string;

}
@Table({tableName: 'cards'})
export class UserCard extends Model <UserCard, CardCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'Interesting', description: 'CardName(empty when creating )'})
    @Column({type: DataType.STRING, defaultValue: ''})
    cardName: string;

    @ApiProperty({example: '65353795450c6870df94394b', description: 'trelloCardID'})
    @Column({type: DataType.STRING, unique:true})
    cardId: string;

    @Column({type: DataType.STRING })
    listId: string;

    @ForeignKey(() => User)
    @ApiProperty({example: 0, description: 'autoFilled'})
    @Column({type: DataType.INTEGER})
    userId: number;


    @BelongsTo(() => User)
    author: User;

}