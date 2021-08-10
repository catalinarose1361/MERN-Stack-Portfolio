import React from 'react';

import  { Card, CardHeader, CardBody, CardFooter, Grommet, Box } from 'grommet';

import { Css3, Heroku, Html5, Js, Mysql, Node, Npm, Reactjs } from 'grommet-icons';

const Skills = () => {

    return (
        <Box direction="row">
            <Mysql size='large'  />
            <Node size='large'  />
            <Npm size='large'  />
            <Reactjs size='large'  />
            <Css3 size='large'  />
            <Heroku size='large'  />
            <Html5 size='large'  />
            <Js size='large'  />
        </Box>
    )
}

export default Skills;