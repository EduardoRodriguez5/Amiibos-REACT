/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


export default function DetailPage() {
  const tail = useParams().tail;
  const [amiibo, setAmiibos] = useState([]);

  useEffect(() => {
    //     fetch("https://www.amiiboapi.com/api/amiibo")
    //     .then((res) => res.json())
    //     .then(res => console.log(res));
    axios
      .get(process.env.REACT_APP_BACK_URL + "amiibo/?tail=" + tail)
      .then((res) => {
        setAmiibos(res.data.amiibo[0]);
      });
  }, []);

  return (
    <div>
      <img src={amiibo.image}/>
      <h4>{amiibo.name}</h4>
      <p>{amiibo.gameSeries}</p>
      <p>{amiibo.type}</p>
      <p>{amiibo.character}</p>
      {amiibo && amiibo.release &&<p>{amiibo.release.jp}</p>}
    </div>
  );
}
