import Header from '../header';
import './Login.css';
import LogoIcon from '../LogoIcon';
import React from "react";


import ReactDom from "react-dom";



function Login() {

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
    <Header/>
    <div className = "App" style={backgroundStyle}>
     
      
     </div>
     <div className='Icon'> <LogoIcon/>
     </div>
      

       <div className='Login'>
        <h1>Registeration Number</h1>
       </div>
      </div>
       
    );
  }
  
  export default Login;