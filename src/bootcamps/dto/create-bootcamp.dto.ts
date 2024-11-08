import { IsAlpha, IsDate, IsInt, IsNotEmpty, IsPositive, IsString, MaxLength, Min, Max } from "class-validator";

export class CreateBootcampDto {
    
    @IsNotEmpty({ message: "El nombre no debe estar vacío" })
    @IsAlpha('es-ES', { message: "El nombre solo puede contener letras" })
    @MaxLength(50, { message: "El nombre no debe exceder los 100 caracteres" })
    readonly name: string;

    @IsInt ({message: "el telefono debe ser numero"})
    @IsNotEmpty({ message: "El teléfono no debe estar vacío" })
    @MaxLength(15, { message: "El teléfono no debe exceder los 15 caracteres" }) 
    readonly phone: number;  

    @IsNotEmpty({ message: "La dirección no debe estar vacía" })
    @IsString({ message: "La dirección debe ser una cadena de texto" })
    @MaxLength(255, { message: "La dirección no debe exceder los 255 caracteres" })
    readonly address: string;

    @IsNotEmpty({ message: "Los temas no deben estar vacíos" })
    @IsString({ message: "Los temas deben ser una cadena de texto" })
    @MaxLength(255, { message: "Los temas no deben exceder los 255 caracteres" })
    readonly topics: string;

    @IsPositive({ message: "La calificación promedio debe ser un número positivo" })
    @Min(1, { message: "La calificación promedio no puede ser menor a 1" })
    @Max(10, { message: "La calificación promedio no puede ser mayor a 10" })
    readonly averageRaiting: number;

    @IsNotEmpty({ message: "La fecha de creación no debe estar vacía" })
    @IsDate({ message: "La fecha de creación debe ser una fecha válida" })
    readonly createAt: Date;
}
