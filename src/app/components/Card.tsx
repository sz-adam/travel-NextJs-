import React from 'react'
import { Travel } from '../types/travel'
import Link from 'next/link'
import FullRating from './FullRating'

type Props = {
  travel: Travel[]
}

const Card = ({ travel }: Props) => {
  return (

    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
      {travel?.map((items: Travel) => (
        <div key={items.id} className="bg-white rounded-lg overflow-hidden w-auto border shadow-lg shadow-slate-600  hover:scale-105 duration-300">
          <div>
            <img src={items.images[0]} alt="car!" className="w-full h-64 object-cover" />
          </div>
          <div className="p-4">
            <h2 className="text-2xl font-semibold">{items.location_name} ({items.city})</h2>
            <p className="text-gray-600 mt-2">{items.description}</p>
            <div className="mt-4 flex justify-between items-center text-center">
              <Link href={`/travel/${items.location_name}`} className="btn">View</Link>
              <FullRating reviews={items.reviews} />
              <div className="text-sm text-gray-500 border px-3 py-1 rounded-full" >{items.category}</div>
            </div>
          </div>
        </div>
      ))}
    </div>

  )
}

export default Card

