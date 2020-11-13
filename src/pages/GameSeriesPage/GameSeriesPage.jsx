import React, {useState, useEffect} from "react";
import axios from "axios";
import GameSeriesGallery from "./Components/GameSeriesGallery/GameSeriesGallery";


export default function GameSeriesPage(){

    const [localGameSeries, setLocalGameSeries] = useState([])
    useEffect(() => {
        
    //     fetch("https://www.amiiboapi.com/api/amiibo")
    //     .then((res) => res.json())
    //     .then(res => console.log(res));
        axios.get(process.env.REACT_APP_BACK_URL + "gameseries/").then(res =>{
            // setLocalGameSeries(res.data.amiibo);
            const filteredAmiibos = uniqueArray(res.data.amiibo, "name");
            setLocalGameSeries(filteredAmiibos);

        })
    }, []);

        return (
            <div>
                <GameSeriesGallery localGameSeries={localGameSeries}/>
            </div>
        )

}
const uniqueArray = (array, key) => {
    return array.filter((item, index, self) =>
        index === self.findIndex((t) => (
            t[key] === item[key]
        ))
    )
};