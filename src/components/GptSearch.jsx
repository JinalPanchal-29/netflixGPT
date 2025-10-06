import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'

const GptSearch = () => {
    return (
        <div className=''>
            <div className="absolute -z-10">
                <img className="w-full" src="https://assets.nflxext.com/ffe/siteui/vlv3/c95abc7a-8124-4630-bb7a-3b160bdc6de3/web/IN-en-20250915-TRIFECTA-perspective_d3d87aa7-58ed-4c6b-98dc-231ed05ba675_large.jpg" alt="" />
            </div>
            <div className=''>
                <GptSearchBar />
                <GptMovieSuggestion />
            </div>
        </div>
    )
}

export default GptSearch