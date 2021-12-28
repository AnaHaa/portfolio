/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import './App.css';

import { AiFillHome, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BsFillGearFill } from 'react-icons/bs';
import { MdWork, MdEmail, MdSchool } from 'react-icons/md';

import Home from './components/home';
import Skills from './components/skills';
import Education from './components/education';
import Experience from './components/experience';
import Contact from './components/contact';

import localization from './localization.json';

function ControlBarIcon({ icon, text = 'tooltip' }: any) {
  return (
    <div className="controlbar-icon group">
      {icon}
      <span className="controlbar-tooltip group-hover:scale-100">
        {text}
      </span>
    </div>
  );
}

function ControlBarMenu(status: boolean) {
  if (status) {
    return (
      <AiOutlineMenu size="32" />
    );
  }

  return (
    <AiOutlineClose size="32" />
  );
}

function ControlComponent(component: string) {
  if (component && component === 'Home') {
    return (
      <Home />
    );
  } if (component && component === 'Skills') {
    return (
      <Skills />
    );
  } if (component && component === 'Education') {
    return (
      <Education />
    );
  } if (component && component === 'Experience') {
    return (
      <Experience />
    );
  } if (component && component === 'Contact') {
    return (
      <Contact />
    );
  }

  return (
    <Home />
  );
}

function ControlBar() {
  const [status, setStatus] = useState(true);
  const [component, setComponent] = useState('Home');

  const { navigation } = localization;
  const { title } = navigation;

  return (
    <div>
      <div className="fixed top-0 h-screen w-20 m-0 flex flex-col bg-background text-white shadow-lg controlbar">
        <div className="relative flex flex-col justify-center items-center text-2xl bg-black w-20 h-32">
          <h3 className="text-secondary">Antti</h3>
          <p className="text-xs">{title}</p>
        </div>
        <button onClick={() => setComponent('Home')}>
          <ControlBarIcon icon={<AiFillHome size="32" />} text="About" />
        </button>
        <button onClick={() => setComponent('Skills')}>
          <ControlBarIcon icon={<BsFillGearFill size="32" />} text="Skills" />
        </button>
        <button onClick={() => setComponent('Education')}>
          <ControlBarIcon icon={<MdSchool size="32" />} text="Education" />
        </button>
        <button onClick={() => setComponent('Experience')}>
          <ControlBarIcon icon={<MdWork size="32" />} text="Experience" />
        </button>
        <button onClick={() => setComponent('Contact')}>
          <ControlBarIcon icon={<MdEmail size="32" />} text="Contact" />
        </button>
      </div>
      <button
        data-dropdown-toggle="dropdown"
        className="controlbar-menu fixed"
        onClick={() => setStatus(!status)}
      >
        <ControlBarIcon icon={ControlBarMenu(status)} text="Menu" />
      </button>
      {!status
        && (
        <div className="controlbar-mobile bg-black">
          <div className="flex flex-col items-center mb-6 controlbar-mobile">
            <h1 className="text-6xl controlbar-mobile text-secondary">Haarala Antti</h1>
            <h2 className="text-4xl controlbar-mobile text-white">{title}</h2>
          </div>
          <div className="w-screen flex flex-col bg-background text-white text-3xl controlbar-mobile">
            <button className="p-2 border-b-2 border-b-surface controlbar-mobile-button" onClick={() => setComponent('Home')}>About</button>
            <button className="p-2 border-b-2 border-b-surface controlbar-mobile-button" onClick={() => setComponent('Skills')}>Skills</button>
            <button className="p-2 border-b-2 border-b-surface controlbar-mobile-button" onClick={() => setComponent('Education')}>Education</button>
            <button className="p-2 border-b-2 border-b-surface controlbar-mobile-button" onClick={() => setComponent('Experience')}>Experience</button>
            <button className="p-2 border-b-surface controlbar-mobile-button" onClick={() => setComponent('Contact')}>Contact</button>
          </div>
        </div>
        )}
      <div className="bg-surface h-screen w-screen">
        {ControlComponent(component)}
      </div>
    </div>
  );
}

export default ControlBar;
