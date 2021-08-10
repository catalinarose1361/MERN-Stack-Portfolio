import React from 'react';

import  { Sidebar, Avatar, Nav, ResponsiveContext, Anchor, Menu } from 'grommet';

import { DownloadOption, Linkedin, StackOverflow, Github, Mail, ContactInfo } from 'grommet-icons';

import avatarPic from '../images/IMG1.png';

import resume from "../documents/Catalina's Resume.pdf"

import certification from '../documents/certificate.pdf'
function SideBar () {

    return (

      
        <Sidebar gap="large" height="min: '100%'">

            <Nav>

                <Avatar src={avatarPic} />

                <Anchor icon={ <Linkedin size="large" /> } href="https://www.linkedin.com/in/catalinarwilliams/" />

                <Anchor icon={ <StackOverflow size="large" /> } href="https://stackoverflow.com/users/11933391/catalina"  />

                <Anchor icon={ <Github size="large"/> } href="https://github.com/catalinarose1361"  />

                <Anchor icon={ <Mail size="large" /> } href="mailto:webdevcatalina@gmail.com" />
                {/* DOWNLOAD RESUME */}
                {/* ADD "download" TO END OF ANCHOR TAG TO MAKE DOCUMENT DOWNLOADABLE */}
                <Anchor icon={ <DownloadOption size="large" /> } href={resume} />
                {/* DOWNLOAD CERTIFICATION */}
                <Anchor icon={ <DownloadOption size="large" /> } href={certification} />

                {/* DIGITAL BUSINESS CARD */}
                <Anchor icon={ <ContactInfo size="large" /> } href="https://mycrd.is/catalina"/>

            </Nav>

        </Sidebar>
    )

}

export default SideBar