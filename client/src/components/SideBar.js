import React from 'react';

import  { Sidebar, Avatar, Button, Nav } from 'grommet';

import { Gem } from 'grommet-icons';

function SideBar () {

    return (

        <Sidebar background="brand" round="small"

            header={

                <Avatar src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />

            }

            footer={

                <Button 

                    icon={<Gem />} 

                    hoverIndicator

                />
            }
        >
            <Nav gap="small">
    <Button icon={<Gem />} hoverIndicator />
    <Button icon={<Gem />} hoverIndicator />
  </Nav>

        </Sidebar>

    )

}

export default SideBar