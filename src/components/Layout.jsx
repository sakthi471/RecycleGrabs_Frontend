import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <div className='w-full flex flex-col items-center'>
            <Nav/>
            {children}
            <Footer />
        </div>
    )
}

export default Layout