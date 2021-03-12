import { Avatar } from '@material-ui/core'
import { Chat, DonutLarge, MoreVert, Search } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
import React from 'react'
import './sidebar.css'
import SidebarChat from './SidebarChat'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="header">
                <Avatar />
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
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar
