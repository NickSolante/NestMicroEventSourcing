import {Entity, Column, PrimaryGeneratedColumn, BaseEntity} from 'typeorm';

@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    userid: number;

    @Column({ default: 'true' })
    name: string;
}