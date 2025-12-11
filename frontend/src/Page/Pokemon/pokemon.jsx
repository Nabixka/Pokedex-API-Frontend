import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { PokemonDetail } from "./pokemonDetail";

export default function Pokemon() {
    return (
        <div className="bg-yellow-400 h-full">
            <div className="fixed top-0 left-0 right-0">
                <Navbar />
            </div>
            <div className="pt-20 pl-5 pr-5 pb-20">
                <PokemonDetail />
            </div>
        </div>
    )
}