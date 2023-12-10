import { Link } from "react-router-dom";
import HeroPicture from "../assets/HeroPicture.svg";

const HeroSection = () => {
  return (
    <>
      <div className="flex lg:flex-row md:flex-col m-5 p-5 sm:flex-col xxs:flex-col lg:m-10 md:m-0 sm:m-0 xxs:m-0">
        <div className="lg:w-3/5 md:w-full sm:w-full xxs:w-full mt-4 flex flex-col mr-3 lg:justify-start md:justify-center sm:justify-center xxs:justify-center lg:items-start md:items-center sm:items-center xxs:items-center">
          <h1 className="lg:text-[2.5rem] md:text-[2.5rem] sm:text-[2rem] xxs:text-[1.60rem] p-4 font-extrabold font-lato text-left leading-none animate-pulse bg-gradient-to-r from-pink-500 via-green-500 to-violet-500 bg-clip-text text-transparent">
            Welcome to Code-X Coderoom
          </h1>
          <p className="lg:w-3/5 md:w-full sm:w-full xxs:w-full mt-4 p-3 ml-2 text-xl text-gray-600">
            One <span className="font-semibold text-yellow-400">platform</span>{" "}
            to connect. More connect, more collaborative, more intelligent.{" "}
            <span className="font-semibold text-yellow-400">Code-X</span> is a
            coderoom where you can practice your coding skills and development
            skills on provided{" "}
            <span className="font-semibold text-yellow-400">Editor</span>.
          </p>
          <div className="w-[80%]">
            <Link
              to="/"
              className="m-4 inline-flex items-center justify-center w-full px-4 py-3 text-lg font font-semibold text-white bg-emerald-500 rounded-md hover:bg-emerald-600"
              data-primary="emerald-400"
              data-rounded="rounded-2xl"
              data-primary-reset="{}"
            >
              Get Started
              <svg
                className="w-4 h-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>

        {/** Image Container */}
        <div className="lg:w-2/5 md:w-full sm:w-full xxs:w-full m-4 lg:p-0 md:p-8">
          <img src={HeroPicture} alt="hero-pic" className="w-full h-full" />
        </div>
      </div>
    </>
  );
};

export default HeroSection;