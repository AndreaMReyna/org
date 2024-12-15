import { useState } from 'react';
import {v4 as uuid} from "uuid"
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg/MiOrg';
import Equipo from './componentes/Equipo/Equipo';
import Footer from './componentes/Footer/Footer';

function App() {
  // const [nombreVariable, funcionActualizada]= useState (valorInicial)
const[mostrarFormulario, actualizarMostrar] = useState(true)
const [colaboradores, actualizarColaboradores] = useState([{
  id: uuid(),
  equipo: "Mesa Directiva",
  foto: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQsbH4tx7NnaAqd9lzXRB7vsqquoclSjmDElk8mzdf8wGntlbvF",
  nombre: "Irasema de la Parra",
  puesto: "Presidente de la SMMD"

}])

const [equipos, actualizarEquipos] = useState ([
  {
    id: uuid(),
    titulo:"Mesa Directiva",   
    colorPrimario:"#57C278",
    colorSecundario:"#D9F7E9"
  },
  {
    id: uuid(),
    titulo:"Control Administrativo",   
    colorPrimario:"#82CFFA",
    colorSecundario:"#E8F8FF"
  },
  {
    id: uuid(),
    titulo:"Gestión del Teatro",    
    colorPrimario:"#A6D157",
    colorSecundario:"#F0F8E2"
  },
  {
    id: uuid(),
    titulo:"Gestión de la Escuela",  
    colorPrimario:"#E06B69",
    colorSecundario:"#FDE7E8"
  },
  {
    id: uuid(),
    titulo: "Atención al Jurado",  
    colorPrimario:"#DB6EBF",
    colorSecundario:"#FAE9F5"
  }




])


const cambiarMostrar = () => {
  actualizarMostrar (!mostrarFormulario)
}

//Registrar colaborador
const registrarColaborador = (colaborador) => {
  //Spread operator
actualizarColaboradores([...colaboradores, colaborador])
}

//Eliminar colaborador
const eliminarColaborador = (id) => {
  const nuevosColaboradores = colaboradores.filter ((colaborador) => colaborador.id !== id)
  actualizarColaboradores (nuevosColaboradores)
}

//Actualizar color de equipo
const actualizarColor= (color, id) => {
  const equiposActualizados = equipos.map ((equipo) => {
    if (equipo.id === id){
      equipo.colorPrimario = color
    }
    return equipo
  })
  actualizarEquipos(equiposActualizados)

}

//Crear equipo

const crearEquipo = (nuevoEquipo) =>{
  actualizarEquipos([...equipos, {...nuevoEquipo, id:uuid()}])

}

//Ternario--> condicion ? seMuestra : noSeMuestra
//Condicion && seMuestra
  return (
    <div>
      <Header />      
      {
      mostrarFormulario && <Formulario 
      equipos={equipos.map((equipo) => equipo.titulo)} 
      registrarColaborador = {registrarColaborador}
      crearEquipo ={crearEquipo}
      /> 
      }
      
      <MiOrg cambiarMostrar ={cambiarMostrar} />
      {
        equipos.map ( (equipo) => <Equipo 
        datos= {equipo} 
        key={equipo.titulo}
        colaboradores = {colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador = {eliminarColaborador}
        actualizarColor = {actualizarColor}
        />
      )
      }
      <Footer />

    </div>
  );
}

export default App;
