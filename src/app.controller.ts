import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Student } from './entities/Student.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //Endpoint: puerta de proyecto
  // - Acepta peticiones de cliente bajo una url Semantica
  // - Retorna el(los) datos esperados por el cliente
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //Segundo endpoint - ESTRUCTURAR UN EDNPOINT
  // 1. Verbo(Metodo) http sobre el cual recibir
  // Metodos disponibles: GET, POST, PUT, DELETE
  // 2. Firma del metodo a ejectuar
  // cuando se invoque el endpoint 
  @Get("/ficha")
  getFicha():string{
    return "endpoint de la ficha 2902093"
  }

  //Tercer endpoint
  @Get("/identificacion/:id/nombre/:nombre/edad/:edad/ciudad/:ciudad")
  identificacion(@Param('id') id:string,
                 @Param('ciudad') ciudad:string,
                 @Query('nombre')nombre:string,
                 @Query('edad')edad: number):Student{
    return new Student(+id, nombre, edad, ciudad);
  }

}
