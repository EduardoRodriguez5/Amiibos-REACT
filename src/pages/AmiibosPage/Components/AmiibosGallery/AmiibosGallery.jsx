/* eslint-disable jsx-a11y/alt-text */

import React, {useState} from "react";
import { useForm } from "react-hook-form";
import {Link} from "react-router-dom";
import "./AmiibosGallery.scss"




export default function AmiiboGalery(props){

    const { register, handleSubmit, reset, errors } = useForm();
    const onSubmit = data => {console.log(data);reset()};

    const localAmiibos = props.fnFilteredLocalAmiibos;
    // let ammibosToPrint =  [];

    // for(let i = 0; i < localAmiibos.length; i++){

    //     let ammibo = localAmiibos[i];

    //     ammibosToPrint.push(
    //         <div>
    //             <img src={ammibo.image}></img>
    //             <h5>{ammibo.name}</h5>
    //         </div>
    //     )

        
    // }

        return (
            
            <>
                <div className="row">
                {localAmiibos.map((amiibo,i) =>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <figure className="c-figure">
                        <Link  to={"/amiibos/" + amiibo.tail} >
                            <img src={amiibo.image} className="c-figure__img"/>
                            <figcaption className="c-gallery__figcaption">
                                <span className="-gallery__text">{amiibo.name}</span>
                            </figcaption>
                            
                        </Link>
                    </figure>
                </div>
                )}
                </div>
            </>
        )
}