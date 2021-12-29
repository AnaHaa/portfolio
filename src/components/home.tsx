/* eslint-disable react/button-has-type */
import React from 'react';
import localization from '../localization.json';
import './home.css';
import image from '../image.png';

// Home page
// Show information and image
function Home() {
  // Import text for home page
  const { home } = localization;
  const {
    header, firstParagraph, secondParagraph, thirdParagraph,
  } = home;

  return (
    <div className="w-screen h-screen flex flex-wrap justify-evenly">
      <div className="home-info md:ml-32 md:mt-16 flex-1 p-16">
        <h1 className="text-8xl text-secondary font-semibold w-56">
          {header}
        </h1>
        <div>
          <p className="mt-16 mb-16 text-2xl text-clip break-words text-white">
            {firstParagraph}
          </p>
          <p className="mt-16 mb-16 text-2xl text-clip break-words text-white">
            {secondParagraph}
          </p>
          <p className="mt-16 text-2xl text-clip break-words text-white">
            {thirdParagraph}
          </p>
        </div>
      </div>
      <div className="home-info md:mt-32 md:mr-32 flex-none">
        <img src={image} alt="Haarala Antti" className="object-contain w-80 md:w-11/12 ml-auto mr-auto mb-16 rounded-xl" />
      </div>
    </div>
  );
}

export default Home;
