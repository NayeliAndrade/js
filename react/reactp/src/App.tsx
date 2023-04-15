//import reactLogo from './assets/react.svg'
//import { Fragment } from "react";
import  React  from "react";
import './App.css';
import img from "./assets/img.jpg"
const title = "Encuestas"

const names: string[] = ["juan","jorge","victor","felix"]

const users = [
  { edad: 17, nombre: 'Nicolas', apellido: 'Soto' },
  { edad: 32, nombre: 'Chanchito', apellido: 'Feliz' },
  { edad: 8, nombre: 'Loreto', apellido: 'Fernandes' },
  { edad: 40, nombre: 'Sofia', apellido: 'Zapata' },
];

const persona = {
  name:"Marcelo",
  lastName: "Diaz",
  age:30,
  email:"as@email.com"
}

interface IlifeStatusProps{
  lifeStatus: boolean
}

const LifeStatusVerify:React.FC<IlifeStatusProps> = ({lifeStatus})=>lifeStatus ? <h1>vivo</h1> : <h1>muerto</h1>


interface Imarried{
  marriedStatus: boolean
}

const IsMarried:React.FC<Imarried> = ({marriedStatus}) => marriedStatus ? <h3>Casado</h3> : <h3>soltero</h3>


interface IOffLine {
  line: boolean
}


const IsOnline:React.FC<IOffLine> = ({line}) => line ? <p>Online</p> : <p>Off line</p>

function App() {
  const lifeStatus = true;
  const marriedStatus = false;
  const line = false
  return(
    <div className='containerPrincipal'>
      <h1>{title}</h1>
      <p>{persona.age}</p>
      <img src={img} alt="" />
      <LifeStatusVerify lifeStatus={lifeStatus}/>
      <IsMarried marriedStatus={marriedStatus}/>
      <IsOnline line={line}/>
      {
        names.map((name)=>(
          <div>
            <p>{name}</p>
          </div>
        ))
      }
      <p>{users[0].edad}</p>
    </div>)
  //   <div>
  //     {
  //     users.map((user)=>(
  //         /* `${user.nombre} ${user.apellido}, ` */
  //         <p>{user.nombre} {user.apellido},</p>
  //       )

  //     )
  //     }
  //   </div>
  // ) 
}
export default App