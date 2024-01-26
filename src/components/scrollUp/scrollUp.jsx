import React from "react";
/**     ESTILO     */
import './scrollUp.css';

const ScrollUp = () => {

    function scrollFunction() {
        let mybutton = document.getElementById("botonScrollUp");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    window.onscroll = function() {scrollFunction()};

    return (

        <div>
            <button onClick={topFunction} id="botonScrollUp" title="Go to top">Top</button>
        </div>

    )

}

export default ScrollUp;