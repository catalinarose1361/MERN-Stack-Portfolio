import React from 'react';

import  { Sidebar, Avatar, Nav, ResponsiveContext, Anchor, Menu, Tip } from 'grommet';

import { DownloadOption, Linkedin, StackOverflow, Github, Mail, ContactInfo } from 'grommet-icons';

import avatarPic from '../images/IMG1.png';

import resume from "../documents/Catalina's Resume.pdf"

import certification from '../documents/certificate.pdf'
function SideBar () {

    return (

      
        <Sidebar gap="large" height="min: '100%'">

            <Nav>

                <Avatar src={avatarPic} />

                {/* LINKEDIN PROFILE */}
                <Tip content="LinkedIn Profile">
                <Anchor icon={ <Linkedin size="large" /> } href="https://www.linkedin.com/in/catalinarwilliams/" />
                </Tip>
                {/* STACK OVERFLOW */}
                <Tip content="Stack Overflow Profile">
                <Anchor icon={ <StackOverflow size="large" /> } href="https://stackoverflow.com/users/11933391/catalina"  />
                </Tip>
                {/* GITHUB PROFILE */}
                <Tip content="Github Profile">
                <Anchor icon={ <Github size="large"/> } href="https://github.com/catalinarose1361"  />
                </Tip>
                <Tip content="Send Email">
                    {/* EMAIL */}
                <Anchor icon={ <Mail size="large" /> } href="mailto:webdevcatalina@gmail.com" />
                </Tip>
                <Tip content="Professional Resume">
                {/* DOWNLOAD RESUME */}
                {/* ADD "download" TO END OF ANCHOR TAG TO MAKE DOCUMENT DOWNLOADABLE */}
                <Anchor icon={ <DownloadOption size="large" /> } href={resume} />
                </Tip>
                <Tip content="Coding Boot Camp Certification">
                {/* DOWNLOAD CERTIFICATION */}
                <Anchor icon={ <DownloadOption size="large" /> } href={certification} />
                </Tip>

                <Tip content="Digital Business Card">
                   {/* DIGITAL BUSINESS CARD */}
                <Anchor icon={ <ContactInfo size="large" /> } href="https://mycrd.is/catalina"/>   
                </Tip>
           

            </Nav>

        </Sidebar>
    )

}

export default SideBar