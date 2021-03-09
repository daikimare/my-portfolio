// module
import React, { useState } from 'react';
import Link from 'next/link';

// component
import Pagerouter from './Pagerouter';

export default function Navbar() {

  // hamburger mene
  // const hamburger = document.querySelector(".hamburger");
  // hamburger.addEventListener("click", function() {
  //   hamburger.classList.toggle("is-active");
  // });

  const [toggle, setToggle] = useState("false");

  const actionButton = () => {
    setToggle(!toggle)
  }

  return(
    <header className=" container bg-gray-400 mr-0 ">
      <div className=" flex justify-between items-center">
        <h1 className=" text-4xl font-semibold md:text-2xl ">maresuke</h1>
        <div className=" md:hidden ">
          <button className="hamburger hamburger--spring is-active" type="button" onClick={actionButton}>
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>
      
      <Pagerouter />

      {/* hanburger */}
      <style jsx>{`
        .hamburger {
          padding: 15px 15px;
          display: inline-block;
          cursor: pointer;
          transition-property: opacity, filter;
          transition-duration: 0.15s;
          transition-timing-function: linear;
          font: inherit;
          color: inherit;
          text-transform: none;
          background-color: transparent;
          border: 0;
          margin: 0;
          overflow: visible; }
          .hamburger:hover {
            opacity: 0.7; }
          .hamburger.is-active:hover {
            opacity: 0.7; }
          .hamburger.is-active .hamburger-inner,
          .hamburger.is-active .hamburger-inner::before,
          .hamburger.is-active .hamburger-inner::after {
            background-color: #000; }
        
        .hamburger-box {
          width: 40px;
          height: 24px;
          display: inline-block;
          position: relative; }
        
        .hamburger-inner {
          display: block;
          top: 50%;
          margin-top: -2px; }
          .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {
            width: 40px;
            height: 4px;
            background-color: #000;
            border-radius: 4px;
            position: absolute;
            transition-property: transform;
            transition-duration: 0.15s;
            transition-timing-function: ease; }
          .hamburger-inner::before, .hamburger-inner::after {
            content: "";
            display: block; }
          .hamburger-inner::before {
            top: -10px; }
          .hamburger-inner::after {
            bottom: -10px; }
        
        .hamburger--spring .hamburger-inner {
          top: 2px;
          transition: background-color 0s 0.13s linear; }
          .hamburger--spring .hamburger-inner::before {
            top: 10px;
            transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19); }
          .hamburger--spring .hamburger-inner::after {
            top: 20px;
            transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19); }
        
        .hamburger--spring.is-active .hamburger-inner {
          transition-delay: 0.22s;
          background-color: transparent !important; }
          .hamburger--spring.is-active .hamburger-inner::before {
            top: 0;
            transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);
            transform: translate3d(0, 10px, 0) rotate(45deg); }
          .hamburger--spring.is-active .hamburger-inner::after {
            top: 0;
            transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);
            transform: translate3d(0, 10px, 0) rotate(-45deg); }
      `}</style>
    </header>
  )
}
