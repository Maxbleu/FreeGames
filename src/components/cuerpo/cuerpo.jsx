import React, { useEffect, useState } from "react";

/**     ESTILO     */
import './cuerpo.css';

/**     COMPONENTES       */
import BarraFiltro from '../barraFiltro/barraFiltro'
import ListaJuegos from '../listaJuegos/listaJuegos'
import AjaxLoader from '../ajaxLoader/ajaxLoader'
import ScrollUp from '../scrollUp/scrollUp'

/**     SERVICIOS     */
import  getAllJuegos from '../../services/getAllJuegos'

/**     CONTEXT     */
import AccionesDeFiltradoContext from "../../context/AccionesDeFiltradoContext";

const Cuerpo = () => {

    const accionesDeFiltrado = {
        "guardarSiOrdinoAlfabeticamente":guardarSiOrdinoAlfabeticamente,
        "guardarSelecionadoGenero":guardarSelecionadoGenero,
        "guardarSelecionadaPlataforma":guardarSelecionadaPlataforma
    };
    const [listaJuegos,setListaJuegos] = useState([]);

    const [ordenarAlfabeticamente, setOrdenarAlfabeticamente] = useState(true);
    const [genero, setGenero] = useState("Todos");
    const [plataforma, setPlataforma] = useState("Todos");
    const [haRecibidoLaLista, setHaRecibidoLaLista] = useState(false);

    useEffect(()=>{
        getAllJuegos(setListaJuegos);
        setHaRecibidoLaLista(true);
    },[]);

    function guardarSiOrdinoAlfabeticamente(ordenarAlfabeticamente){
        setOrdenarAlfabeticamente(ordenarAlfabeticamente);
    }

    function guardarSelecionadoGenero(genero){
        setGenero(genero);
    }

    function guardarSelecionadaPlataforma(plataforma){
        setPlataforma(plataforma);
    }

    function obtenerListaJuegos(){

        let lsGames = listaJuegos.toSorted(function(a, b){
            if(ordenarAlfabeticamente){
                return a.title.localeCompare(b.title);
            }
            return b.title.localeCompare(a.title)

        }); 
        
        if(genero !== "Todos"){
            lsGames = lsGames.filter((value)=>{
                return value.genre === genero;
            });
        }

        if(plataforma !== "Todos"){
            lsGames = lsGames.filter((value)=>{
                return value.platform === plataforma;
            });
        }

        return lsGames;
    }

    return (

        <main className="cuerpo">
            {
                !haRecibidoLaLista ? (
                    <AjaxLoader></AjaxLoader>
                ) : (
                    <AccionesDeFiltradoContext.Provider value={accionesDeFiltrado}>
                        <BarraFiltro></BarraFiltro>
                        <ListaJuegos obtenerListaJuegos={obtenerListaJuegos}></ListaJuegos>
                    </AccionesDeFiltradoContext.Provider>
                )
            }
            <ScrollUp></ScrollUp>
        </main>

    );

}

export default Cuerpo;