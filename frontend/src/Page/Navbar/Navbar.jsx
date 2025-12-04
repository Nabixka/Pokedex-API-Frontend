export function Navbar(){
    return(
        <div className="flex justify-center bg-neutral-600 z-9">
            <div className='font-semibold flex gap-10 text-md items-center align-center py-4 text-white'>
                <button>Home</button>
                <button>Pokedex</button>
                <button>Video Games</button>
                <button>News</button>
            </div>
        </div>
    )
}