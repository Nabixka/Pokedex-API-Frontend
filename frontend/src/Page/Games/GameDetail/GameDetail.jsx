import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export function GameDetail() {
    const API_URL = "http://localhost:3000/game"
    const [game, setGame] = useState({})
    const { id } = useParams()

    useEffect(() => {
        const getGame = async () => {
            try {
                const res = await fetch(`${API_URL}/${id}`)
                const json = await res.json()

                setGame(json.data)
            }
            catch (err) {
                console.log(err.message)
            }
        }

        getGame()
    }, [])

    return (
        <div className="bg-gray-100 flex pl-10 pt-10 pr-10 border-2 border-gray-300 flex m-10 h-110 rounded-md gap-20">
            <div className="">
                <img className="w-100 h-90" src={`${game.image}`} ></img>
            </div>
            <div className="flex flex-col justify-between pb-10 w-full">
                <div className="flex flex-col gap-10">
                    <span className="text-3xl font-bold">{game.name}</span>
                    <table class="w-full border-collapse">
                        <tbody>
                            <tr class="rounded-t-md odd:bg-gray-200 even:bg-gray-300">
                                <td class="p-2 font-bold">Console</td>
                                <td class="p-2">{game.console}</td>
                            </tr>
                            <tr class="odd:bg-gray-200 even:bg-gray-300">
                                <td class="p-2 font-bold">Developer</td>
                                <td class="p-2">{game.developer}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="flex justify-center">
                    <button className="bg-linear-to-b from-red-800 to-red-500 font-bold text-white rounded-md px-10 py-2">Download Now</button>
                </div>
            </div>
        </div>
    )
}