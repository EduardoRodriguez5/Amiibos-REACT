import React from "react";

import {Link} from "react-router-dom";

import "./Menu.scss"

export default function Menu() {


    

    return (

        <nav className="c-menu">
            <div className="c-menu__container">
                <Link className="c-menu__link"  to="/">Home</Link>
                <Link className="c-menu__link"  to="/amiibos">Amiibo</Link>
                <Link className="c-menu__link"  to="/GameSeries">GameSeries</Link>
                <Link className="c-menu__link"  to="/Contact">Contact</Link>
            </div>
        </nav>
    )

}