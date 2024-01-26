import React, { useContext } from "react";

/**     ESTILO     */
import './ordenarAlfabeticamente.css'

/**     CONTEXT     */
import AccionesDeFiltradoContext from '../../context/AccionesDeFiltradoContext'

const OrdenarAlfabeticamente = () => {

    const guardarSiOrdinoAlfabeticamente = useContext(AccionesDeFiltradoContext).guardarSiOrdinoAlfabeticamente;

    function asignarFiltroParaOrdenarAlfabeticamente(event){
        guardarSiOrdinoAlfabeticamente(event.target.value === "true" ? true : false);
    }


    return (

        <div className="filtroOrdenAlfabetico">

            <h4>Ordenación</h4>

            <p>Título</p>

            <select name="ordenAlfabetico" id="ordenAlfabetico" onChange={asignarFiltroParaOrdenarAlfabeticamente} size={1}>
                <option value={true}>A . . . . . . Z</option>
                <option value={false}>Z . . . . . . A</option>
            </select>

        </div>

    )


}

export default OrdenarAlfabeticamente;