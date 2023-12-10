import { Link } from "react-router-dom";
import { BsRobot } from "react-icons/bs";
import { Drawer } from "antd";
import { useState } from "react";
import { PiChatTeardropTextBold } from "react-icons/pi";
import { AiOutlineSend } from "react-icons/ai";

const AiHelp = () => {

  const [open, setOpen] = useState(false);
  
  // Function to open drawer when we click on Icon.
  const showDrawer = () => {
    setOpen(true);
  };

  // Function to close drawer when we click on cross.
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Link
        //to="/coderoom/ai"
        className="transititext-primary text-primary transition duration-300 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
        data-te-toggle="tooltip"
        title="AI Help"
        onClick={showDrawer}
      >
        <BsRobot className="text-xl text-emerald-500 hover:text-emerald-700" />
      </Link>
      <Drawer 
        title="Ask Me Anything" 
        placement="right" 
        onClose={onClose} 
        open={open}
      >
        <div className="relative w-full h-full">
          <div className="flex items-center absolute bottom-0 border-2 border-gray-400 p-2 rounded-lg w-[80%]">
            <PiChatTeardropTextBold className="text-lg" />
            <input
              type="text"
              placeholder="Type your question..."
              className="ml-2 outline-none flex-1 text-md font-mukta font-medium text-gray-600"
            />
          </div>
          <div className="absolute bottom-0 right-0 p-1.5 mr-2 mb-1 border-2 rounded-md bg-emerald-400">
            <AiOutlineSend className="text-xl font-bold text-emerald-700" />
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default AiHelp;