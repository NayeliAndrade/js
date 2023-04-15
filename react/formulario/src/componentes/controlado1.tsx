import { useState } from "react";

interface FormValue {
    title: string;
    description: string;
    state: string;
}

const Controlado = () => {
    const [title, setTitle] = useState("Texto por defecto")
    const [description, setDescription] = useState("")
    const [state, setState] = useState("Pendiente")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(title,description,state);
    }
    return (
        <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
            <input type="text"
                placeholder="Ingrese to do"
                className="form-control mb-2"
                name="title"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <textarea className="form-control mb-2"
                placeholder="Descripcion"
                name="description"
                value={description}
                onChange={e => setDescription(e.target.value)}
            />
            <select className="form-select mb-2" name="state" 
            value={state}
            onChange={e => setState(e.target.value)}
            >
                <option value="pendiente">Pendiente</option>
                <option value="completado">completado</option>
            </select>
            <button type="submit" className="btn btn-primary">Procesar</button>

            
        </form>
    )
}

export default Controlado
