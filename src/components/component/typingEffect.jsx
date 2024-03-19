"use client";
import React from "react";
import LazyLoad from 'react-lazy-load';
import Typewriter from 'typewriter-effect';

export default function TypingEffect() {
  const startTypewriter = (typewriter) => {
    typewriter.typeString('My stack')
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(2000)
      .start(startTypewriter);
      <style>
        font-family:
      </style>
  };
  

  return (
    <div>
      <LazyLoad height={100} offset={100}>
        <h3 className="text-4xl font-bold mb-6 text-center">
          <Typewriter
            onInit={startTypewriter}
          />
        </h3>
      </LazyLoad>
    </div>
  );
}
