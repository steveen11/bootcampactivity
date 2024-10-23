import {Entity,
     PrimaryGeneratedColumn } from "typeorm";

import { Column } from "typeorm";





@Entity('bootcamps')
export class Bootcamp {
    @PrimaryGeneratedColumn()
    id: number

    @Column('varchar', {length: 20})
    phone:string

    @Column('varchar', {length: 20})
    name: string

    @Column('varchar', {length: 100, default: "XXXX" })
    address: string

    @Column('text')
        topics: string

    @Column('double')
        averageRaiting: number

    @Column('date')
        createAt: Date
}
