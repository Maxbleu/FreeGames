import React, {useContext} from "react";

/**     ESTILO     */
import './filtroPorPlataforma.css'

/**     MOCKS     */
import plataformas from '../../mocks/mock-plataforma'

/**     CONTEXT     */
import AccionesDeFiltradoContext from '../../context/AccionesDeFiltradoContext'

const FiltroPorPlataforma = () => {

    const guardarSelecionadaPlataforma = useContext(AccionesDeFiltradoContext).guardarSelecionadaPlataforma;

    function mostrarPlataforma(value){
        return <option value={value}>{value}</option>
    }

    function asignarFiltroPorPlataforma(event){
        guardarSelecionadaPlataforma(event.target.value);
    }


    return (
        <div className="filtroPorPlataforma">

            <p>Plataforma</p>

            <select name="filtroPorPlataforma" id="filtroPorPlataforma" onChange={asignarFiltroPorPlataforma} size={plataformas.length}>
                {plataformas.map(mostrarPlataforma)}
            </select>

        </div>
    )

}

export default FiltroPorPlataforma;