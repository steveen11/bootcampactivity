import {Entity,
     PrimaryGeneratedColumn } from "typeorm";

import { Column } from "typeorm";





@Entity('bootcamps')
export class Bootcamp {
    @PrimaryGeneratedColumn()
    id: number

    @Column('int')
    phone:number

    @Column('varchar', {length: 20})
    name: string

    @Column('varchar', {length: 100})
    address: string
    
    @Column('text')
    topics: string

    @Column('double')
    averageRaiting: number

    @Column({type: 'timestamp',
        name: 'createAt',
        default: () => 'CURRENT_TIMESTAMP'
})
createAt:Date

}
