import React, { useState } from 'react';

import  { Sidebar, Avatar, Nav, Tip, ResponsiveContext, Box } from 'grommet';

import { DownloadOption, Linkedin, StackOverflow, Github, Mail, ContactInfo } from 'grommet-icons';

// import avatarPic from '../images/profpic.jpg';

import resume from "../documents/Catalina's Resume.pdf"

import certification from '../documents/certificate.pdf'
import { Anchor, Affix, Button } from 'antd';


const { Link } = Anchor;


function SideBar () {
    const [top, setTop] = useState(10);
    const SidebarHeader = () => (
        // <Avatar size="large" src={} />
        "Header"
        );

        const MainNavigation = () => (
              <Nav gap="small">
             <Anchor>
                    <Link href="#biodiv" title="Biography" />
                    <Link href="#skillsdiv" title="Skills" />
                    <Link href="#educationdiv" title="Education" />
                    <Link href="#projectsdiv" title="Projects"/>
                </Anchor>
              </Nav>
            );
    const SidebarFooter = () => (
          <Nav gap="small">
              {/* LINKEDIN PROFILE */}
              <Tip  dropProps={{ align: { left: 'right' } }} content="LinkedIn Profile">
                        
                        <Button 
    
                            href="https://www.linkedin.com/in/catalinarwilliams/" 
    
                            icon={<Linkedin size="medium" /> }
    
                        >
    
                        </Button>
                    
                    </Tip>


                {/* STACK OVERFLOW */}
                <Tip dropProps={{ align: { left: 'right' } }} content="Stack Overflow Profile">

<Button 

    href="https://stackoverflow.com/users/11933391/catalina" 

    icon={<StackOverflow size="medium" />}

>

</Button>


</Tip> 


{/* GITHUB PROFILE */}
<Tip dropProps={{ align: { left: 'right' } }} content="Github Profile"> 

<Button 

    href="https://github.com/catalinarose1361"  

    icon={<Github size="medium" />}

>

</Button>

</Tip>


{/* EMAIL */}
                <Tip dropProps={{ align: { left: 'right' } }} content="Send Email">

                   
                    <Button 


                        icon={  

                            <Mail  

                             size="medium" 

                             />  

                        }  

                        href="mailto:webdevcatalina@gmail.com"  

                     > 
                      </Button>

                 </Tip> 

                {/* DOWNLOAD RESUME */}
                 <Tip dropProps={{ align: { left: 'right' } }} content="Professional Resume"> 
            
                     {/* ADD "download" TO END OF Button TAG TO MAKE DOCUMENT DOWNLOADABLE  */}
                    <Button 

                        icon={  

                             <DownloadOption  

                            size="medium" 

                             />  

                       }  

                      href={resume} 

                     > 
                      </Button>

                </Tip> 

                {/* DOWNLOAD CERTIFICATION  */}
                <Tip dropProps={{ align: { left: 'right' } }} content="Coding Boot Camp Certification"> 
                
                     <Button  
                    
                         icon={  

                             <DownloadOption  

                            size="medium" 

                             /> 

                         }  

                        href={certification} 

                    > 
                     </Button>

                </Tip> 

                {/* DIGITAL BUSINESS CARD  */}
                 <Tip dropProps={{ align: { left: 'right' } }} content="Digital Business Card"> 
                   
                    <Button  

                       icon={  

                            <ContactInfo  

                            size="medium" 

                            />  

                         }  

                         href="https://mycrd.is/catalina" 

                    >    
                    </Button>

               </Tip> 


         </Nav>
        );
  
   
    return (
        <Affix offsetTop={top}>
     
      
      
        

        <ResponsiveContext.Consumer>
      {responsive =>
        responsive === 'small' ? (
            <Sidebar direction="verticle" gap="large" height="min: '100%'">
                   <Button 

href="https://www.linkedin.com/in/catalinarwilliams/" 

icon={<Linkedin size="medium" /> }

>

</Button>
            </Sidebar>
    
         ) : (
             <Box direction="row" height={{ min: '100%' }}>

<Sidebar header={<SidebarHeader />} footer={<SidebarFooter />} >
        <MainNavigation />
            </Sidebar>
             </Box>
     

                 )
                        }
                      </ResponsiveContext.Consumer>

       
        </Affix>
    )

}

export default SideBar


       