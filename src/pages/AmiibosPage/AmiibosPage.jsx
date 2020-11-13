
import React, {useState, useEffect} from "react";
import axios from "axios";
import AmiibosGallery from "./Components/AmiibosGallery/AmiibosGallery";
import AmiibosSearch from "./Components/AmibosSearch/AmiiboSearch"



export default function AmiibosPage(){
    
    
    const [amiibos, setAmiibos] = useState([]);
    const [filteredLocalAmiibos, setFilteredLocalAmiibos] = useState([])
    useEffect(() => {
        
    //     fetch("https://www.amiiboapi.com/api/amiibo")
    //     .then((res) => res.json())
    //     .then(res => console.log(res));
        axios.get(process.env.REACT_APP_BACK_URL + "amiibo/")
        .then(res =>{
            console.log(res.data.amiibo);
            setAmiibos(res.data.amiibo);
            setFilteredLocalAmiibos(res.data.amiibo);
        })
    }, []);

    const filterName = (filterValues) => {

    const filteredAmiibos = [];

    for (const amiibo of amiibos){

        if(amiibo.name.includes(filterValues.name)){

            filteredAmiibos.push(amiibo);
            }


        }
        setFilteredLocalAmiibos(filteredAmiibos);
      }
        
    
        return (
            <div>
                <AmiibosSearch fnFilterName={filterName}/>
                <AmiibosGallery fnFilteredLocalAmiibos={filteredLocalAmiibos}/>
            </div>
        )

}