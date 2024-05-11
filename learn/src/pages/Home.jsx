import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Home() {

  return (
   <>   
    <HelmetProvider>
      <Helmet>
        <title>Murad</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
  </HelmetProvider>
  ilvin
   </>
  )
}

export default Home
