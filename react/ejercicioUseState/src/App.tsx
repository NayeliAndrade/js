import { useState } from "react"

const App = ()=>{
  const [count, setCount] = useState(0)
  const mostrar = ()=>  setCount(count+1)
  return(
    <div>
      <button onClick={mostrar}>Click: {count}</button>
    </div>
  )
}

export default App