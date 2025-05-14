"use client"

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
  return (
    <div className="relative grid-layout overflow-hidden md:pb-[17vw] pt-18 px-18">
      <div className="col-span-12 grid grid-cols-12 gap-x-12 md:gap-x-12 lg:gap-x-12 gap-y-10 mt-10 md:mt-0">
        <div className="z-20 col-span-6 md:col-span-4 flex items-start">
          <Image
            src="/assets/temp-logo.svg"
            alt="Guildhall Logo"
            width={200}
            height={200}
            />
        </div>
        
        <div className="z-20 flex flex-col justify-start items-start col-span-8 md:col-span-3 md:col-start-12 gap-2">
          <p className= "font-sans font-bold font-stretch-ultra-condensed uppercase text-[12px] md:text-[16px] mb-4">Get in touch</p>
          <div className="grid grid-cols-1 gap-y-4">
            {/*Gonna have company logos go here*/}
            <a className="text-[22px] leading-[24px] lg:text-[24px] lg:leading-[28px] font-light flex items-center gap-1.5" href="mailto:Ryanchang0529@gmail.com">Contact</a>
          </div>
        </div>
      </div>

      <div className="col-span-12 bg-obsidian z-20 grid grid-cols-12 mt-14 md:mt-14">
        <div className="col-span-6 md:border-t border-current text-[18px] leading-[18px] md:standard-type-p3 text-inherit order-2 md:order-1 pt-3 max-md:pt-3 text-center md:text-left">
        © 2025 By Ryan Chang, All Rights Reserved
        </div>
        <div className="col-span-6 md:border-t border-current text-[18px] leading-[18px] md:standard-type-p3 text-inherit order-1 md:order-2 pt-3 md:pt-3 text-center md:text-right">
          Made with ❤️ in Los Angeles, California
        </div>
        <h1
          className="font-tinos z-20 absolute -bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/3 md:translate-y-1/4 font-[500] text-[25vw] leading-[.9]"
        >
          Guildhall
        </h1>
      </div>
    </div>
  );
};

export default Footer;