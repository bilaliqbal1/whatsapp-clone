import { Avatar } from '@material-ui/core'
import { AttachFile, InsertEmoticon, Mic,  MoreVert, Search } from '@material-ui/icons';
import {IconButton} from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import './chat.css'
import { useParams } from 'react-router';
import db from '../connection/firebase'
const Chat = () => {
    const [seed, setSeed] = useState('');
    const [input, setInput] = useState('');
    const {roomId} = useParams()
    const [roomName, setRoomName] = useState('')
    const [message, setMessages] = useState([])

    useEffect(()=>{
        if (roomId){
            db.collection('rooms').doc(roomId).onSnapshot((snapshot) =>
                setRoomName(snapshot.data().name));
            
            db.collection('rooms').docs(roomId).
            collection("message").orderBy('timestamp','asc').
            onSnapshot(snapshot =>(
                setMessages(snapshot.docs.map(doc =>doc.data()))
            ))
        }
    },[roomId])

    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000));
    },[])
    const sendmsg = (e) =>{
        e.preventDefault()
        console.log(input);
        setInput('')
    }
    return (
        <div className="chatting">
            <div className="chat_header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="header_info">
                    <h3>{roomName}</h3>
                    <p>Last seen a...</p>
                </div>
                <div className="headerRight">
                    <IconButton>
                        <Search />
                    </IconButton>   
                    <IconButton>
                        <MoreVert />
                    </IconButton> 
                </div>

            </div>
            <div className="chat_body">
                {message.map(messages =>(

                    <p className={`chat_msg${true && 'chat_recieve' }`}>
                        <span className="chat_name">{messages.name}</span>
                        {messages.message}
                        <span className="timestamp">
                            {new Date(messages.timeStamp?.toDate()).toUTCString()}
                        </span>
                    </p>
                ))}
            </div>
            <div className="chat_footer">
                <IconButton>
                    <InsertEmoticon />
                </IconButton>
                <IconButton>
                    <AttachFile />
                </IconButton> 
                    <form >
                        <input value={input} onChange={e =>setInput(e.target.value)} type="text" placeholder="type a message..."/>
                        <button onClick={sendmsg} type="submit">Send Message</button>
                    </form>
                    <Mic />
            </div>
        </div>
    )
}

export default Chat
