import React from 'react';

const CustomInput = ({ customInput, setCustomInput }) => {
  return (
    <>
      {" "}
      <textarea
        rows="4"
        value={customInput}
        onChange={(e) => setCustomInput(e.target.value)}
        placeholder={`Custom Input`}
        className="focus:outline-none w-full border-2 border-black z-10 rounded-md px-4 py-2 transition duration-200 bg-white mt-2"
      ></textarea>
    </>
  )
}

export default CustomInput