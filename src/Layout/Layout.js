import React from 'react'
import Footer from './Footer/Footer';
import Header from './Header/Header';

const Layout = ({ children, enableHeaderChildren }) => (
  <>
    <Header enableChildren={enableHeaderChildren} />
    {children}
    <Footer/>
  </>
)

export default Layout