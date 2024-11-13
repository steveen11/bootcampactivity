import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';
import { Bootcamp } from 'src/bootcamps/entities/bootcamp.entity';
import { CreateBootcampDto } from 'src/bootcamps/dto/create-bootcamp.dto';
import { CreateReviewDto } from './dto/create-review.dto';

@Injectable()
export class ReviewsService {

  constructor(@InjectRepository(Review)
    private reviewRepository:Repository<Review>,
    @InjectRepository(Bootcamp)
    private bootcampRepository:Repository<Bootcamp>) {
    
  }

  async create(payload: CreateReviewDto) {
    const {title, comment, rating, bootcampId} = payload
    const bootcampById = await this.bootcampRepository.findOneBy({id: bootcampId})

    const newReview = new Review()
    newReview.title = title
    newReview.comment = comment
    newReview.rating = rating
    newReview.bootcamp=bootcampById
    return this.reviewRepository.save(newReview)


  }

  findAll() {
    return this.reviewRepository.find();
  }

  findOne(id: number) {
    return this.reviewRepository.findOneBy({id});
  }

  async update(id: number, payload: any) {
    //1. Encontrar por id
    const updReview= await this.reviewRepository.findOneBy({id});
    //2. Hacer update(payload)
    return this.reviewRepository.merge(updReview, payload)
    //3 grabar cambios
    
  }

  async remove(id: number) {
    const delReview= await this.reviewRepository.findOneBy({id});
    //2.borrar bootcamp
    this.reviewRepository.delete(delReview)
    //3. return
    return delReview
  }
}
