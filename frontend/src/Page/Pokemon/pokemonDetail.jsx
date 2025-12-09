import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function PokemonDetail() {
    const API_URL = "http://localhost:3000"

    const [pokemon, setPokemon] = useState({})
    const [stats, setStats] = useState({})
    const { id } = useParams()

    const typeColor = (typeName = "") => {
        const t = typeName.toLowerCase()
        const colors = {
            fire: "bg-linear-to-b from-red-300 to-red-600 text-white font-semibold rounded",
            water: "bg-linear-to-b from-blue-300 to-blue-600 text-white font-semibold rounded",
            grass: "bg-linear-to-b from-green-300 to-green-600 text-white font-semibold rounded",
            poison: "bg-linear-to-b from-purple-300 to-purple-600 text-white font-semibold rounded",
            flying: "bg-linear-to-b from-blue-100 to-blue-400 text-white font-semibold rounded",
            electric: "bg-linear-to-b from-yellow-300 to-yellow-600 text-white font-semibold rounded",
            dark: "bg-linear-to-b from-gray-500 to-black text-white font-semibold rounded",
            ghost: "bg-linear-to-b from-violet-300 to-violet-600 text-white font-semibold rounded ",
            ground: "bg-linear-to-b from-amber-600 to-amber-900 text-white font-semibold rounded ",
            rock: "bg-linear-to-b from-yellow-700 to-yellow-950 text-white font-semibold rounded ",
            fighting: "bg-linear-to-b from-red-700 to-yellow-950 text-white font-semibold rounded ",
            ice: "bg-linear-to-b from-cyan-300 to-cyan-600 text-white font-semibold rounded ",
            psychic: "bg-linear-to-b from-pink-500 to-pink-700 text-white font-semibold rounded",
            fairy: "bg-linear-to-b from-pink-300 to-pink-600 text-white font-semibold rounded ",
            steel: "bg-linear-to-b from-slate-300 to-slate-600 text-white font-semibold rounded ",
            normal: "bg-linear-to-b from-stone-300 to-stone-400 text-white font-semibold rounded ",
            dragon: "bg-linear-to-b from-blue-800 to-yellow-600 text-white font-semibold rounded ",
            bug: "bg-linear-to-b from-lime-300 to-lime-500 text-white font-semibold rounded "
        }

        return colors[t]
    }

    useEffect(() => {
        const pokemonDe = async () => {
            try {
                const res = await fetch(`${API_URL}/pokemon/${id}`)
                const json = await res.json()

                setPokemon(json.data)
            }
            catch (err) {
                console.log(err.message)
            }
        }

        pokemonDe()
    }, [id])

    useEffect(() => {
        const pokemonStats = async () => {
            try {
                const res = await fetch(`${API_URL}/stats/${pokemon.id}`)
                const json = await res.json()

                setStats(json.data)
            }
            catch(err){
                console.log(err.message)
            }
        }

        pokemonStats()
    }, [pokemon.id])

    const formatPokedexId = (id) => "#" + id.toString().padStart(4, "0")

    return (
        <div className="flex sm:justify-evenly items-center align-center flex-col lg:flex-row justify-center gap-5 pl-5 pr-5">
            <div className="flex justify-center bg-[url('/src/assets/bg.jpg')] border border-3 border-gray-300 rounded-md overflow-hidden w-2/3 md:w-100" >
                <img className="w-80 h-80" src={pokemon.image}></img>
            </div>
            <div className="flex-col flex gap-5">
                <span className="font-bold text-4xl text-center">Pokedex Data</span>
                <div className="flex flex-col gap-5 pl-10">
                    <span className="">Name: {pokemon.name}</span>
                    <span className="break-words">Description: <span>{pokemon.description}</span></span>
                    <span>Pokedex Id: {pokemon.pokedex_id && formatPokedexId(pokemon.pokedex_id)}</span>
                    <span>Height: {pokemon.height} m</span>
                    <span>Weight: {pokemon.weight} kg</span>
                    <div className="flex gap-5">
                        Type:
                        {pokemon.type1 && (
                            <button>
                                <span className={`${typeColor(pokemon.type1.name)} px-6 py-1`} >{pokemon.type1.name}</span>
                            </button>
                        )}
                        {pokemon.type2 && pokemon.type2.name && (
                            <button>
                                <span className={`${typeColor(pokemon.type2.name)} px-6 py-1`} >{pokemon.type2.name}</span>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}