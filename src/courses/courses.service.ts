import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { Bootcamp } from 'src/bootcamps/entities/bootcamp.entity';

@Injectable()
export class CoursesService {

  constructor(@InjectRepository(Course) private courseRepository:Repository<Course>,
    @ InjectRepository (Bootcamp) private bootcampRepository:Repository<Bootcamp>
  ) {
    
  }

   async create(payload: CreateCourseDto ) {
    const { title, description, weeks, tuition, minimum_skill, createAt, bootcampId } = payload
    const bootcampById = await this.bootcampRepository.findOneBy({id: bootcampId})

    const newCourse = new Course()
    newCourse.title  = title
    newCourse.description = description
    newCourse.weeks = weeks
    newCourse.tuition = tuition
    newCourse.minimum_skill = minimum_skill,
    newCourse.createAt = createAt
    newCourse.bootcamp = bootcampById
    return this.courseRepository.save(newCourse)
  }

  findAll() {
    return this.courseRepository.find();
  }

  findOne(id: number) {
    return this.courseRepository.findOneBy({id});
  } 

  async update(id: number, payload: UpdateCourseDto) {
    //1. Encontrar por id
    const updCourses= await this.courseRepository.findOneBy({id});
    //2. Hacer update(payload)
    return this.courseRepository.merge(updCourses, payload)
    //3 grabar cambios
    
  }

  async remove(id: number) {
    const delCourse= await this.courseRepository.findOneBy({id});
    //2.borrar bootcamp
    this.courseRepository.delete(delCourse)
    //3. return
    return delCourse
  }
}

