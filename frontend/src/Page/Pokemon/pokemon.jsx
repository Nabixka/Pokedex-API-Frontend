import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { PokemonDetail } from "./pokemonDetail";

export default function Pokemon(){
    return(
        <div>
            <Navbar />
            <div className="pt-20">
                <PokemonDetail />
            </div>
        </div>
    )
}