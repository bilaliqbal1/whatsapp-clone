import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import './sidebar.css'

const SidebarChat = ({newChat}) => {
    const [seed, setSeed] = useState('')

    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000))
    },[])
    const createChat = ()=>{
        const room = prompt("Please enter name");
        if(room){
            console.log(room)
        }
    }
    return !newChat ? (
        <div className="mainChat"> 
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="chat_info">
                <h2>Name</h2>
                <p>Let's message...</p>
            </div>
        </div>
    ):(
        <div onClick={createChat} className="mainChat">
            <h2>Add new Chat</h2>
        </div>

    )
}

export default SidebarChat
