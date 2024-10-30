import { timestamp } from "rxjs"
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('courses')
export class Course {
    @PrimaryGeneratedColumn()
    id:number

    @Column('varchar', {length: 100})
    title:string

    @Column('varchar', {length: 60})
    description:string

    @Column({type: 'tinyint',
            nullable:true,
            default: 4
    })
    weeks:number

    @Column({type: 'decimal',
            nullable: true
    })
    tuition:number

    @Column({type: 'enum',
            name: "minimun_skill",
            enum:[
                'Beginner',
                'Intermediate',
                'Advance']

    })
    minimum_skill:minimumSkill

    @Column({type: 'timestamp',
            name: 'createAt',
            default: () => 'CURRENT_TIMESTAMP'
    })
    createAt:Date

}

enum minimumSkill{
    'Beginner',
    'Intermediate',
    'Advance'
}
