import { Injectable } from '@nestjs/common';
import { CreateBootcampDto } from './dto/create-bootcamp.dto';
import { UpdateBootcampDto } from './dto/update-bootcamp.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Bootcamp } from './entities/bootcamp.entity';
import { Repository } from 'typeorm';


@Injectable()
export class BootcampsService {

  constructor(@InjectRepository(Bootcamp) 
    private bootcampRepository: Repository<Bootcamp>){
    }
  
    create(payload: any) {
      const newBootcamp= this.bootcampRepository.create(payload)
      return this.bootcampRepository.save(newBootcamp)
    }

  findAll() {
    return this.bootcampRepository.find();
  }

  findOne(id: number) {
    return this.bootcampRepository.findOneBy({id});
  }

  async update(id: number, payload: any) {
    //1. Encontrar por id
    const updBootcamp= await this.bootcampRepository.findOneBy({id});
    //2. Hacer update(payload)
    return this.bootcampRepository.merge(updBootcamp, payload)
    //3 grabar cambios
    
  }

   async remove(id: number) {
    const delBootcamp= await this.bootcampRepository.findOneBy({id});
    //2.borrar bootcamp
    this.bootcampRepository.delete(delBootcamp)
    //3. return
    return delBootcamp
  }
}
