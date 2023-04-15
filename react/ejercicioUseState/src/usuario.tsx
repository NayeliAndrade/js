import { useState } from "react"

/* interface Iuser{
    uid: string;
    name: string;
}

const Usuario = () =>{
    const [user, setUser] = useState<Iuser>()

    const login = () => {
        setUser({
            uid: "A12",
            name: "das"
        })
    }
    return (
        <div>
            <button onClick={login}>Login</button>
            
            {(!user) ? <p>No hay nada</p> : <p>{JSON.stringify(user)}</p>}
        </div>
        
    )
} */
interface Iuser{
    uid: string;
    name: string;
}
const Usuario = () =>{
    const [user,setUser] = useState<Iuser>()

    const login = ()=>{
        setUser({
            uid:"as12",
            name:"asd"
        })
    }
    return(
        
        <div>
            <button onClick={login}>Login</button>
            {
                (!user) ? <p>Vacio</p> : <p>{JSON.stringify(user)}</p> 
            }
        </div>
        
    )
}


export default Usuario