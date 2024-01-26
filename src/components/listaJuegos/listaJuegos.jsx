import React from "react";
/**       ESTILO       */
import './listaJuegos.css'
/**     COMPONENETE     */
import Juego from "../juego/juego";

const ListaJuegos = (props) => {

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

            {props.obtenerListaJuegos().map(mostrarJuego)}

        </div>

    )

}

export default ListaJuegos