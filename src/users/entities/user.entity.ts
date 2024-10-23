import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('user')
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column('varchar', {length: 20})
    name:string
    
    @Column('varchar', {length: 20})
    email:string

    @Column('varchar', {length: 20})
    role:string
    
    @Column('varchar', {length: 20})
    password:string

}
