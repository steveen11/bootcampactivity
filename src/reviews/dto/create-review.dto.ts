import { IsNotEmpty, IsString, MaxLength, IsInt, Min, Max } from 'class-validator';

export class CreateReviewDto {

  @IsNotEmpty({ message: 'El título no debe estar vacío' })
  @IsString({ message: 'El título debe ser una cadena de texto' })
  @MaxLength(100, { message: 'El título no debe exceder los 100 caracteres' })
  readonly title: string;

  @IsNotEmpty({ message: 'El comentario no debe estar vacío' })
  @IsString({ message: 'El comentario debe ser una cadena de texto' })
  @MaxLength(500, { message: 'El comentario no debe exceder los 500 caracteres' })
  readonly comment: string;

  @IsInt({ message: 'La calificación debe ser un número entero' })
  @Min(1, { message: 'La calificación no puede ser menor a 1' })
  @Max(5, { message: 'La calificación no puede ser mayor a 5' })
  readonly rating: number;  
}
