/* eslint-disable react/button-has-type */
import React from 'react';
import localization from '../localization.json';

function Home() {
  const { home } = localization;
  const { header, text } = home;

  return (
    <div className="w-screen h-screen flex flex-wrap">
      <div className="ml-16">
        <h1 className="ml-16 mt-16 text-8xl">
          {header}
        </h1>
        <p className="ml-16 mt-16 text-4xl">
          {text}
        </p>
      </div>
      <div className="ml-16">
        <h1 className="ml-16 mt-16 mr-16 text-8xl">
          {header}
        </h1>
        <p className="ml-16 mt-16 mr-16 text-4xl">
          {text}
        </p>
      </div>
    </div>
  );
}

export default Home;
