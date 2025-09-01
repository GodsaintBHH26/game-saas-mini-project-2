import React from 'react'

function FeaturedCard() {
  return (
    <>
    <div className='bg-white min-w-128 md:w-128 sm:w-96 h-88 rounded-2xl shadow-2xl overflow-hidden flex flex-col items-center p-5'>
        <img src="/img/game-content/cyberquest---futuristic-rpg-adventure-.jpg" className='h-66 rounded-xl' />
        <div className='text-center p-2'>
            <h1 className='text-xl font-semibold text-black'>CyberQuest</h1>
            <p className='text-black font-semibold'>Futuristic RPG adventure.</p>
        </div>
    </div>
    </>
  )
}

export default FeaturedCard