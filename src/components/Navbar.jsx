import { useState } from "react";
import Logo from "../assets/Logo.svg";                                      // Logo Image
import { AiOutlineCodeSandbox } from "react-icons/ai";                      // Web Editor Icon
import { BsPeopleFill, BsRobot, BsChatRightDots } from "react-icons/bs";    // Clients, AI and Chat Icons
import { FaCode } from "react-icons/fa";                                    // Code Editor Icon
import { BiSolidShareAlt } from "react-icons/bi";                           // Invite Icon
import { GiHamburgerMenu } from "react-icons/gi";                           // Menu Icon
import { MdOutlineClose } from "react-icons/md";                            // Close Icon
import { Link, useNavigate, useParams } from "react-router-dom";
import Clients from "./Participants/Clients";
import AiHelp from "./ChatGPT/AiHelp";
import Chat from "./Chats/Chat";
import Invite from "./ShareID/Invite";

const Navbar = () => {
  
  const [navbar, setNavbar] = useState(false);
  const navigate = useNavigate();

  const { roomId } = useParams();
  
  return (
    <>
      <div className="bg-[#FAF9F6]">
        {/* For medium and large devices */}
        <div className="hidden md:block">
          <div className="flex justify-between items-center h-16">
            {/* Code Editor and Web Editor Buttons */}
            <div className="grid grid-cols-2 gap-x-4 ml-4">
              <button
                className="p-1 px-2 relative inline-flex items-center justify-center overflow-hidden font-mukta font-medium text-emerald-600 transition duration-300 ease-out border-2 border-emerald-500 rounded-md shadow-md group"
                onClick={() => navigate(`/coderoom/${roomId}/code-editor`)}
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-emerald-600 duration-300 -translate-x-full bg-emerald-500 group-hover:translate-x-0 ease">
                  <FaCode className="text-white text-xl" />
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-emerald-600 transition-all duration-300 transform group-hover:translate-x-full ease">
                  Code Editor
                </span>
                <span className="relative invisible">Code Editor</span>
              </button>

              <button
                className="p-1 px-2 relative inline-flex items-center justify-center overflow-hidden font-mukta font-medium text-emerald-600 transition duration-300 ease-out border-2 border-emerald-500 rounded-md shadow-md group"
                onClick={() => navigate(`/coderoom/${roomId}/web-editor`)}
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-emerald-600 duration-300 -translate-x-full bg-emerald-500 group-hover:translate-x-0 ease">
                  <AiOutlineCodeSandbox className="text-white text-xl" />
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-emerald-600 transition-all duration-300 transform group-hover:translate-x-full ease">
                  Web Editor
                </span>
                <span className="relative invisible">Web Editor</span>
              </button>
            </div>

            {/* Logo and Name Container */}
            <div className="flex items-center cursor-pointer" onClick={() => navigate(`/coderoom/${roomId}`)}>
              <img src={Logo} alt="Logo" className="w-6 h-6" />
              <span className="text-xl font-mukta font-bold text-emerald-500 ml-2">
                Code-X <span className="text-black">Coderoom</span>
              </span>
            </div>

            {/* Icons and Leave button Container */}
            <div className="flex">
              {/* Icons */}
              <div className="flex gap-x-5 mr-5 items-center">
                {/** Drawers Link */}
                <div>
                  <Clients />
                </div>
                <div>
                  <AiHelp />
                </div>
                <div>
                  <Chat />
                </div>
                <div>
                  <Invite />
                </div>
                
              </div>

              <div className="mr-3 h-8 p-1 border-l-2 border-gray-500"></div>

              {/* Leave Button */}
              <div className="mr-6">
                <button 
                  className="border-2 border-red-600 text-white font-mukta font-semibold bg-red-600 px-3.5 py-1 rounded-md hover:bg-red-700"
                  onClick={() => navigate("/")}
                >
                  Leave
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* For small devices */}
        <div className="block md:hidden">
          <div className="flex justify-between items-center h-16">
            {/* Logo and name */}
            <div className="flex items-center ml-4 font-bold font-mukta text-lg">
              <img src={Logo} alt="Logo" className="w-10 h-11" />
              <span className="font-lato font-bold text-emerald-500">
                CODE-X &nbsp;
              </span>
              Coderoom
            </div>

            {/* Nav Menu button */}
            <div className="mr-4">
              <button
                className="cursor-pointer"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <MdOutlineClose className="text-emerald-500 text-3xl hover:text-emerald-700 hover:text-4xl" />
                ) : (
                  <GiHamburgerMenu className="text-emerald-500 text-3xl hover:text-emerald-700" />
                )}
              </button>
            </div>
          </div>

          {/* Nav Menu List  */}
          <div
            className={`${
              navbar ? "" : "hidden"
            } fixed z-10 overflow-hidden h-full w-full`}
          >
            <div className="flex flex-col pt-4 items-left justify-left bg-emerald-500">
              <Link
                to={`/coderoom/${roomId}/code-editor`}
                className="flex flex-row items-center text-lg font-semibold font-mukta text-white p-1 m-1 border border-emerald-500 hover:bg-gray-200 rounded-md hover:text-emerald-500"
                onClick={() => setNavbar(!navbar)}
              >
                <FaCode className="ml-2" />
                <span className="ml-2">Code Editor</span>
              </Link>
              <Link
                to={`/coderoom/${roomId}/web-editor`}
                className="flex flex-row items-center text-lg font-semibold font-mukta text-white p-1 m-1 border border-emerald-500 hover:bg-gray-200 rounded-md hover:text-emerald-500"
                onClick={() => setNavbar(!navbar)}
              >
                <AiOutlineCodeSandbox className="ml-2" />
                <span className="ml-2">Web Editor</span>
              </Link>
              <Link
                to={`/coderoom/${roomId}`}
                className="flex flex-row items-center text-lg font-semibold font-mukta text-white p-1 m-1 border border-emerald-500 hover:bg-gray-200 rounded-md hover:text-emerald-500"
                onClick={() => setNavbar(!navbar)}
              >
                <BsPeopleFill className="ml-2" />
                <span className="ml-2">Connected</span>
              </Link>
              <Link
                to={`/coderoom/${roomId}`}
                className="flex flex-row items-center text-lg font-semibold font-mukta text-white p-1 m-1 border border-emerald-500 hover:bg-gray-200 rounded-md hover:text-emerald-500"
                onClick={() => setNavbar(!navbar)}
              >
                <BsChatRightDots className="ml-2" />
                <span className="ml-2">Chat</span>
              </Link>
              <Link
                to={`/coderoom/${roomId}`}
                className="flex flex-row items-center text-lg font-semibold font-mukta text-white p-1 m-1 border border-emerald-500 hover:bg-gray-200 rounded-md hover:text-emerald-500"
                onClick={() => setNavbar(!navbar)}
              >
                <BsRobot className="ml-2" />
                <span className="ml-2">AI Help</span>
              </Link>
              <Link
                to={`/coderoom/${roomId}`}
                className="mb-4 flex flex-row items-center text-lg font-semibold font-mukta text-white p-1 m-1 border border-emerald-500 hover:bg-gray-200 rounded-md hover:text-emerald-500"
                onClick={() => setNavbar(!navbar)}
              >
                <BiSolidShareAlt className="ml-2" />
                <span className="ml-2">Invite</span>
              </Link>
              <button 
                className="mb-3 text-xl font-lato border-2 border-red-600 bg-red-600 text-white m-3 p-1 rounded-lg hover:bg-red-700"
                onClick={() => navigate('/')}
              >
                Leave
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;