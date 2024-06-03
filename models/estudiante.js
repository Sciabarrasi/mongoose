import { Schema, model } from 'mongoose';

const EstudianteSchema = new Schema({
  nombre: { type: String, required: true},
  apellido: { type: String, required: true},
  edad: { type: Number, required: true},
  dni: { type: String, required: true},
  curso: { type: String, required: true},
  nota: {type: Number, required: true},
  ingreso: {required: false}
});

export const Estudiantes = model('estudiantes', EstudianteSchema);
