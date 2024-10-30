import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {


  constructor(@InjectRepository(User)
    private userRepository:Repository<User>) {
    
  }

  create(payload: any) {
    const newReview=this.userRepository.create(payload)
    return this.userRepository.save(newReview)
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOneBy({id});
  }

  async update(id: number, payload: any) {
    //1. Encontrar por id
    const updUser= await this.userRepository.findOneBy({id});
    //2. Hacer update(payload)
    return this.userRepository.merge(updUser, payload)
    //3 grabar cambios
    
  }

  async remove(id: number) {
    const delUser= await this.userRepository.findOneBy({id});
    //2.borrar bootcamp
    this.userRepository.delete(delUser)
    //3. return
    return delUser
  }
}