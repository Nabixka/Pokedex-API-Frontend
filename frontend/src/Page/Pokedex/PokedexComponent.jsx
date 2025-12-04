import React, {useState, useEffect} from 'react'

export function Component() {
    const API_URL = "http://localhost:3000/pokemon"
    const [pokedex, setPokedex] = useState([])

    useEffect(() => {
        const pokemon = async () => {
            try{
                const res = await fetch(API_URL)
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
    })


    return (
        <div className="h-screen flex justify-center align-center items-center">

            <div className="grid md:grid-cols-3 lg:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-5 text-center flex pb-10">
            {pokedex.map((ex) => (
                <div className="bg-white rounded-md bg-[url('/src/assets/bg.jpg')] w-50 h-50 flex flex-col justify-center items-center">
                    <span className='font-bold'>{ex.name}</span>
                    <img src={ex.image} className="w-40 h-40"></img>
                </div>
            ))}
            </div>
        </div>
    )
}