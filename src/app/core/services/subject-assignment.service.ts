import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AsignacionMaterias } from '../models/subject-assignment.model';

@Injectable({
  providedIn: 'root'
})
export class SubjectAssignmentService {
  private asignacionesMateriasCollection: AngularFirestoreCollection<AsignacionMaterias>;
  asignacionesMaterias: Observable<AsignacionMaterias[]>;

  constructor(private firestore: AngularFirestore) {
    this.asignacionesMateriasCollection = this.firestore.collection<AsignacionMaterias>('asignacionesMaterias');
    this.asignacionesMaterias = this.asignacionesMateriasCollection.valueChanges({ idField: 'id' });
  }

  // Método para obtener todas las asignaciones de materias
  getAsignacionesMaterias(): Observable<AsignacionMaterias[]> {
    return this.asignacionesMaterias;
  }

  // Método para agregar una nueva asignación de materia
  async agregarAsignacionMateria(asignacionMateria: AsignacionMaterias): Promise<any> {
    const numAsignaciones = await this.asignacionesMateriasCollection.ref.get().then(snapshot => snapshot.size);
    asignacionMateria.id = (numAsignaciones + 1).toString();
    return this.asignacionesMateriasCollection.add(asignacionMateria);
  }

  // Método para obtener una asignación de materia por su ID
  getAsignacionMateriaById(id: string): Observable<AsignacionMaterias | undefined> {
    return this.asignacionesMateriasCollection.doc<AsignacionMaterias>(id).valueChanges().pipe(
      map(asignacionMateria => asignacionMateria ? { ...asignacionMateria, id } as AsignacionMaterias : undefined)
    );
  }

  // Método para actualizar una asignación de materia
  actualizarAsignacionMateria(id: string, data: any): Promise<void> {
    return this.asignacionesMateriasCollection.doc(id).update(data);
  }

  // Método para eliminar una asignación de materia
  eliminarAsignacionMateria(id: string): Promise<void> {
    return this.asignacionesMateriasCollection.doc(id).delete();
  }
}
