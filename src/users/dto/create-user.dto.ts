enum roleUser{
    'Usuario',
    'Editor',
    'Administador'
}

export class CreateUserDto {

    readonly name:string;
    readonly email: string;
    readonly role:roleUser;
    readonly password:string;


}
