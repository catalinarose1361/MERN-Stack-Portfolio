import React from 'react';

import { Link } from "react-router-dom";

import  { Button} from 'grommet'

import logo from '../images/dark_logo_white_background.jpg';

// THIS PAGE RENDERS AT THE ROOT DIRECTORY "/"
const TitlePage = () => {
   
    return (

        <>
            <img

                height={1000}

                width={1500}

                src={logo}

            />

            <Link to="/main">

                <Button primary label="continue" />
   
            </Link>

       </>

    );
}


export default TitlePage