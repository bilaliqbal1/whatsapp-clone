import { Avatar } from '@material-ui/core'
import { Chat, DonutLarge, MoreVert, Search } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import './sidebar.css'
import SidebarChat from './SidebarChat'
import db from '../connection/firebase'
import { useStateValue } from '../redux/StateProvider'

function Sidebar() {
    const [rooms, setRooms] = useState([]);
    const [{ user }, dispatch] = useStateValue()
    useEffect(()=>{
        const unsubsribe = db.collection('rooms').onSnapshot(snapshot =>(
            setRooms(
                snapshot.docs.map(doc=>(
                {
                    id:doc.id,
                    data:doc.data(),

                }
            )))
        ));
        return()=>{
            unsubsribe();
        }
    })
    return (
        <div className="sidebar">
            <div className="header">
                <Avatar src={user?.photoURL}/>
                <div className="rightSide">
                    <IconButton>
                        <DonutLarge />
                    </IconButton>
                    <IconButton>
                        <Chat />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="search">
               <div className="container">
                <Search />
                    <input type="text" placeholder="Search or Start new chat" />
               </div>
            </div>
            <div className="chats">
                <SidebarChat newChat/>
                {rooms.map(room =>(
                    <SidebarChat key={room.id} id={room.id} name={room.data.name} />
                ))}
            </div>
        </div>
    )
}

export default Sidebar
