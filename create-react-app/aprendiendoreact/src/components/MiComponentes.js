import React, {Component} from 'react';

//Componente
class MiComponente extends Component{

    //Render o Vista
    render() {
        //JSON
        let receta = {
            nombre: 'Pizza',
            ingredientes: ['Tomate', 'Queso', 'Jamon cocido'],
            calorias: 400
        }
        //1 etiqueta per return!
        return (
            //2 etiquetes
            <div className="mi-componente">
            <React.Fragment>
                <h1> Hola, soy el componente 11 llamado mi componente</h1>    
                <h2> Estoy probando el componente</h2>
                <h3> {"Receta",receta.nombre}</h3>
                <h4> {"Calorias",receta.calorias}</h4>
                <ol>
                {
                    receta.ingredientes.map((ingrediente, i) => {
                       console.log()
                       return (
                            <li key={i}>
                                {ingrediente}
                            </li>
                       );
                    })
                }
                </ol>
                <hr/>
            </React.Fragment>
            </div>
           
        );
    }

}

export default MiComponente;