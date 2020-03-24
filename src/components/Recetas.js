import React, { Component } from "react";

class Recetas extends Component {
  render() {
    let receta = {
      nombre: "Ensalada Cesar",
      ingredientes: [
          "Lechuga romana", 
          "Croûtons con jugo de limón",
          "Aceite de oliva",
          "Huevo",
          "Salsa Worcestershire",
          "Anchoas",
          "Ajo",
          "Mostaza de Dijon",
          "Queso parmesano",
          "Pimienta negra"
        ]
    };

    return (
      <React.Fragment>
        <h3>Esta es un receta:</h3>
        <ol>
          <p>Receta: {receta.nombre}</p>
          {receta.ingredientes.map((ingredientes, i) => {
            return(
                <li key={i}>
                    {ingredientes}
                </li>
            );
          })}
        </ol>
      </React.Fragment>
    );
  }
}

export default Recetas;
