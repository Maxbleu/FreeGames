import React from "react";
/**     ESTILO     */
import './juego.css'

const Juego = (props) => {

    function formatDate(){
        let date = new Date(props.release_date);
        return date.toLocaleDateString("en-US");
    }

    return (

        <figure>

            <img src={props.img_url} alt="imagenJuego" />

            <h6 className="juTitulo">{props.title}</h6>

            <ul>

                <li><b>Plataforma.</b> {props.platform}</li>
                <li><b>Lanzamiento.</b> {formatDate()}</li>
                <li><b>Genero.</b> {props.genre}</li>

            </ul>

            <a className="desJuego" href={props.url_dowload}>Descargatelo</a>

        </figure>

    );

}

export default Juego;