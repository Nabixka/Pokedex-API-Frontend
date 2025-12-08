import { useNavigate, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Navbar() {
    const navigate = useNavigate()
    const location = useLocation()
    const [open, setOpen] = useState(false)

    const handleNavigate = (url) => {
        navigate(`/${url}`)
        setOpen(false)
    }

    const isActive = (path) => location.pathname === path

    const menuItemClass = (path) =>
        `${isActive(path) ? "bg-yellow-500" : "bg-transparent"} py-2 px-10 rounded-md`

    return (
        <div className="bg-neutral-600 text-white w-full z-50">

            <div className="hidden md:flex justify-center">
                <div className="font-semibold flex gap-10 text-md">
                    <button className={`${isActive("/") ? "bg-yellow-500" : "bg-transparant"} py-2 px-10`} onClick={() => handleNavigate("")}>Home</button>
                    <button className={`${isActive("/pokedex") ? "bg-yellow-500" : "bg-transparant"} py-2 px-10`} onClick={() => handleNavigate("pokedex")}>Pokedex</button>
                    <button className={`${isActive("/games") ? "bg-yellow-500" : "bg-transparant"} py-2 px-10`} onClick={() => handleNavigate("Games")}>Video Games</button>
                    <button className={`${isActive("/news") ? "bg-yellow-500" : "bg-transparant"} py-2 px-10`} onClick={() => handleNavigate("news")}>News</button>
                </div >
            </div >

            <div className="flex items-center md:hidden px-5 py-4">
                <button onClick={() => setOpen(!open)}>
                    {open ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            <div className={`md:hidden flex flex-col gap-3 text-center font-semibold bg-neutral-700 transition-all duration-300 overflow-hidden ${open ? "max-h-96 py-5" : "max-h-0 py-0"}`} >
                <button className={menuItemClass("/")} onClick={() => handleNavigate("")}>Home</button>
                <button className={menuItemClass("/pokedex")} onClick={() => handleNavigate("pokedex")}>Pokedex</button>
                <button className={menuItemClass("/games")} onClick={() => handleNavigate("games")}>Video Games</button>
                <button className={menuItemClass("/news")} onClick={() => handleNavigate("news")}>News</button>
            </div>

        </div >
    )
}
