import React from 'react';
import { Link } from "react-router-dom";

import  { Grommet, Sidebar, Main, Carousel, Grid, Box, Image, Button} from 'grommet';


// THIS PAGE RENDERS AT THE ROOT DIRECTORY "/"
const TitlePage = () => {
   
    return (

      
        <Box basis="auto" collapse="verticle">
        <Image
          fit="center"
          src="https://lh3.googleusercontent.com/ifGDQTpX3pwbGCNZAfOoCY3B8rTxdWLG4UNcr3L1Zgk4stDyFtYFraRWZH0reCcAVKr_-S7wNZBa4KIrkGCTYowe58AptvLvdMPfY7_ztflUQk6AU-PXzg_ZfRGeZjkTy58MIbLzNbuJh7qkoHbKNFSzlaJo4Z2IRn3Y5XI4L0MRgsXbFl8Me4KX6ckoYFv-6-YZ01i5e4kbh9pkrXl7FoFP_Bg_1_YF-06yfKDsar4wFyVu5nLj3gKsgF8YmnokPrbjsKlLdK-L67_0GF0h8xY-ddmy7RLhuQ0bvCqRSxoeY7Bk7LmfKXaevDLbBaA-7wBHVOde1XN6L5hyXAq3VgjVxNjXluwAdpsViI8tC_BSpfcIqiWzuCkgZYAeBif8c_9QwYqusFlUsWztecrUtzhccL2S-bgNzWjDNzRuGzBNvTGwxunDidkfodxLcfKfvxkvWxboTY5E3VT-SzIFihckA19CyLF8X5jMLsdKFv0_uYEZwsMfIwqqbxb5mis88A-QbgCS7LNm60f5qADtdSy21iBaBR8Zli-K5dceB0s7VoEywfbhJFG5kBdqmNtp-3KfBC9cF--2licNc-vPT40CeyMcuUyFIuwfZlFELw_OAZm6AKAjEZdgmaI4lnxqZzPe_fDumDFQmeOV84QXcDbNy54w_rfvP3nb6ez2MrNxZBwj22ASM4qtPlXqCo6-a0mzTaF4OMdUjRd8GC6FMag=w3400-h2089-no?authuser=3"
        />

<Link to="/main">

<Button primary label="continue" />
   
</Link>
       
      </Box>
       
    );
}

export default TitlePage