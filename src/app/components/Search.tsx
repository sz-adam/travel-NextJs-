'use client'
import { Dispatch, SetStateAction } from 'react';
import { useState } from 'react'
import { Travel } from '../types/travel'

interface TravelCardProps {
    setTravel: Dispatch<SetStateAction<Travel[]>>;
}

const Search: React.FC<TravelCardProps> = ({ setTravel }) => {
    const apiUrl = process.env.API_BASE_URL
    const [text, setText] = useState<string>('')

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        try {
            const res = await fetch(`${apiUrl}/search?query=${text}`);
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await res.json();
            setTravel(data)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        <div >
            <form onSubmit={handleSubmit} className='p-4 flex justify-center items-center'>
                <input type="text"
                    placeholder="Search"
                    className="border-2 border-cyan-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"                    value={text}
                    onChange={e => setText(e.target.value)} />
                <button type='submit' className="btn ">Search</button>
            </form>
        </div>
    )
}

export default Search