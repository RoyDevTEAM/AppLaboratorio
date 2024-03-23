export interface Usuario {
    id: string;
    nombre: string;
    apellido: string;
    email: string;
    contraseña: string;
    estado: string;
    tipo: string; // Decano, Docente, Auxiliar
}
