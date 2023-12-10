import React from 'react';
import { BiSolidLeftArrow } from 'react-icons/bi';

const Heading = ({ name, icon }) => {
  return (
    <>
      <div className="bg-[#353F3E] flex justify-between items-center">
        <div className="text-lg pl-2">{icon}</div>
        <div className="text-white font-mukta font-bold text-lg">{name}</div>
        <div className="text-md pr-2 text-emerald-500"><BiSolidLeftArrow /></div>
      </div>
    </>
  )
}

export default Heading;