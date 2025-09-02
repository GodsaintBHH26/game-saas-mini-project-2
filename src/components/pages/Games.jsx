import React from 'react'
import { gamesData } from '../../data/cardData'
import GameCard from '../UI/GameCard'

function Games() {
  return (
    <>
    <div className='bg-emerald-500 w-full'>
      <div className="min-h-screen bg-gradient-to-br from-[#FAFFF7] to-[#9DD69A] text-black">
      {/* Page Header */}
      <section className="py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-emerald-900">
          Explore Our Games
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-emerald-700">
          Browse through our ever-growing library of games. From action-packed
          adventures to casual fun, there’s something for everyone.
        </p>
      </section>

      {/* Games Grid */}
      <section className="px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {gamesData.map(( game) => (
            <GameCard game={game.game} cover={game.cover} subtext={game.subtext} />
          ))}
        </div>
      </section>
    </div>
    </div>
    </>
  )
}

export default Games