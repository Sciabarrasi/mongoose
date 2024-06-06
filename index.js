import { connect } from 'mongoose';
import { Estudiantes } from './models/estudiante.js';

async function connectMG() {
  try {
    await connect('mongodb+srv://gian:BzPA9zRWmz2Yq7J1@cluster0.iczeyxe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true });
  } catch (e) {
    console.log(e);
    throw 'can not connect to the db';
  }
}

console.log('conectanto...');
await connectMG();
console.log('conectado!!!');
/*
//GUARDANDO UN USUARIO NUEVO
console.log('GUARDANDO UN ESTUDIANTE NUEVO');
const estudianteNuevo = new Estudiantes(
  { nombre: 'Daniel', apellido: 'Gallo', edad: 25, dni: '37923460', curso: '3B', nota: 2 },


);

const estudianteGuardado = await estudianteNuevo.save();
//console.log(usuarioGuardado);
*/
/*
//UPDATE A UN USUARIO EXISTENTE
console.log('UPDATE A UN ESTUDIANTE EXISTENTE');
const estudianteModificado = await Estudiantes.updateMany(
  { curso: '1A' },
  {
    $set: {
      ingreso: true,
    },
  }
);
console.log(estudianteModificado);
*/

/*
//LEER TODOS LOS USUARIOS + FECHA DE CREACION
const estudiantes = await Estudiantes.find({}, {__v: false});
const estudiantesConFecha = [];

for (const estudiante of estudiantes){
  estudiantesConFecha.push({
  _id: estudiante._id.toString(),
  nombre: estudiante.nombre,
  apellido: estudiante.apellido,
  edad: estudiante.edad,
  dni: estudiante.dni,
  curso: estudiante.curso,
  nota: estudiante.nota,
  ingreso: estudiante.ingreso,
  fechaCreacion: estudiante._id.getTimestamp()
  })
}

console.log({ estudiantesConFecha})
//console.log(listarEstudiantes);
*/ 

/*
//LEER ALGUNOS USUARIOS
console.log('LEER ESTUDIANTES');
const algunosEstudiantes = await Estudiantes.find({}).sort({ name: 1 }).limit(2).skip(25);
console.log(algunosEstudiantes);
*/
/*
//BORRAR UN USUARIO EXISTENTE
console.log('BORRAR UN ESTUDIANTE EXISTENTE');
const estudianteBorrar = await Estudiantes.deleteMany({ ingreso: true });
console.log(estudianteBorrar);
*/


//LEER TODOS LOS USUARIOS
console.log('LEER TODOS LOS ESTUDIANTES');
const estudiantes = await Estudiantes.find();

console.log(estudiantes);
