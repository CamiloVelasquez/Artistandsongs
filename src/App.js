import React, { useState, useEffect } from "react";
import Formulario from "./componentes/Formulario";
import axios from "axios";

import Cancion from "./componentes/Cancion";
import Info from "./componentes/Info";

function App() {
  const [busquedaletra, guardarBusquedaLetra] = useState({});
  const [letra, guardarLetra] = useState("");
  const [info, guardarInfo] = useState({});

  useEffect(() => {
    if (Object.keys(busquedaletra).length === 0) return;

    const consultarApiLetra = async () => {
      const { artista, cancion } = busquedaletra;
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const url2 = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      const [letra, informacion] = await Promise.all([axios(url), axios(url2)]);
      console.log(informacion);

      //guardarLetra(resultado.data.lyrics);
      guardarLetra(letra.data.lyrics);
      guardarInfo(informacion.data.artists ? informacion.data.artists[0] : {});
    };
    consultarApiLetra();
  }, [busquedaletra, info]);

  return (
    <>
      <Formulario guardarBusquedaLetra={guardarBusquedaLetra} />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Info info={info} />
          </div>
          <div className="col-md-6">
            <Cancion letra={letra} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
