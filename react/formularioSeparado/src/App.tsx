import React, { useState } from 'react'
import InputGeneral from './assets/componentes/inputs/InputGeneral'
import HandleField from './assets/funciones/HandleField'
import HandleSubmit from './assets/funciones/HandleSubmit'
import MostrarError from './assets/funciones/MostrarError'
import SelectG from "./assets/componentes/inputs/SelectComponent";
import { InputState } from './assets/componentes/tools/interfaces'
//import Radio from './assets/componentes/inputs/Radio'

function App() {
  const [todo, setTodo] = useState<InputState>({
    asunto: "",
    apellido: "",
    nombre: "",
    CURP: "",
    email: "",
    telefono: "",
    animales: "",
    opcionMultiple: "",
    priority: true,
    genero:""
  })

  const { asunto, apellido, nombre, CURP, email, telefono, animales, opcionMultiple, priority, genero} = todo

  const [error, setError] = useState(false)

  const opcionesAnimales = ["perro", "gato", "tucan", "alebrije"]

  return (
    <div className="App">
      {error && <MostrarError />}

      <form className="d-flex flex-column w-50 mx-auto" onSubmit={(e) => HandleSubmit(e, todo, setError)}>
        <div className='d-flex flex-column' >
          <InputGeneral
            type="text"
            name="asunto"
            id="asunto"
            className="form-control border border-success"
            value={asunto}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => HandleField(e, setTodo)}
          />
        </div>
        <div className='d-flex flex-column'>
          <InputGeneral
            type="text"
            name="apellido"
            id="apellido"
            className="form-control border border-success"
            value={apellido}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => HandleField(e, setTodo)}
          />
        </div>

        <div className='d-flex flex-column'>
          <InputGeneral
            type="nombre"
            name="nombre"
            id="nombre"
            className="form-control border border-success"
            value={nombre}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => HandleField(e, setTodo)}
          />

        </div>

        <div className='d-flex flex-column'>
          <InputGeneral
            type="CURP"
            name="CURP"
            id="CURP"
            className="form-control border border-success"
            value={CURP}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => HandleField(e, setTodo)}
          />

        </div>
        <div className='d-flex flex-column'>
          <InputGeneral
            type="email"
            name="email"
            id="email"
            className="form-control border border-success"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => HandleField(e, setTodo)}
          />
        </div>
        <div className='d-flex flex-column'>
          <InputGeneral
            type="telefono"
            name="telefono"
            id="telefono"
            value={telefono}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => HandleField(e, setTodo)}
          />
        </div>

        <div>
          <InputGeneral
            type="checkbox"
            name="Terminos"
            id="inputCheck"
            value=""
            checked={priority}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => HandleField(e, setTodo)}
          />
        </div>

        <div>
        {/* <FieldRadio
        id="gender-men"
        value="Hombre"
        name="gender"
        onChecked={onChecked}
        /> */}
           
        </div>
        
        <div>
          <SelectG
            title='selectAnimales'
            name="animales"
            className='form-select form-select-lg mt-3 border border-success'
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => HandleField(e, setTodo)}
           opciones={["perro", "gato", "cuyo", "tucan"]}
            value={animales}
          />

          <SelectG
            title='opcionMultiple'
            name="opcionMultiple"
            className='form-select form-select-lg mt-3 border border-success'
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => HandleField(e, setTodo)}
            opciones={["a", "b","c", "d"]}
            value={opcionMultiple}
          />
        </div>

        <div className='text-center'>
          <button className='mt-3 bg-black text-white rounded' type='submit'>submit</button>
        </div>
      </form>
    </div>
  )
}

export default App
