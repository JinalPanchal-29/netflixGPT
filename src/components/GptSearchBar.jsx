import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='pt-[10%] flex justify-center'>
        <form action="" className='w-1/2 p-4 bg-black grid grid-cols-12'>
            <input type="text" className='col-span-9' placeholder='What would you like to watch today?' />
            <button className='btn px-4 py-2 col-span-3 bg-[#e60914] text-white'>Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar