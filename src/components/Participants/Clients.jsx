import { Link, useLocation } from "react-router-dom";
import { BsPeopleFill } from "react-icons/bs";
import { Drawer } from "antd";
import { useEffect, useRef, useState } from "react";
import Users from "./Users";
import { initSocket } from "../../socket/socket";
import { ACTIONS } from "../../socket/actions";
import { toast } from "react-hot-toast";

const Clients = () => {
  
    const [open, setOpen] = useState(false);        // State to set drawer.
    const [clients, setClients] = useState([]);     // State to manage users/participants

    const socketRef = useRef(null);                 // Socket 
    const location = useLocation();                 // Get data using useLocation (roomId, username)
    //const reactNavigate = useNavigate();

    useEffect(() => {
        const init = async () => {
            socketRef.current = await initSocket();
            socketRef.current.on('connect_error', (err) => handleErrors(err));
            socketRef.current.on('connect_failed', (err) => handleErrors(err));
            function handleErrors(e) {
                console.log('socket error', e);
                toast.error('Socket Connection failed, try again later.')
                //reactNavigate('/');
            }

            socketRef.current.emit(ACTIONS.JOIN, {
                roomId: location.state?.roomId,
                username: location.state?.username,
            });

            //Listening for JOINED event
            socketRef.current.on(ACTIONS.JOINED, ({ clients, username }) => {
                if(username !== location.state?.username) {
                    toast.success(`${username} joined the room`);
                    console.log(`${username} joined`);
                }
                setClients(clients);
            });

            //Listening for DISCONNECTED event
            socketRef.current.on(ACTIONS.DISCONNECTED, ({ socketId, username }) => {
                toast.success(`${username} left the room`);
                setClients((prev) => {
                    return prev.filter(client => client.socketId !== socketId)
                })
            });
        };
        init();
        return () => {
            if(socketRef.current) {
                socketRef.current.disconnect();
                socketRef.current.off(ACTIONS.JOINED);
                socketRef.current.off(ACTIONS.DISCONNECTED);
            }
        };
    }, []);

    /* if(!location.state) {
        return <Navigate to='/' />
    } */

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
            //to="/coderoom/clients"
            className="transititext-primary font-lato text-lg transition duration-300 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
            data-te-toggle="tooltip"
            title="Connected"
            onClick={showDrawer}
        >
            <BsPeopleFill className="text-xl text-emerald-500 hover:text-emerald-700" />
        </Link>
        <Drawer 
            title="Participants" 
            placement="right" 
            onClose={onClose} 
            open={open}
        >
            <div>
                {
                    clients.map((client) => (<Users key={client.socketId} username={client.username} />))
                }
            </div>
        </Drawer>
    </>
  )
}

export default Clients;