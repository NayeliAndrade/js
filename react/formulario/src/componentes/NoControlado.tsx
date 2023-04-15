import React, { useRef, useState } from "react";

interface FormValue {
    title: string;
    description: string;
    state: string;
}

const NoControlado = () => {

    const form = useRef(null)

    const [error, setError] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError('');
        const data = new FormData(form.current!)
        console.log(...data.entries());

        const { title, description, state } = Object.fromEntries([...data.entries()]) as unknown as FormValue

        /* console.log(title, description, state); */
        //sin la interface
        /* if (typeof title !== "string" ||
            title.trim() === "" ||
            typeof description !== "string" ||
            description.trim() === "" ||
            typeof state !== "string" ||
            state.trim() === "") {
            return setError("llena todo")
        } */

        if (!title.trim() || !description.trim() || !state.trim()){
            return setError("llena todos los campos")
        }

    }
    return (
        <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)} ref={form}>
            <input type="text"
                placeholder="Ingrese to do"
                className="form-control mb-2"
                name="title"
            //defaultValue="Texto por defecto"
            />
            <textarea className="form-control mb-2"
                placeholder="Descripcion"
                name="description"
            />
            <select className="form-select mb-2" name="state" defaultValue="pendiente">
                <option value="pendiente">Pendiente</option>
                <option value="completado">completado</option>
            </select>
            <button type="submit" className="btn btn-primary">Procesar</button>

            {error !== "" && error}
        </form>
    )
}

export default NoControlado
