import React, { useContext } from "react";

/**    ESTILO    */
import './filtroPorGenero.css'

/**     MOCKS     */
import generos from '../../mocks/mock-genero'

/**     CONTEXT     */
import AccionesDeFiltradoContext from '../../context/AccionesDeFiltradoContext'

const FiltroPorGenero = () => {

    const guardarSelecionadoGenero = useContext(AccionesDeFiltradoContext).guardarSelecionadoGenero;

    function mostrarGenero(value){
        return <option key={value.id} value={value}>{value}</option>
    }

    function asignarFiltroPorGenero(event){
        guardarSelecionadoGenero(event.target.value);
    }

    return (

        <div className="filtroPorGenero">

            <p>Género</p>

            <select name="filtroPorGenero" onChange={asignarFiltroPorGenero} id="filtroPorGenero" size={generos.length}>

                {generos.map(mostrarGenero)}

            </select>

        </div>

    )

}

export default FiltroPorGenero;