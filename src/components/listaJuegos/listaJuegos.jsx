import React from "react";
/**       ESTILO       */
import './listaJuegos.css'
/**     COMPONENETE     */
import Juego from "../juego/juego";
import NoHayElementosDisponibles from "../noHayElementosDisponibles/noHayElementosDisponibles";

const ListaJuegos = (props) => {

    const listaJuegos = props.obtenerListaJuegos();

    function mostrarJuego(value){
        return <Juego 
                    key={value.id}
                    img_url={value.thumbnail}
                    title={value.title} 
                    platform={value.platform}
                    release_date={value.release_date}
                    genre={value.genre}
                    url_dowload={value.game_url}>
                </Juego>
    }

    return (

        <div className="listaJuegos">

            {
                listaJuegos.length !== 0 ? (
                    listaJuegos.map(mostrarJuego)
                ) : (
                    <NoHayElementosDisponibles></NoHayElementosDisponibles>
                )
            }

        </div>

    )

}

export default ListaJuegos