import React, { useState } from "react";
import ReactDom from "react-dom";

import './Carousel.css';


function Carousel(){
    const places=[
        {
            img:"/assets/books.jpg"
          },
          {
            img:"/assets/cooler.jpg"
          },
          {
            img:"/assets/cycles.jpg"
          }


    ];

    const[index,setIndex] = useState(0);

    function handClick(direction){
        const newIndex=(index+direction+3)%3;
        setIndex(newIndex);


    }
     
    return (
        <div className="carousel_container">
       
          <div className="carousel_content">
            <img className="carousel_image"  src={places[index].img} />
            <div className="controls">
              <button onClick={()=>handClick(1) }  className=" prev_button" id="pos">
  
                
                Previous</button>
              <button onClick={()=>handClick(-1)} className="next_button" id="pos2">next</button>
            </div>
          </div>
        </div>
      );
   }

    export default Carousel;

