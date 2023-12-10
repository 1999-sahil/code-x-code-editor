import React from 'react';

const OutputWindow = ({ outputDetails }) => {

  const getOutput = () => {

    let statusId = outputDetails?.status?.id;
    
    if (statusId === 6) {
    // compilation error
      return (
        <pre className="px-2 py-1 font-normal text-sm text-red-500">
          {atob(outputDetails?.compile_output)}
        </pre>
      );
    } else if (statusId === 3) {
      return (
        <pre className="px-2 py-1 font-normal text-sm text-green-500">
          {
            atob(outputDetails.stdout) !== null
            ? `${atob(outputDetails.stdout)}` : null
          }
        </pre>
      );
    } else if (statusId === 5) {
      return (
        <pre className="px-2 py-1 font-normal text-sm text-red-500">
          {`Time Limit Exceeded`}
        </pre>
      );
    } else {
      return (
        <pre className="px-2 py-1 font-normal text-xs text-red-500">
          {atob(outputDetails?.stderr)}
        </pre>
      );
    }
  };
    
  return (
    <>
      <div className="">
        <h1 className="sm:mt-10 lg:mt-0 xxs:mt-4 flex flex-shrink-0 justify-center text-white font-bold font-mukta text-xl bg-[#222529e5] sm:rounded-tl-2xl sm:rounded-tr-2xl lg:rounded-tl-md lg:rounded-tr-md xxs:rounded-tl-md xxs:rounded-tr-md">
          OUTPUT
        </h1>
        <div className="w-full h-[150px] bg-[#1a283d] text-white font-normal text-md rounded-bl-xl rounded-br-xl">
          {outputDetails ? <>{getOutput()}</> : null}
        </div>
      </div>
    </>
  );
};

export default OutputWindow;