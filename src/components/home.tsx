/* eslint-disable react/button-has-type */
import React from 'react';
import localization from '../localization.json';
import './home.css';
import image from '../image.png';

function Home() {
  const { home } = localization;
  const {
    header, firstParagraph, secondParagraph, thirdParagraph,
  } = home;

  return (
    <div className="w-screen h-screen flex flex-wrap justify-evenly">
      <div className="home-info md:ml-32 mt-32 mb-16">
        <h1 className="text-8xl text-secondary text-center">
          {header}
        </h1>
        <div>
          <p className="mt-16 mb-16 text-4xl text-clip break-words max-w-md text-white text-center">
            {firstParagraph}
          </p>
          <p className="mt-16 mb-16 text-4xl text-clip break-words max-w-md text-white text-center">
            {secondParagraph}
          </p>
          <p className="mt-16 text-4xl text-clip break-words max-w-md text-white text-center">
            {thirdParagraph}
          </p>
        </div>
      </div>
      <div className="home-info mt-32">
        <img src={image} alt="Haarala Antti" className="object-contain w-11/12 ml-auto mr-8 rounded-xl" />
      </div>
    </div>
  );
}

export default Home;
