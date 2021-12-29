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

function ControlBarMenuIcon(status: boolean) {
  if (status) {
    return (
      <AiOutlineMenu size="32" />
    );
  }

  return (
    <AiOutlineClose size="32" />
  );
}

function ControlBarMenu({ icon }: any) {
  return (
    <div className="controlbar-icon group">
      {icon}
    </div>
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
    <div className="font-montserrat">
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
        className="controlbar-menu"
        onClick={() => setStatus(!status)}
      >
        <ControlBarMenu icon={ControlBarMenuIcon(status)} text="Menu" />
      </button>
      <div className="flex flex-col pb-6 controlbar-mobile bg-black md:hidden border-b-surface border-b-2">
        <h1 className="text-6xl pt-2 pl-2 controlbar-mobile text-secondary">Haarala Antti</h1>
        <h2 className="text-4xl pl-2 controlbar-mobile text-white">{title}</h2>
      </div>
      {!status
        && (
        <div className="controlbar-mobile bg-black w-screen">
          <div className="w-screen flex flex-col bg-background text-white text-3xl controlbar-mobile">
            <button
              className="p-2 border-b-2 border-b-surface controlbar-mobile-button"
              onClick={() => {
                setComponent('Home'); setStatus(!status);
              }}
            >
              About
            </button>
            <button
              className="p-2 border-b-2 border-b-surface controlbar-mobile-button"
              onClick={() => {
                setComponent('Skills'); setStatus(!status);
              }}
            >
              Skills
            </button>
            <button
              className="p-2 border-b-2 border-b-surface controlbar-mobile-button"
              onClick={() => {
                setComponent('Education'); setStatus(!status);
              }}
            >
              Education
            </button>
            <button
              className="p-2 border-b-2 border-b-surface controlbar-mobile-button"
              onClick={() => {
                setComponent('Experience'); setStatus(!status);
              }}
            >
              Experience
            </button>
            <button
              className="p-2 border-b-2 border-b-secondary controlbar-mobile-button"
              onClick={() => {
                setComponent('Contact'); setStatus(!status);
              }}
            >
              Contact
            </button>
          </div>
        </div>
        )}
      <div className="h-screen w-screen">
        {ControlComponent(component)}
      </div>
    </div>
  );
}

export default ControlBar;
