import React from 'react';

const logoUrl = "https://lh3.googleusercontent.com/ImRVmmSUghlCHAIOfco-GY2zLxTYqRMjziyhcpzTSy4ET4wwQNB2hJe_-KawFEH7E3mRF0wszCjVgPMSlorBCKD8kb_x4GJYiuwkEZYcUahHe0Rjaj84-JxkHuqw-Bl19BuW0W0k3xFS5WVeKOM6SqIjDBqjSB2X_xnmz9id0u5gr4s5yj19w4ev9QzEOufQiNdTR7tM9kX0Y9i387uAypaUT3uDSd1p_TB676WMOViLsE9Ih0cdmeNqaRF_TDCo7b68hR1lqGRR4CFiaL3XtjVQHcurZ8EpLF-A8jHpmBHE6EJOPoxGInMB4SnKDU_XXwiA8uArZ5EnHftwXm9t-c7A6MjJnnKQwB7N8zau8nBgd4BC_pWTT1Y0bJMB1zG1FjpuXU-gQNyZBZnow0-wYVlKhyWO4T1DT5QOgKu82ReNPwf-Jw705PGTImJeJGK2HpuL4oyjyb0b-RifcyFZlUCUiR_F7ItMrXU_CCNphSB_W-uDzud-VW8OhQrSFE8TshyVOt-SRB4JG4EGuq4K-rty96-ovY7AcrDyn0BERCBmAPNRevWXouLCK4LWgV4EmEMNWPNZd69NtOn2sxCtKM9QjpIm6vvzjRkznUKZo7XyjbM0WHTh_TFUKHETyT8fr7_0jWgBIoh4azEIfF1UBv5Y9KdHz4YGkETbmFUtMafBEEFQ6wvtAI1rxL74CAeqfjZTbsmkhdVAelve0yPyoq4=w3400-h2089-no?authuser=3"

// THIS PAGE RENDERS AT THE ROOT DIRECTORY "/"
const TitlePage = () => {
   
    return (

      
        <div 

            id="background" 

            style={{

                backgroundColor:'#530EF0', 

                backgroundImage: `url(${logoUrl})`, 

                textAlign:'center'

            }}

        >
         
        </div>
       
    );
}

export default TitlePage