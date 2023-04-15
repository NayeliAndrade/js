import React, { useState } from 'react'
import InputGeneral from './inputs'



function App() {
  const [todo, setTodo] = useState({
    asunto: "",
    apellido: "",
    nombre: "",
    CURP: "",
    email: "",
    telefono: 0,
    animales: "",
    opcionMultiple: "",
    importantes: ""
  })

  const { asunto, apellido, nombre, CURP, email, telefono, animales, opcionMultiple, importantes } = todo

  const [error, setError] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!apellido || !nombre || !email) {
      //alert("campo vacio")
      setError(true)
      return;
    } else {
      setError(false)
      console.log(asunto, apellido, nombre, CURP, email, telefono);
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target as HTMLInputElement
    setTodo({ ...todo, [name]: value })
    console.log("change", name, value);
  }
  const MostrarError = () => {
    return (<div>
      <p className='alert alert-danger text-center container-sm mt-2'>Falta llenar los campos</p>
    </div>)
  }
  return (
    <div className="App">
      {error && <MostrarError />}

      <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)} className="container-sm">
        <div className='d-flex flex-column' >
          {/* <label htmlFor="asunto"
            className='form-label text-center text-info'>Asunto</label>
          <input type="text"
            name="asunto"
            id='asunto'
            className='form-control border border-success'
            value={asunto}
            onChange={handleChange}
          /> */}
         
                 </div>
        <div className='d-flex flex-column'>
          <label htmlFor="apellido"
            className='form-label text-center text-info'>Apellido</label>
          <input type="text"
            name="apellido"
            id="apellido"
            className='form-control border border-success'
            value={apellido}
            onChange={handleChange} />
        </div>

        <div className='d-flex flex-column'>
          <label htmlFor="nombre"
            className='form-label text-center text-info'>Nombre</label>
          <input type="text"
            name="nombre"
            id="nombre"
            className='form-control border border-success'
            value={nombre}
            onChange={handleChange} />
        </div>

        <div className='d-flex flex-column'>
          <label htmlFor="CURP"
            className='form-label text-center text-info'>CURP</label>
          <input type="text"
            name="CURP"
            id="CURP"
            className='form-control border border-success'
            value={CURP}
            onChange={handleChange} />
        </div>
        <div className='d-flex flex-column'>
          <label htmlFor="email"
            className='form-label text-center text-info'>Email</label>
          <input type="email"
            name="email"
            id="email"
            className='form-control border border-success'
            value={email}
            onChange={handleChange} />
        </div>
        <div className='d-flex flex-column'>
          <label htmlFor="telefono"
            className='form-label text-center text-info'>Telefono</label>
          <input type="text"
            name="telefono"
            id="telefono"
            className='form-control border border-success'
            value={telefono}
            onChange={handleChange} />
        </div>

        <div className='d-flex flex-column'>
          <select name="animales"
            className='form-select form-select-lg mt-3 border border-success'
            value={animales}
            onChange={handleChange}>
            <option value="perro">perro</option>
            <option value="gato">gato</option>
            <option value="tucan">tucan</option>
          </select>
          <select name="opcionMultiple"
            className='form-select form-select-lg mt-3 border border-success'
            value={opcionMultiple}
            onChange={handleChange}>
            <option value="a">a</option>
            <option value="b">b</option>
            <option value="c">c</option>
          </select>
          <textarea name="importantes"
            className='form-control mt-3 border border-success'
            id="importantes"
            value={importantes}
            onChange={handleChange}
          ></textarea>
          <button className='mt-3 bg-black text-white rounded' type='submit'>submit</button>
        </div>
      </form>
    </div>
  )
}

export default App
