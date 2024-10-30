import {Entity,
    PrimaryGeneratedColumn } from "typeorm";

import { Column } from "typeorm";


@Entity('review')

export class Review {

    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'varchar',
            length: 100,
            nullable: true
    }
    )
    title:string
    
    @Column({type: 'text',
            nullable: false
    }
    )
    comment:string

    @Column({type: 'tinyint',
        nullable: false
    })
    rating:number
}
