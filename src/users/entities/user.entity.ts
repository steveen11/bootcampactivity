import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


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

}

enum roleUser{
    'Usuario',
    'Editor',
    'Administador'
}