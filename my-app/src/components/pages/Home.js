import Header from '../header';
import './Home.css';
import React from "react";
import Searchbar from '../Searchbar.js';
import Carousel from '../Carousel.js';
import ReactDom from "react-dom";



function Home() {

  const backgroundStyle = {
    backgroundImage: "url('/assets/home-background.jpg')", 
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    height: '100vh', 
    margin: 0,
    padding: 0,
    filter: 'blur(4px)', 
    position: 'relative', 
  };
  

    return (
      <div>
        <div>
       <Header/>
       
        </div>
      <div className = "App" style={backgroundStyle}>
     
      
       </div>
      <Searchbar/>
      <Carousel/>
       
        </div>
    );
  }
  
  export default Home;