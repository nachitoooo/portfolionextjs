"use client";
import React from "react"; 
import Typewriter from 'typewriter-effect'; 
  
export default function TypingEffect() { 
  const startTypewriter = (typewriter) => {
    typewriter.typeString('Technologies') 
      .callFunction(() => { 
        console.log('String typed out!'); 
      }) 
      .pauseFor(2000)  
      .start(startTypewriter); 
  };

  return ( 
    <div> 
      <h3 className="text-4xl font-bold mb-6 text-center">
        <Typewriter 
          onInit={startTypewriter}
        /> 
      </h3>
    </div> 
  ); 
}