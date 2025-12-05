import { useNavigate, useLocation } from "react-router-dom"

export function Navbar(){
    const navigate = useNavigate()
    const location = useLocation()

    const Home = () => {
        navigate("/")
    }

    const Pokedex = () => {
        navigate('/pokedex')
    }

    const Games = () => {
        navigate('/games')
    }

    const news = () => {
        navigate('/news')
    }

    const isActive = (path) => location.pathname === path

    return(
        <div className="flex justify-center bg-neutral-600 z-9">
            <div className='font-semibold flex gap-10 text-md text-white'>
                <button className={`${isActive("/") ? "bg-yellow-500" : "bg-transparant"} py-2 px-10`} onClick={Home}>Home</button>
                <button className={`${isActive("/pokedex") ? "bg-yellow-500" : "bg-transparant"} py-2 px-10`} onClick={Pokedex}>Pokedex</button>
                <button className={`${isActive("/games") ? "bg-yellow-500" : "bg-transparant"} py-2 px-10`} onClick={Games}>Video Games</button>
                <button className={`${isActive("/news") ? "bg-yellow-500" : "bg-transparant"} py-2 px-10`} onClick={news}>News</button>
            </div>
        </div>
    )
}