import React, {useState, useEffect} from 'react'

export function Component() {
    const API_URL = "http://localhost:3000"
    const [pokedex, setPokedex] = useState([])
    const [type, setType] = useState([])
    const [search, setSearch] = useState("")
    const [selectedType, setSelectedType] = useState("") 

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
            fire: "bg-linear-to-b from-red-300 to-red-600 text-white font-semibold rounded px-5 py-1",
            water: "bg-linear-to-b from-blue-300 to-blue-600 text-white font-semibold rounded px-5 py-1",
            grass: "bg-linear-to-b from-green-300 to-green-600 text-white font-semibold rounded px-5 py-1",
            poison: "bg-linear-to-b from-purple-300 to-purple-600 text-white font-semibold rounded px-5 py-1",
            flying: "bg-linear-to-b from-blue-100 to-blue-400 text-white font-semibold rounded px-5 py-1",
            electric: "bg-linear-to-b from-yellow-300 to-yellow-600 text-white font-semibold rounded px-5 py-1",
            dark: "bg-linear-to-b from-gray-500 to-black text-white font-semibold rounded px-5 py-1",
            ghost: "bg-linear-to-b from-violet-300 to-violet-600 text-white font-semibold rounded px-5 py-1",
            ground: "bg-linear-to-b from-amber-600 to-amber-900 text-white font-semibold rounded px-5 py-1",
            rock: "bg-linear-to-b from-yellow-700 to-yellow-950 text-white font-semibold rounded px-5 py-1",
            fighting: "bg-linear-to-b from-red-700 to-yellow-950 text-white font-semibold rounded px-5 py-1",
            ice: "bg-linear-to-b from-cyan-300 to-cyan-600 text-white font-semibold rounded px-5 py-1",
            psychic: "bg-linear-to-b from-pink-500 to-pink-700 text-white font-semibold rounded px-5 py-1",
            fairy: "bg-linear-to-b from-pink-300 to-pink-600 text-white font-semibold rounded px-5 py-1",
            steel: "bg-linear-to-b from-slate-300 to-slate-600 text-white font-semibold rounded px-5 py-1",
            normal: "bg-linear-to-b from-stone-300 to-stone-400 text-white font-semibold rounded px-5 py-1",
            dragon: "bg-linear-to-b from-blue-800 to-yellow-600 text-white font-semibold rounded px-5 py-1",
            bug: "bg-linear-to-b from-lime-300 to-lime-500 text-white font-semibold rounded px-6 py-1"
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

    const filteredPokedex = pokedex.filter((ex) => {
        const matchName = ex.name.toLowerCase().includes(search.toLowerCase())

        const matchType = 
        selectedType === "" || 
        ex.type1?.name?.toLowerCase() === selectedType.toLowerCase() ||
        ex.type2?.name?.toLowerCase() === selectedType.toLowerCase()

        return matchName && matchType
    })


    return (
        <div className="h-screen flex align-center items-center flex-col gap-20">

            <div className="w-full flex justify-center pl-20 pr-20 flex-col gap-2">
                <input type="text" className="border border-gray-300 border-3 p-2 w-full rounded-md" placeholder="Search Pokemon Name" onChange={(e) => setSearch(e.target.value)}></input>
                <div className="flex justify-center align-center items-center">
                <button onClick={() => setSelectedType("")} className="text-center bg-gray-300 border border-2 text-white w-1/4 py-1 rounded-md">All</button>
                </div>
                <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
                    {type.map((ex) => 
                        <button onClick={() => setSelectedType(ex.name)} className={`${typeColor(ex.name)} text-center`}>{ex.name}</button>
                    )}
                </div>
            </div>

            {filteredPokedex.length === 0 ? (
                <div className="w-full flex justify-center pr-20 pl-20">
                    <span className="text-gray-500 font-bold text-lg border-t border-b border-gray-300 text-center w-full">Pokemon Tidak Ada</span>
                </div>
            ) : (
            <div className="grid md:grid-cols-3 lg:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-5 text-center flex pb-10">
            {filteredPokedex.map((ex) => (
                <div className="bg-white rounded-md bg-[url('/src/assets/bg.jpg')] w-50 h-full flex flex-col justify-center items-center">
                    <span className="font-bold pt-2">{ex.name}</span>
                    <img src={ex.image} className="w-40 h-40 pt-5"></img>
                    <div className="flex gap-3 pt-5">
                        <span className={`${typeColor(ex.type1.name)}`}>{ex.type1.name}</span>
                        {ex.type2?.name && (
                        <span className={`${typeColor(ex.type2.name)}`}>{ex.type2.name}</span>
                        )}
                    </div>
                    <span className="text-gray-500 p-2">#000{ex.pokedex_id}</span>
                </div>
            ))}
            </div>
            )}
        </div>
    )
}