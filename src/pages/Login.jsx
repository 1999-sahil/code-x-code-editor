import Image from '../assets/LoginPicure.svg';
import Logo from '../assets/Logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import { BiLogoGoogle } from 'react-icons/bi';
import { RiLockPasswordFill } from 'react-icons/ri';
import { BsFillPersonFill } from 'react-icons/bs';
import { useState } from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { toast } from 'react-hot-toast';
import { v4 as uuidV4 } from 'uuid';

const Login = () => {

    // All States handle here
    const navigate = useNavigate();
    const [roomId, setRoomId] = useState('');
    const [username, setUsername] = useState('');

    // Typewriter text
    const [text] = useTypewriter({
        words: ['CODE-X.'],
        loop: {}
    });

    const id = uuidV4();
    // Create random new ID's using uuid package.
    const createNewRoom = (e) => {
        e.preventDefault();
        //const id = uuidV4();
        console.log('UUID from Login Page', id);
        setRoomId(id);
        toast.success('Successfully created a room ID!');    
    }; 

    // Join room handling.
    const joinRoom = () => {
        // if we don't fill out both credentials then we will show an error.
        if(!roomId || !username) {
            toast.error('Warning: Room Id & Username is required');
            return;
        }
        // if we fill out both credentials then we navigate to home page.
        navigate(`/coderoom/${roomId}`, { 
            state: { 
                username,   // this will give access to username which is required in connected users.
                roomId,
            } 
        }); 
    };

    // This function is used to enter in room after hitting enter key.
    const handleInputEnter = (e) => {
        if(e.code === 'Enter') {    // 'Enter' is the property of onKeyUp
            joinRoom();
        }
    };

    return (
      <section className="bg-gray-600 min-h-screen flex items-center justify-center">
        {/** Login Container */}
        <div className="bg-gray-200 flex rounded-3xl shadow-lg max-w-3xl">

            {/** Left Section (Form) */}
            <div className="md:w-1/2 p-5">
                {/** Name and Logo */}
                <div className="flex">
                    <img src={Logo} alt="logo" className="w-6 h-6" />
                    <div className="text-left font-mukta font-extrabold text-md ml-1">
                        <span className="text-emerald-500">Code-X </span>Coderoom
                    </div>
                </div>
                {/** Form */}
                <div className="py-3 mt-4">
                    <h2 className="ml-8 text-md font-bold font-mukta text-emerald-500 mb-2">Enter your room ID to join the room</h2>
                    <div className="ml-24 w-2/5 border-2 border-emerald-500 inline-block mb-2"></div>
                    {/** Icons Links */}
                    <div className="flex justify-center my-2">
                        <Link to="" className="border-2 border-gray-300 rounded-full p-3 mx-1 hover:bg-gray-300">
                            <AiFillGithub className="text-lg text-gray-600" />
                        </Link>
                        <Link to="" className="border-2 border-gray-300 rounded-full p-3 mx-1 hover:bg-gray-300">
                            <FaLinkedin className="text-lg text-gray-600" />
                        </Link>
                        <Link to="" className="border-2 border-gray-300 rounded-full p-3 mx-1 hover:bg-gray-300">
                            <BiLogoGoogle className="text-lg text-gray-600" />
                        </Link>
                    </div>
                    <p className="text-gray-400 my-3 ml-8 font-mukta">Please fill out the below details carefully</p>
                    <div className="flex flex-col items-center">
                        <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                            <RiLockPasswordFill className="text-gray-400 m-2" />
                            <input
                            type="text"
                            name="id"
                            placeholder="Enter the room Id"
                            value={roomId}
                            onChange={(e) => setRoomId(e.target.value)}
                            onKeyUp={handleInputEnter}
                            className="bg-gray-100 outline-none text-sm flex-1 font-bold font-mukta mt-1"
                            />
                        </div>
                        <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                            <BsFillPersonFill className="text-gray-400 m-2" />
                            <input
                            type="text"
                            name="id"
                            placeholder="Enter the name"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            onKeyUp={handleInputEnter}
                            className="bg-gray-100 outline-none text-sm flex-1 font-bold font-mukta mt-1"
                            />
                        </div>
                        <p
                            onClick={createNewRoom} 
                            className="font-mukta text-gray-500 mb-3 mt-2 text-sm"
                        >
                            If you do not have an invite then create <span className="text-emerald-500 underline cursor-pointer">new room</span>
                        </p>
                        <button
                            onClick={joinRoom}
                            className="text-emerald-500 mt-2 border-2 border-emerald-500 text-md rounded-full px-10 py-2 inline-block font-bold font-mukta hover:text-white hover:bg-emerald-500"
                        >
                            Join Room
                        </button>
                    </div>
                </div>
            </div>

            {/** Right Section (Image) */}
            <div className="w-1/2 p-4 flex-col bg-emerald-500 m-2 rounded-3xl md:block hidden">
                <div className="py-6 px-5 text-white ml-4">
                    <h2 className="text-2xl font-bold font-mukta mb-2 ml-6 mt-2">
                        Welcome to
                        <span className="text-black font-extrabold"> {text}</span>
                        <Cursor />
                    </h2>
                    <div className="border-2 w-2/5 border-white inline-block mb-2 ml-16"></div>
                    <p className="ml-10 mb-2 text-md font-mukta font-bold">One <span className="text-amber-500">Platform</span> to connect.</p>
                    <p className="mb-8 text-md font-mukta font-bold">More connect, more collaborative, more intelligent. <span className="text-amber-500">Code-X,</span> a realtime coderoom.</p>
                </div>
                <div className="ml-5 mr-5 mb-5">
                    <img src={Image} alt="login" />
                </div>
            </div>
        </div>
      </section>
    )
}
  
export default Login;