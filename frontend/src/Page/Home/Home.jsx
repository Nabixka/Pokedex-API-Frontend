import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Content } from './HomeContent'

export default function Home(){
    return(
        <div className='bg-white h-screen'>
            
            <Navbar />

            <Content />
        </div>
    )
}