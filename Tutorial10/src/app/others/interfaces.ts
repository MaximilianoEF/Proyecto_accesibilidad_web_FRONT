export interface Usuario {
    ID: number,
    Nombre: string,
    Apellido: string,
    Nick: string,
    Email: string,
    Contraseña: string,
    Tipo: UserType
}

export enum UserType {
    Administrador,
    Cliente,
    Tecnico
}