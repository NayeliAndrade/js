const resultado = (()=>{
    const x = {}
    return{
        a:()=> console.log(x),
        b:(key,val) => x[key] = val
    }
})()

resultado.a()
resultado.b("queso", "queso de cabra")
resultado.a()
console.log(resultado.x);

/*  api publica y privada */

/* ejemplo modulo revelado*/

const Users = (()=>{
    const recurso = "/JOSNPLACEHOLDER"
    return{
        listar: async()=>{
            return await fetch(recurso.then(x => x.json()))
        },
        crear: async (data) =>{
            return await fetch(recurso,{type: "POST",body:JSON.stringify(data)}).then(x.JSON())
        }
    }
})()

/* sirve en la web */

Users.listar()