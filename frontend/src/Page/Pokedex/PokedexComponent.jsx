import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

export function Component() {
    const API_URL = "http://localhost:3000"
    const [pokedex, setPokedex] = useState([])
    const [type, setType] = useState([])
    const [search, setSearch] = useState("")
    const [selectedType, setSelectedType] = useState("") 
    const navigate = useNavigate()
    const [page, setPage] = useState(1)

    useEffect(() => {
        const pokemon = async () => {
            try{
                const res = await fetch(`${API_URL}/pokemon`)
                const json = await res.json()

                if(json.status === 200){
                    setPokedex(json.data)
                }
            }
            catch(error){
                console.log(error)
            }
        }

        pokemon()
    }, [])

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
            ghost: "bg-linear-to-b from-violet-300 to-violet-600 text-white font-semibold rounded",
            ground: "bg-linear-to-b from-amber-600 to-amber-900 text-white font-semibold rounded",
            rock: "bg-linear-to-b from-yellow-700 to-yellow-950 text-white font-semibold rounded",
            fighting: "bg-linear-to-b from-red-700 to-yellow-950 text-white font-semibold rounded",
            ice: "bg-linear-to-b from-cyan-300 to-cyan-600 text-white font-semibold rounded",
            psychic: "bg-linear-to-b from-pink-500 to-pink-700 text-white font-semibold rounded",
            fairy: "bg-linear-to-b from-pink-300 to-pink-600 text-white font-semibold rounded",
            steel: "bg-linear-to-b from-slate-300 to-slate-600 text-white font-semibold rounded",
            normal: "bg-linear-to-b from-stone-300 to-stone-400 text-white font-semibold rounded",
            dragon: "bg-linear-to-b from-blue-800 to-yellow-600 text-white font-semibold rounded",
            bug: "bg-linear-to-b from-lime-300 to-lime-500 text-white font-semibold rounded"
        }

        return colors[t]
    }

    useEffect(() => {

        const type = async() => {
            try{
                const res = await fetch(`${API_URL}/type`)

                const json = await res.json()
                if(json.status === 200){
                    setType(json.data)
                }
            }
            catch(error){
                console.log(error)
            }
        }

        type()

    }, [])

    const pokemonDetail = (id) => {
        navigate(`/pokemon/${id}`)
    }


    const filteredPokedex = pokedex.filter((ex) => {
        const matchName = ex.name.toLowerCase().includes(search.toLowerCase())

        const matchType = 
        selectedType === "" || 
        ex.type1?.name?.toLowerCase() === selectedType.toLowerCase() ||
        ex.type2?.name?.toLowerCase() === selectedType.toLowerCase()

        return matchName && matchType
    })

    const paginationPokedex = filteredPokedex.filter((ex) => {
        if(page === 1) return ex.generation.no === 1
        if(page === 2) return ex.generation.no === 2
        if(page === 3) return ex.generation.no === 3
        if(page === 4) return ex.generation.no === 4 
        if(page === 5) return ex.generation.no === 5 
        if(page === 6) return ex.generation.no === 6
    })

    const formatPokedexId = (id) => "#" + id.toString().padStart(4, "0")

    return (
        <div className="h-screen flex align-center items-center flex-col gap-20">

            <div className="w-full flex justify-center pl-20 pr-20 flex-col gap-2">
                <input type="text" className="border border-gray-300 border-3 p-2 w-full rounded-md" placeholder="Search Pokemon Name" onChange={(e) => setSearch(e.target.value)}></input>
                <div className="flex justify-center align-center items-center">
                <button onClick={() => setSelectedType("")} className="text-center bg-gray-300 border border-2 text-white w-1/4 py-1 rounded-md">All</button>
                </div>
                <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
                    {type.map((ex) => 
                        <button onClick={() => setSelectedType(ex.name)} className={`${typeColor(ex.name)} text-center py-1`}>{ex.name}</button>
                    )}
                </div>
                <div className="flex justify-center pt-5">
                    <button onClick={() => setPage(1)} className="w-full bg-gray-200 border-r border-l border-gray-400 text-gray-700 text-lg">1</button>
                    <button onClick={() => setPage(2)} className="w-full bg-gray-200 border-r border-gray-400 text-gray-700 text-lg">2</button>
                    <button onClick={() => setPage(3)} className="w-full bg-gray-200 border-r border-gray-400 text-gray-700 text-lg">3</button>
                    <button onClick={() => setPage(4)} className="w-full bg-gray-200 border-r border-gray-400 text-gray-700 text-lg">4</button>
                    <button onClick={() => setPage(5)} className="w-full bg-gray-200 border-r border-gray-400 text-gray-700 text-lg">5</button>
                    <button onClick={() => setPage(6)} className="w-full bg-gray-200 border-r border-gray-400 text-gray-700 text-lg">6</button>
                </div>
            </div>

            {paginationPokedex.length === 0 ? (
                <div className="w-full flex justify-center pr-20 pl-20">
                    <span className="text-gray-500 font-bold text-lg border-t border-b border-gray-300 text-center w-full">Pokemon Tidak Ada</span>
                </div>
            ) : (
            <div className="grid md:grid-cols-3 lg:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-5 text-center flex pb-10">
            {paginationPokedex.map((ex) => (
                <button onClick={() => pokemonDetail(ex.pokedex_id) } className="bg-white rounded-md bg-[url('/src/assets/bg.jpg')] w-50 h-full flex flex-col justify-center items-center">
                    <span className="font-bold pt-2">{ex.name}</span>
                    <img src={ex.image} className="w-40 h-40 pt-5"></img>
                    <div className="flex gap-3 pt-5">
                        <span className={`${typeColor(ex.type1.name)} w-20 py-1`}>{ex.type1.name}</span>
                        {ex.type2?.name && (
                        <span className={`${typeColor(ex.type2.name)} w-20 py-1`}>{ex.type2.name}</span>
                        )}
                    </div>
                    <span className="text-gray-500 p-2">{formatPokedexId(ex.pokedex_id)}</span>
                </button>
            ))}
            </div>
            )}
        </div>
    )
}