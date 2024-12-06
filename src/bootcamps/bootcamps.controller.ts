import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BootcampsService } from './bootcamps.service';
import { CreateBootcampDto } from './dto/create-bootcamp.dto';
import { UpdateBootcampDto } from './dto/update-bootcamp.dto';

@Controller('bootcamps')
export class BootcampsController {
  constructor(private readonly bootcampsService: BootcampsService) {}

  @Post()
  create(@Body() payload: CreateBootcampDto ) {
    //payload: sinonimo del body de la request
    //create, update
    return this.bootcampsService.create(payload);
  }

  @Get('usuario/:usuarioId/tema/:tema')
  async obtenerBootcampsPorUsuarioYTema(
    @Param('usuarioId') usuarioId: string, 
    @Param('tema') tema: string
  ) {
    return this.bootcampsService.obtenerBootcampsPorUsuarioYTema(+usuarioId, tema);
  }



  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bootcampsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() payload:UpdateBootcampDto) {
    return this.bootcampsService.update(+id, payload);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bootcampsService.remove(+id);
  }
}


