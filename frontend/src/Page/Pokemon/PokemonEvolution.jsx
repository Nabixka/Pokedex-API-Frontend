import React from "react";
import { MoveRight } from "lucide-react";

export function PokemonEvolution({ pokemon, evolvesTo, onPokemonClick }) {
    return (
        <div className="flex items-center gap-10">

            <PokemonCircle
                pokemon={pokemon}
                onClick={() => onPokemonClick(pokemon.pokedex_id)}
            />

            {evolvesTo?.length > 0 && (
                <div className="flex flex-col gap-10">
                    {evolvesTo.map(next => (
                        <div key={next.id} className="flex items-center gap-6">

                            <div className="flex items-center gap-2">
                                <MoveRight size={40} />
                                <span className="text-sm text-gray-500 break-words w-25">
                                    {next.method}
                                </span>
                            </div>

                            <PokemonEvolution
                                pokemon={next}
                                evolvesTo={next.evolves_to}
                                onPokemonClick={onPokemonClick}
                            />

                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

function PokemonCircle({ pokemon, onClick }) {
    return (
        <button
            onClick={onClick}
            className="bg-[url('/src/assets/bg.jpg')] bg-cover rounded-full
                       flex justify-center items-center
                       w-18 md:w-36 h-18 md:h-36
                       cursor-pointer hover:scale-105 transition"
        >
            <img
                src={pokemon.image}
                alt={pokemon.name}
                className="w-15 md:w-28 h-15 md:h-28"
            />
        </button>
    )
}
