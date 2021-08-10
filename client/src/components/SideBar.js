import React from 'react';

import  { Sidebar, Avatar, Nav } from 'grommet';

import { DownloadOption, Linkedin, StackOverflow, Github, Mail } from 'grommet-icons';

import avatarPic from '../images/IMG1.png';

function SideBar () {

    return (

        <Sidebar gap="large" height="min: '100%'">

            <Nav>

                <Avatar src={avatarPic} />

                <Linkedin />

                <Github />

                <Mail />

                <StackOverflow />
                
                <DownloadOption />

            </Nav>
       

        </Sidebar>

    )

}

export default SideBar