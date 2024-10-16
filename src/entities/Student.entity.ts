export class Student{

    constructor(id:number, nom:string, edad:number, ciu:string){
        this.identificacion= id;
        this.nombre= nom;
        this.edad= edad;
        this.ciudad= ciu;
    }

    identificacion:number;
    nombre: string;
    edad: number;
    ciudad: string;
}