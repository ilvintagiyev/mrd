import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';


function NoPage() {
  return (
    <>
    <HelmetProvider>
   
   <Helmet>
     <title>51+PLS</title>
 <link rel="icon" type="image/svg+xml" href="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg" />
     
   </Helmet>
   <h1></h1>
 
</HelmetProvider>
    Error 404
    </>
  )
}

export default NoPage
