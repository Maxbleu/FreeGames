import React from "react";
/**     ESTILO     */
import './barraFiltro.css';
/**     COMPONENTES     */
import OrdenarAlfabeticamente from "../ordenarAlfabeticamente/ordenarAlfabeticamente";
import FiltroPorPlataforma from "../filtroPorPlataforma/filtroPorPlataforma";
import FiltroPorGenero from "../filtroPorGenero/filtroPorGenero";

const BarraFiltro = () => {

    return (

        <section className="barraFiltro">

            <OrdenarAlfabeticamente></OrdenarAlfabeticamente>
            <h4>Filtros</h4>
            <FiltroPorGenero></FiltroPorGenero>
            <FiltroPorPlataforma></FiltroPorPlataforma>

        </section>

    )

}

export default BarraFiltro;