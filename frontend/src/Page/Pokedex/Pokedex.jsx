import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Component } from './PokedexComponent'

export default function Pokedex(){
    return(
        <div>
            <div className="fixed top-0 left-0 right-0">
                <Navbar />
            </div>
            <div className="pt-75 sm:pt-10">
            <Component />
            </div>
        </div>
    )
}