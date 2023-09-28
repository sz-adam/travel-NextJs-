'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function TravelCard() {
    const apiUrl = process.env.API_BASE_URL
    const [travel, setTravel] = useState(null);
    console.log(travel)
    useEffect(() => {
        async function fetchData() {
            if (apiUrl) {
                try {
                    const res = await axios.get(apiUrl);
                    setTravel(res.data);
                } catch (error) {
                    console.error('Error fetching travel data:', error);
                }
            }
        }
        fetchData();
    }, [apiUrl]);

    return (
        <div>
        
        </div>
    );
}
