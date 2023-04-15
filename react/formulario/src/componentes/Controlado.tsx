import { useState } from "react";

/* interface FormValue {
    title: string;
    description: string;
    state: string;
} */


const Controlado = () => {
    const [todo, setTodo] = useState({
        title: "texto",
        description: "",
        state: "",
        priority: false
    })

    const {title, description, state, priority} = todo

    const [error, setError] = useState(false)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!title.trim() || !description.trim() || !state.trim() || !priority ){
            console.log("Escribe algo");
            setError(true)
            return;
        }else{
            setError(false)
        }
        console.log(title, description, state);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {name, type, checked, value } = e.target as HTMLInputElement
        //setTodo({ ...todo, [e.target.name]: e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value})
        setTodo({ ...todo, [name]: type === 'checkbox' ? checked : value})
    }

    return (
        <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
            <input type="text"
                placeholder="Ingrese to do"
                className="form-control mb-2"
                name="title"
                value={title}
                onChange={handleChange}
            />
            <textarea className="form-control mb-2"
                placeholder="Descripcion"
                name="description"
                value={description}
                onChange={handleChange}
            />
            <div className="form-check mb-2">
                <input type="checkbox"
                    className="form-check-input"
                    name="priority"
                    id="inputCkeck" 
                    checked={priority}
                    onChange={handleChange}/>
                <label htmlFor="inputCheck">Dar prioridad</label>
            </div>
            <select className="form-select mb-2" name="state"
                value={state}
                onChange={handleChange}
            >
                <option value="pendiente">Pendiente</option>
                <option value="completado">completado</option>
            </select>
            <button type="submit" className="btn btn-primary">Procesar</button>
        </form>
    )
}

export default Controlado

/* <input type="text"
                placeholder="Ingrese to do"
                className="form-control mb-2"
                name="title"
                value={todo.title}
                onChange={e => setTodo({...todo, title:e.target.value})}
            /> */