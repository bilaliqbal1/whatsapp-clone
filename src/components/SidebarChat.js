import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import './sidebar.css'
import db from '../connection/firebase'
import { Link } from 'react-router-dom'

const SidebarChat = ({id, name, newChat}) => {
    const [seed, setSeed] = useState('')

    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000))
    },[])
    const createChat = ()=>{
        const newRoom = prompt("Please enter name");
        if(newRoom){
            // console.log(room)
            db.collection('rooms').add({
                name: newRoom,
            })
        }
    }
    return !newChat ? (
        <Link to={`/rooms/${id}`}>
            <div className="mainChat"> 
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="chat_info">
                    <h2>{name}</h2>
                    <p>Let's message...</p>
                </div>
            </div>
        </Link>
    ):(
        <div onClick={createChat} className="mainChat">
            <h2>Add new Chat</h2>
        </div>

    )
}

export default SidebarChat
