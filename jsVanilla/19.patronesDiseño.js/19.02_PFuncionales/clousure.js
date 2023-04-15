/* alcance */
const y = "lele"

const f =()=>{
    const x = "lala"
    return ()=>{
        const z = "lolo"
        console.log(x,y,z);
    }

}


/* const g =()=>{
    const a = "lala"
    console.log(a,y);
    console.log(a,x);
} */

f()()
/* g() */


const h = (x) =>{
    return () => console.log(`rayos ${x}`);
}
h("nicolas")()

/* mongoose */
const auditProps = {
    createdAt: {default: new Data},
    updateAt: {default: new Data},
    createBy: {type:Schema.Types.ObjectId, ref: "user"},
    updateBy: {type:Schema.Types.ObjectId, ref: "user"},
}

const module = defaultProps =>{
    return (name,props) =>{
        const schema = moongose.schema({
            ...defaultProps,
            ...props,
        })
        return moongose.module(name,schema)
    }
}

export const withAudit = module(auditProps)

//en otro archivo

withAudit("producto",{
    name:String,
    desc:String,
})