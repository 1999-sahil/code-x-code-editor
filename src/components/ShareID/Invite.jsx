import { Link, useParams } from "react-router-dom";
import { BiSolidShareAlt } from "react-icons/bi";
import { useState } from "react";
import { Drawer } from "antd";
import { BiSolidHandDown } from "react-icons/bi";
import { RxClipboardCopy } from "react-icons/rx";
import { toast } from "react-hot-toast";

const Invite = () => {

  const [open, setOpen] = useState(false);

  const { roomId } = useParams();

  // Function to open drawer when we click on icon.
  const showDrawer = () => {
    setOpen(true);
  };

  // Function to close drawer when we click on cross.
  const onClose = () => {
    setOpen(false);
  };

  // Function to copy roo Id to clipboard.
  async function copyRoomId() {
    try {
      await navigator.clipboard.writeText(roomId);
      toast.success('Room ID has been copied.');
    } catch (error) {
      toast.error('Could not copy Room ID')
    }
  }

  return (
    <>
      <Link
        //to="/coderoom/invite"
        className="transititext-primary text-primary transition duration-300 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
        data-te-toggle="tooltip"
        title="Invite"
        onClick={showDrawer}
      >
        <BiSolidShareAlt className="text-xl text-emerald-500 hover:text-emerald-700" />
      </Link>
      <Drawer
        title="Invite Others"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <div className="h-full w-full relative">
          <div className="absolute bottom-0 items-center w-full">
            <span className="text-lg font-mukta flex items-center justify-center font-bold">
              Invite others by sharing this...
              <BiSolidHandDown className="text-yellow-400 text-3xl ml-1" />
            </span>
            <p className="mt-2 bg-gray-200 p-4 flex items-center justify-between text-md font-semibold font-mukta rounded-xl text-gray-600">
              {roomId}
              <RxClipboardCopy 
                className="text-black text-2xl ml-2 cursor-pointer hover:text-emerald-600"
                onClick={copyRoomId} 
              />
            </p>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Invite;