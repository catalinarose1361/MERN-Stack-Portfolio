import React from 'react';

import  { Sidebar, Avatar, Button, Nav } from 'grommet';

import { DownloadOption, Linkedin, StackOverflow, Github, Mail } from 'grommet-icons';

function SideBar () {

    return (

        <Sidebar gap="large" height="min: '100%'"

            

          

            

         
        >
            <Nav>
                <Avatar src="https://photos.app.goo.gl/GPwLXWjogqT2fgvZ7" />
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