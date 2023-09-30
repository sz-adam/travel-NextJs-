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
                    placeholder="Type here"
                    className="input input-bordered input-success w-full max-w-xs mx-3"
                    value={text}
                    onChange={e => setText(e.target.value)} />
                <button type='submit'>Search</button>
            </form>
        </div>
    )
}

export default Search