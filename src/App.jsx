import { BaseColaboradores } from "./assets/BaseColaboradores";
import 'bootstrap/dist/css/bootstrap.min.css';
import Listado from "./components/Listado";
import Formulario from "./components/Formulario";
import Buscador from "./components/Buscador";
import { useState } from "react";

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [mensaje, setMensaje] = useState(null);


  const agregarColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
    setMensaje('Colaborador agregado exitosamente');
  };

  const filtrarColaboradores = (terminoBusqueda) => {
    const resultados = BaseColaboradores.filter((colaborador) => {
      const valores = Object.values(colaborador).join(' ').toLowerCase();
      return valores.includes(terminoBusqueda.toLowerCase());
    });

    setColaboradores(resultados);
  };

  return (
    <>
      <div className="container">
        <h1 className="d-flex justify-content-sm-start">Listado de colaboradores</h1>
        {mensaje && <p>{mensaje}</p>}
        <div className="d-flex justify-content-evenly ">
          <div >
            <Buscador filtrarColaboradores={filtrarColaboradores} />
            <Listado colaboradores={colaboradores} />
          </div>

          <div className="col-md-3">
            <h2>Agregar nuevo colaborador</h2>
            <Formulario agregarColaborador={agregarColaborador} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;