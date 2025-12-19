import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { PokemonStats } from "./PokemonStats";
import { PokemonEvolution } from "./PokemonEvolution";


export function PokemonDetail() {
    const API_URL = "http://localhost:3000"

    const [pokemon, setPokemon] = useState({})
    const [stats, setStats] = useState({})
    const { id } = useParams()
    const [sebelum, setSebelum] = useState({})
    const [sesudah, setSesudah] = useState({})
    const navigate = useNavigate()
    const [evol, setEvol] = useState({})


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
            catch (err) {
                console.log(err.message)
            }
        }

        pokemonStats()
    }, [pokemon.id])

    const formatPokedexId = (id) => "#" + id.toString().padStart(4, "0")

    useEffect(() => {
        const pokemonSebelum = async () => {
            try {
                const sebelumId = Number(id) - 1
                if (sebelumId === 0) {
                    return null
                }
                const res = await fetch(`${API_URL}/pokemon/${sebelumId}`)
                const json = await res.json()

                setSebelum(json.data)

            }
            catch (err) {
                console.log(err.message)
            }
        }

        pokemonSebelum()
    }, [id])

    useEffect(() => {
        const pokemonSesudah = async () => {
            try {
                const newId = Number(id) + 1
                if (isNaN(newId)) {
                    return null
                }


                const res = await fetch(`${API_URL}/pokemon/${newId}`)
                if (!res.ok) return
                const json = await res.json()

                setSesudah(json.data)

            }
            catch (err) {
                console.log(err.message)
            }
        }

        pokemonSesudah()
    }, [id])

    const HandleNavigate = (pokedex_id) => {
        navigate(`/pokemon/${pokedex_id}`)
    }

    useEffect(() => {
        const evolution = async () => {
            try {
                const res = await fetch(`${API_URL}/evolution/pokemon/${id}`)
                const json = await res.json()

                setEvol(json.data)
            }
            catch (err) {
                console.log(err.message)
            }
        }

        evolution()
    }, [id])

    return (
        <div className="bg-white rounded-md pl-5 pt-5 pr-5 pb-5 flex flex-col gap-5">

            {/* Pokemon */}
            <div className="flex justify-between items-center border-b border-gray-300 pb-2">
                <button onClick={() => HandleNavigate(sebelum.pokedex_id)} className="flex gap-2">
                    <div className="flex flex-col">
                        <span className="font-semibold text-md">{sebelum ? sebelum.name : ""}</span>
                        <span className="text-sm">{sebelum.pokedex_id && (formatPokedexId(sebelum.pokedex_id))}</span>
                    </div>
                </button>
                <span className="font-bold text-2xl md:text-4xl">{pokemon.name}</span>
                <button onClick={() => HandleNavigate(sesudah.pokedex_id)} className="flex gap-2">
                    <div className="flex flex-col">
                        <span className="font-semibold text-md">{sesudah.name}</span>
                        <span className="text-sm">{sesudah?.pokedex_id ? formatPokedexId(sesudah.pokedex_id) : ""}</span>
                    </div>
                </button>
            </div>

            {/* Image & Stats */}
            <div className="flex md:align-center flex-col md:flex-row md:items-center justify-around border-b border-gray-300 pb-2">
                <img className="w-100" src={pokemon.image}></img>
                <div className="flex flex-col gap-5">
                    <div>
                        <span className="font-bold text-center text-3xl">Stats</span>
                    </div>
                    <div>
                        <PokemonStats label="HP" value={stats.hp} />
                        <PokemonStats label="Attack" value={stats.attack} />
                        <PokemonStats label="Deff" value={stats.deff} />
                        <PokemonStats label="Sp.Attack" value={stats.sp_attack} />
                        <PokemonStats label="Sp.Deff" value={stats.sp_deff} />
                        <PokemonStats label="Speed" value={stats.speed} />
                    </div>
                    <span className="font-semibold">Total : <strong>{stats.total}</strong></span>
                </div>
            </div>

            {/* Description  */}
            <div className="flex flex-col gap-5">
                <div>
                    <span className="text-4xl font-bold">Pokedex Data</span>
                    <div className="flex pt-3">
                        <div className="flex flex-col font-bold w-40 gap-2">
                            <span>National Dex</span>
                            <span>Type</span>
                            <span>Region</span>
                            <span>Weight</span>
                            <span>Height</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span>{pokemon.pokedex_id && (formatPokedexId(pokemon.pokedex_id))}</span>
                            <div className="flex gap-2">
                                {pokemon.type1 && (<button><span className={`${typeColor(pokemon.type1.name)} px-5 py-1`}>{pokemon.type1.name}</span></button>)}
                                {pokemon.type2 && pokemon.type2.name && (<button><span className={`${typeColor(pokemon.type2.name)} px-5 py-1`}>{pokemon.type2.name}</span></button>)}
                            </div>
                            <span>{pokemon.region && (pokemon.region.name)}</span>
                            <span>{pokemon.weight} kg</span>
                            <span>{pokemon.height} m</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <span className="text-4xl font-bold">Pokedex Entry</span>
                    <span>{pokemon.description}</span>
                </div>
                <div className="flex flex-col gap-10">
                    <span className="text-4xl font-bold">Evolution Line</span>

                    <div className="flex justify-center">
                        {evol?.base && (
                            <PokemonEvolution
                                pokemon={evol.base}
                                evolvesTo={evol.chain}
                                onPokemonClick={HandleNavigate} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}