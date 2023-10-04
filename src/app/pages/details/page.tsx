'use client'
import React, { useEffect, useState } from 'react';
import DetailsCarousel from '../../components/DetailsCarousel';
import Link from 'next/link';
import { Review, Travel } from '@/app/types/travel';

type Props = {
    location_name: string;
};

const Details = (props: Props) => {
    const { location_name } = props;
    const [data, setData] = useState<Travel[] | null>(null);
    const apiUrl = process.env.API_BASE_URL
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${apiUrl}/location_name?query=${location_name}`);
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [location_name]);

    return (
        <div >
            {data && data.map((item: Travel) => (
                <div key={item.id} className='flex max-lg:flex-col justify-center items-center '>
                    <div className=' w-[50%] max-lg:w-screen flex justify-center items-center  '>
                        <DetailsCarousel images={item.images} />
                    </div>
                    <div className='flex flex-col justify-center items-center m-2 text-center'>
                        <h1 className="font-bold text-6xl mb-4 ">{item.location_name}</h1>
                        <p className='text-3xl '>{item.city}</p>
                        <p className='py-10'>{item.description}</p>
                        <span className="border py-2 px-3 rounded-3xl bg-slate-200">{item.category}</span>
                        <div className='flex flex-col '>
                            {item.reviews.map((review: Review, index: number) => (
                                <div key={index} className='block m-6 p-6 bg-white border border-gray-200 rounded-2xl shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
                                    <p className="text-2xl font-bold text-center">{review.name}</p>
                                    <p className='py-4'>{review.description}</p>
                                    <p className="text-yellow-500">Rating: {review.rating}</p>
                                </div>
                            ))}
                            <Link href='/' className='mx-6 btn'>Home </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Details;
