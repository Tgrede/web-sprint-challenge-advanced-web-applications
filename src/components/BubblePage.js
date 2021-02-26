import React, { useEffect, useState } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../helpers/axiosWithAuth";


function BubblePage(props) {
  const [colorList, setColorList] = useState([]);

  const getColors = () => {
    axiosWithAuth()
    .get('http://localhost:5000/api/colors')
    .then((res) => {
      console.log(res)
      setColorList(res.data)
    })
    .catch((err) => {
      console.log({err})
    })
  }

  useEffect(() => {
    getColors()
  }, [])

  
  
if(colorList.length === 0){
    return(<h2 data-testid='loading'>LOADING...</h2>)
} else {
    return (
      <>
        <ColorList colors={colorList} updateColors={setColorList} getColors={getColors} />
        <Bubbles colors={colorList} />
      </>
    );
  }
};

export default BubblePage;

//Task List:
//1. Make an axios call to retrieve all color data and push to state on mounting.
