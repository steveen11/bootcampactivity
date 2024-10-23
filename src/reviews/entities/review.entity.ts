import {Entity,
    PrimaryGeneratedColumn } from "typeorm";

import { Column } from "typeorm";


@Entity('review')

export class Review {

    @PrimaryGeneratedColumn()
    id: number

    @Column('varchar', {length: 20})
    title:string
    
    @Column('varchar', {length: 20})
    comment:string

    @Column('varchar', {length: 20})
    rating:string



}
