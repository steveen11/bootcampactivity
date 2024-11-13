import { IsNotEmpty, IsString, IsInt, IsPositive, MaxLength, IsDate, IsEnum, Min, Max, IsNumber } from 'class-validator';

export class CreateCourseDto {

    @IsNotEmpty({ message: "La descripción no debe estar vacía" })
    @IsString({ message: "La descripción debe ser una cadena de texto" })
    @MaxLength(500, { message: "La descripción no debe exceder los 500 caracteres" })
    readonly description: string;

    @IsNotEmpty({ message: "El nivel mínimo de habilidad no debe estar vacío" })
    readonly minimum_skill: minimumSkill;

    readonly createAt: Date;

    @IsNotEmpty({ message: "El título no debe estar vacío" })
    @IsString({ message: "El título debe ser una cadena de texto" })
    @MaxLength(100, { message: "El título no debe exceder los 100 caracteres" })
    readonly title: string;

    @IsNotEmpty({ message: "El número de semanas no debe estar vacío" })
    @IsInt({ message: "El número de semanas debe ser un número entero" })
    @IsPositive({ message: "El número de semanas debe ser un número positivo" })
    @Min(1, { message: "El número de semanas debe ser al menos 1" })
    @Max(52, { message: "El número de semanas no puede exceder las 52 semanas" })
    readonly weeks: number;

    @IsNotEmpty({ message: "La matrícula no debe estar vacía" })
    @IsNumber({}, { message: "La matrícula debe ser un número" })
    @IsPositive({ message: "La matrícula debe ser un número positivo" })
    readonly tuition: number;

    /* la clave foranea con el bootcamp */
    @IsInt()
    readonly bootcampId: number;
    
}

enum minimumSkill{
    'Beginner',
    'Intermediate',
    'Advance'
}

