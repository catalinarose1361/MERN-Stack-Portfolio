import React, { useState } from 'react';

import  { Sidebar, Avatar, Nav, Tip } from 'grommet';

import { DownloadOption, Linkedin, StackOverflow, Github, Mail, ContactInfo } from 'grommet-icons';

import avatarPic from '../images/IMG1.png';

import resume from "../documents/Catalina's Resume.pdf"

import certification from '../documents/certificate.pdf'
import { Anchor, Affix } from 'antd';
const { Link } = Anchor;


function SideBar () {
    const [top, setTop] = useState(10);
  
   
    return (
        <Affix offsetTop={top}>
     
      
      
        <Sidebar direction="verticle" gap="large" height="min: '100%'">

            <Nav>

                <Avatar size="large" src={avatarPic} />

                <Anchor>
                    <Link href="#biodiv" title="Biography" />
                    <Link href="#skillsdiv" title="Skills" />
                    <Link href="#educationdiv" title="Education" />
                    <Link href="#projectsdiv" title="Projects"/>
                </Anchor>

                {/* LINKEDIN PROFILE */}
                {/* <Tip  dropProps={{ align: { left: 'right' } }} content="LinkedIn Profile">

                    <Anchor 
                    
                        icon={

                            <Linkedin size="medium" /> 

                        } 

                        href="https://www.linkedin.com/in/catalinarwilliams/"

                     />

                </Tip>

                {/* STACK OVERFLOW */}
                {/* <Tip dropProps={{ align: { left: 'right' } }} content="Stack Overflow Profile"> */}

                    {/* <Anchor  */}
                    
                    {/* icon={  */}

                        {/* <StackOverflow size="medium" />  */}

                    {/* }  */}

                    {/* href="https://stackoverflow.com/users/11933391/catalina"   */}
                    
                    {/* /> */}

                {/* </Tip> */}

                {/* GITHUB PROFILE */}
                {/* <Tip dropProps={{ align: { left: 'right' } }} content="Github Profile"> */}

                    {/* <Anchor  */}

                        {/* icon={  */}

                            {/* <Github  */}

                            {/* size="medium" */}

                            {/* />  */}

                        {/* }  */}

                        {/* href="https://github.com/catalinarose1361"  */}

                    {/* /> */}

                {/* </Tip> */}

                {/* EMAIL */}
                {/* <Tip dropProps={{ align: { left: 'right' } }} content="Send Email"> */}

                   
                    {/* <Anchor  */}


                        {/* icon={  */}

                            {/* <Mail  */}

                            {/* size="medium" */}

                            {/* />  */}

                        {/* }  */}

                        {/* href="mailto:webdevcatalina@gmail.com"  */}

                    {/* /> */}

                {/* </Tip> */}

                {/* DOWNLOAD RESUME */}
                {/* <Tip dropProps={{ align: { left: 'right' } }} content="Professional Resume"> */}
            
                    {/* ADD "download" TO END OF ANCHOR TAG TO MAKE DOCUMENT DOWNLOADABLE */}
                    {/* <Anchor */}

                        {/* icon={  */}

                            {/* <DownloadOption  */}

                            {/* size="medium" */}

                            {/* />  */}

                        {/* }  */}

                        {/* href={resume} */}

                    {/* /> */}

                {/* </Tip> */}

                {/* DOWNLOAD CERTIFICATION */}
                {/* <Tip dropProps={{ align: { left: 'right' } }} content="Coding Boot Camp Certification"> */}
                
                    {/* <Anchor  */}
                    
                        {/* icon={  */}
{/*  */}
                            {/* <DownloadOption  */}

                            {/* size="medium" */}

                            {/* /> */}

                        {/* }  */}

                        {/* href={certification} */}

                    {/* /> */}

                {/* </Tip> */}

                {/* DIGITAL BUSINESS CARD */}
                {/* <Tip dropProps={{ align: { left: 'right' } }} content="Digital Business Card"> */}
                   
                    {/* <Anchor  */}

                        {/* icon={  */}

                            {/* <ContactInfo  */}

                            {/* size="medium" */}

                            {/* />  */}

                        {/* }  */}

                        {/* href="https://mycrd.is/catalina" */}

                    {/* />    */}

                {/* </Tip> */} */}
           
            </Nav>

        </Sidebar>
        </Affix>
    )

}

export default SideBar