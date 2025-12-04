import React from 'react'

export function Content(){
    return(
        <div>
            <section id="definition" className='flex align-center items-center justify-around pt-60 '>
                
                <div className='bg-teal-950 h-50 w-80 rounded flex align-center items-center justify-center'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Yr7d-ZAHyH6fsShaPeXexRKDpedIOO97Eg&s" className='rounded-lg'></img>
                </div>

    
                <div className='flex gap-4 flex-col bg-teal-950 h-50 rounded-lg'>
                    <span className='text-extrabold mt-5 text-xl text-center text-white'>What Is Pokemon</span>
                    <div className='border border-white'></div>
                    <span className='m-5 text-white break-words w-150'>Pokemon Is about trainer catch a some creatures like animal are they call it by Pokemon</span>
                </div>

            </section>
        </div>
    )
}