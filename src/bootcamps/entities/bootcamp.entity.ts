import { Course } from "src/courses/entities/course.entity";
import { Review } from "src/reviews/entities/review.entity";
import { User } from "src/users/entities/user.entity";
import {Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { Column } from "typeorm";





@Entity('bootcamps')
export class Bootcamp {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'int',
        nullable: true
    })
    phone:number

    @Column('varchar', {length: 20})
    name: string

    @Column('varchar', {length: 100})
    address: string
    
    @Column('text')
    topics: string

    @Column('double')
    averageRaiting: number

    @Column('int')
    usuarioId: number

    @Column({type: 'timestamp',
        name: 'createAt',
        default: () => 'CURRENT_TIMESTAMP'
})
createAt:Date

@OneToMany(()=> Course , (course)=> course.bootcamp)

courses: Course[]


@OneToMany(()=> Review , (review)=> review.bootcamp)

review: Review[]


@ManyToOne(()=> User , (user)=> user.bootcamp)

user: User[]
}
