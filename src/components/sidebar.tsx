/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import './sidebar.css';
import { AiFillHome, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BsFillGearFill } from 'react-icons/bs';
import { MdWork, MdEmail, MdSchool } from 'react-icons/md';

function SideBarIcon({ icon, text = 'tooltip' }: any) {
  return (
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">
        {text}
      </span>
    </div>
  );
}

function SideBarMenu(status: boolean) {
  if (status) {
    return (
      <AiOutlineMenu size="32" />
    );
  }

  return (
    <AiOutlineClose size="32" />
  );
}

function SideBar() {
  const [status, setStatus] = useState(true);

  return (
    <div>
      <div className="fixed top-0 h-screen w-16 m-0 flex flex-col bg-background text-white shadow-lg sidebar">
        <SideBarIcon icon={<AiFillHome size="32" />} text="About" />
        <SideBarIcon icon={<BsFillGearFill size="32" />} text="Skills" />
        <SideBarIcon icon={<MdSchool size="32" />} text="Education" />
        <SideBarIcon icon={<MdWork size="32" />} text="Experience" />
        <SideBarIcon icon={<MdEmail size="32" />} text="Contact" />
      </div>
      <button
        data-dropdown-toggle="dropdown"
        className="sidebar-menu fixed"
        onClick={() => setStatus(!status)}
      >
        <SideBarIcon icon={SideBarMenu(status)} text="Menu" />
      </button>
      {!status
        && (
        <div>
          <div className="flex flex-col items-center mb-6 sidebar-mobile">
            <h1 className="text-6xl sidebar-mobile">Haarala Antti</h1>
            <h2 className="text-4xl sidebar-mobile">Ohjelmistotekniikan insinööri</h2>
          </div>
          <div className="w-screen flex flex-col bg-background text-white text-3xl sidebar-mobile">
            <button className="p-2 border-b-2 border-b-surface sidebar-mobile-button">About</button>
            <button className="p-2 border-b-2 border-b-surface sidebar-mobile-button">Skills</button>
            <button className="p-2 border-b-2 border-b-surface sidebar-mobile-button">Education</button>
            <button className="p-2 border-b-2 border-b-surface sidebar-mobile-button">Experience</button>
            <button className="p-2 border-b-surface sidebar-mobile-button">Contact</button>
          </div>
        </div>
        )}
    </div>
  );
}

export default SideBar;
