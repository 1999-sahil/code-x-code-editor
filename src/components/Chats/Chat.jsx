import { Link } from "react-router-dom";
import { BsChatRightDots } from "react-icons/bs";
import { Drawer } from "antd";
import { useState } from "react";

const Chat = () => {

  const [open, setOpen] = useState(false);

  // Function to open drawer when we click on icon.
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
        //to="/coderoom/chat"
        className="transititext-primary text-primary transition duration-300 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
        data-te-toggle="tooltip"
        title="Chat"
        onClick={showDrawer}
      >
        <BsChatRightDots className="text-xl text-emerald-500 hover:text-emerald-700" />
      </Link>
      <Drawer 
        title="Messages" 
        placement="right" 
        onClose={onClose} 
        open={open}
      >
        <div>
          <p>Chat section</p>
        </div>
      </Drawer>
    </>
  );
};

export default Chat;