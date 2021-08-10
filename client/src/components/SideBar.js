import React from 'react';

import  { Sidebar, Avatar, Button, Nav } from 'grommet';

import { DownloadOption, Linkedin, StackOverflow, Github, Mail } from 'grommet-icons';

function SideBar () {

    return (

        <Sidebar gap="large" height="min: '100%'"

            

          

            

         
        >
            <Nav>
                <Avatar src="https://lh3.googleusercontent.com/5sUH3T_FocfnM-TAANKQat9lonvz8KAhDx2EqMGThu0aidpODxvi0nO9g6wjTgmk0MYtkdvtlu9-jIyWyYE6AXmZD3cQQcgPIDLg52cES9Da9mWalYsfFQKL943CQYI6eF_ZazyfLNqeMiCGiDWhc4FtstBiiiVfEB3gkSULwYwqqHcuxh8syQajgllhC0G1dJqz-GaHeWBKzpA6GVNWQ8nMr1GKUJKGzHMih3ijRiZIptHbH9Ci5uG3RKkXc4HT7JXhIXo3eXtidkuPd6QfKe5dMptQh-95XRdZZINkewvNmDQ6ZdCn0gUqP1v5PDs0SyPVuhen4s6FzgzR_VH8dtjgTDx3l2Eb5VHchxXuWH2pP-mqvKOIlbsEjRasz5qZ4BqDCH1gWuwD5TeUJyuL6mg07JVy0lxrDw6aAW5AmcGOUdC-vw6650yU3R67-x-yx-uiZFBxJrjoxwSECaepHYdf0Qbsq0luL2tMcRKcYGDSV1UUzMuy0AGdeomjYG0Z1vGysgcnnFo7NXQCNcLaQ1Q10TKj4KlBv724Fxn2oX2KucIWGUh734vrMnthQh77_wIBMxkR8vqgY8WHBNWpkwDK3okDZG8Rvd8y0zsY2KASH9CgXYM7f6Qn8vg40-rVu3w4grELzxJDRG_yg8OwZ5JVglUQN8D6cUTRNL6W8UrvufhM7IGWu4E5Pnzw450eORTYgMSi89u9rudwKSgfQ2s=w1926-h2144-no?authuser=3" />
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