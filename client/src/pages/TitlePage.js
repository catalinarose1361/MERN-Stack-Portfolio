import React from 'react';

import { Link } from "react-router-dom";

import  { Button} from 'grommet'

import { Css3, Heroku, Html5, Js, Mysql, Node, Npm, Next } from 'grommet-icons';

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

                <Next  />
   
            </Link>

       </>

    );
}


export default TitlePage