import { Bootcamp } from "src/bootcamps/entities/bootcamp.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity('user')
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'varchar',
             length: 30,
            nullable: true})
    name:string
    
    @Column({type: 'varchar',
        length: 30,
       nullable: true})
    email:string

    @Column({type: 'enum',
       nullable: true,
    name: "role",
       enum:[
        'Usuario',
        'Editor',
        'Administrador']})
    role:roleUser
    
    @Column({type: 'varchar',
        length: 30,
       nullable: true})    password:string
    
       @ManyToOne(type => Bootcamp, (Bootcamp)=>Bootcamp.user)
       bootcamp: Bootcamp
   
}

enum roleUser{
    'Usuario',
    'Editor',
    'Administador'
}

