import { Injectable, NotFoundException } from '@nestjs/common';
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
  
    async obtenerBootcampsPorUsuarioYTema(p0: number, tema: string): Promise<Bootcamp[]> { 
      return this.bootcampRepository.createQueryBuilder('bootcamp') .where('bootcamp.usuarioId = :usuarioId', { usuarioId: 3 })
    .andWhere('bootcamp.topics = :topics', { topics: 'web' }) .getMany(); 
  }

    create(payload: any) {
      const newBootcamp= this.bootcampRepository.create(payload)
      return this.bootcampRepository.save(newBootcamp)
    }

  findAll() {
    return this.bootcampRepository.find();
  }

  findOne(id: number) {
    const b = this.bootcampRepository.findOneBy({id});
     if (!b){
    throw new NotFoundException (`no existe el bootcamp con id ${id}`)}
      else{
        return b
      }
    }

    

  async update(id: number, payload: any) {
    //1. Encontrar por id
    const updBootcamp= await this.bootcampRepository.findOneBy({id});
    if (!updBootcamp){
      throw new NotFoundException (`no existe el bootcamp con id ${id}`)
    }
    //2. Hacer update(payload)
    return this.bootcampRepository.merge(updBootcamp, payload)
  }

   async remove(id: number) {
    const delBootcamp= await this.bootcampRepository.findOneBy({id});
    if (!delBootcamp){
      throw new NotFoundException (`no existe el bootcamp con id ${id}`)
    }
    //2.borrar bootcamp
    this.bootcampRepository.delete(delBootcamp)
    //3. return
    return delBootcamp
  }
}
