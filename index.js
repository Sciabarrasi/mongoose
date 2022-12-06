import { connect } from 'mongoose';
import { Usuarios } from './models/usuario.js';

async function connectMG() {
  try {
    await connect('mongodb://127.0.0.1:27017/ecommerce', { useNewUrlParser: true });
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
console.log('GUARDANDO UN USUARIO NUEVO');
const usuarioNuevo = new Usuarios({
  name: 'ana',
  usuario: 'ana',
  email: 'guille@guille.com',
  password: 123123123,
});

const usuarioGuardado = await usuarioNuevo.save();
//console.log(usuarioGuardado);

//UPDATE A UN USUARIO EXISTENTE
console.log('UPDATE A UN USUARIO EXISTENTE');
const usuarioModificado = await Usuarios.updateOne(
  { name: 'guille' },
  {
    $set: {
      email: 'modificado@gmail.com',
    },
  }
);
//console.log(usuarioModificado);

//LEER TODOS LOS USUARIOS
//console.log('LEER TODOS LOS USUARIOS');
const usuarios = await Usuarios.find({});
//console.log(usuarios);

//LEER ALGUNOS USUARIOS
console.log('LEER USUARIOS');
const algunosUsuarios = await Usuarios.find({}).sort({ name: 1 }).limit(2).skip(25);
//console.log(algunosUsuarios);

//BORRAR UN USUARIO EXISTENTE
console.log('BORRAR UN USUARIO EXISTENTE');
const usuarioBorrar = await Usuarios.deleteOne({ name: 'guille' });
//console.log(usuarioBorrar);
 */
