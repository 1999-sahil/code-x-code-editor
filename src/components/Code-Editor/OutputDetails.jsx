import React from "react";

const OutputDetails = ({ outputDetails }) => {
  return (
    <>
        <div className="lg:mt-4 lg:mb-2 sm:mt-6 sm:mb-6 xxs:mt-3 xxs:mb-3 flex lg:flex-col sm:flex-row xxs:flex-col sm:gap-x-8 xxs:gap-y-2 lg:gap-y-4 sm:justify-center sm:items-center xxs:justify-center xxs:items-center lg:items-start">
            <p className="text-lg font-mukta font-semibold text-gray-500">
                Output Details:{" "}
            </p>
            <p className="text-sm font-mukta font-medium">
                Status:{" "}
                <span className="font-semibold px-2 py-1 rounded-md bg-gray-500">
                    {outputDetails?.status?.description}
                </span>
            </p>
            <p className="text-sm font-mukta font-medium">
                Memory:{" "}
                <span className="font-semibold px-2 py-1 rounded-md bg-red-500">
                    {outputDetails?.memory}
                </span>
            </p>
            <p className="text-sm font-mukta font-medium">
                Time:{" "}
                <span className="font-semibold px-2 py-1 rounded-md bg-blue-500">
                    {outputDetails?.time}
                </span>
            </p>
      </div>
    </>
  );
};

export default OutputDetails;
