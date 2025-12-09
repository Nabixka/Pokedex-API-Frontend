import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export function GameContent() {
    const API_URL = "http://localhost:3000/game"
    const [game, setGame] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const getGame = async () => {
            try {
                const res = await fetch(API_URL)
                const json = await res.json()

                setGame(json.data)
            }
            catch (err) {
                console.log(err.message)
            }
        }

        getGame()
    }, [])

    const HandleNavigate = (id) => {
        navigate(`/game/${id}`)
    }


    return (
        <div className="flex justify-center pl-10">
            {game.length === 0 ? (
                <div className="pt-75 sm:pt-50 ">
                    <span className="text-4xl font-bold text-gray-400 break-words align-center text-center border-t border-b">
                        TIdak Dapat Terhubung Ke Server, Coba Lagi Nanti
                    </span>
                </div>
            ) : (

                <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-10">
                    {game.map((ex) => (
                        <button onClick={() => HandleNavigate(ex.id)} className="border border-gray-400 bg-[url('/src/assets/bg.jpg')] text-center rounded-md overflow-hidden w-40 md:w-50 ">
                            <img className="pt-2 pl-2 pr-2" src={ex.image}></img>
                            <span className="text-xl font-bold break-words">{ex.name}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}