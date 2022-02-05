import Head from 'next/head';
import React from 'react';
import Header from './Header';


const Layout = ({ children }) => (
  <>
  <Head>
    <title>tribu8 Blog</title>
    <link rel="icon" href="favicon.ico" />
    <meta name="viewport" content="initial-scale=1.0" width="device-width" />
    <meta name="description" content="tribu8 Blog" />
    <meta name="og:description" content="tribu8 Blog" />
    <meta name="og:title" content="tribu8 Blog" />
    <meta name="og:type" content="website" />
    <meta name="og:url" content="https://tribu8.vercel.app" />
    
  </Head>
    <Header />
    {children}
  </>
);

export default Layout;