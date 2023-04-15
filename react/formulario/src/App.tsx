import Controlado from "./componentes/Controlado"
//import NoControlado from "./componentes/NoControlado"
import Cat from "./componentes/cat";

const App = () => { 
  return (
    <div className="container">
      <h1>Formularios</h1>
      {/* <NoControlado/> */}
      <Cat/>
      <Controlado/>
    </div>
  )

}

export default App
