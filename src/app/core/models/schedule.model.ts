export interface Horario {
    id: string;
    idLaboratorio: string;
    diaSemana: number; // 1 para Lunes, 2 para Martes, ..., 7 para Domingo
    turno: string; // Mañana, Tarde, Noche, etc.
    horaInicio: string;
    horaFin: string;
}
