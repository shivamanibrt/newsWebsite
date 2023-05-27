import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

export const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className='children'>{children}</div>
            <Footer />
        </div>
    )
}
