
import React, {useState} from "react";


export default function AmiiboGalery(props){

    const localGameSeries = props.localGameSeries;
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
                {localGameSeries.map((gameSeries,i) =>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3" >

                    <h6>{gameSeries.name}</h6>
                </div>
                )}
                </div>
            </>
        )

}