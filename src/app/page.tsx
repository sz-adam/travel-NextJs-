'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Search from "./components/Search"
import Card from "./components/Card"
import { Travel } from './types/travel';
import  Category from "./components/Category"

export default function TravelCard() {
    const apiUrl = process.env.API_BASE_URL
    const [travel, setTravel] = useState<Travel[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
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


    const categorys =["all",... Array.from(new Set(travel.map((item) => item.category)))];
    const filteredCategory = selectedCategory === "all" ? travel : travel.filter(trav => trav.category === selectedCategory)

    const handleCategory = (category: any) => {       
        setSelectedCategory(category);
      
    };

    return (
        <div className='m-5'>
            <Search setTravel={setTravel} />
            <Category categorys={categorys} selectedCategory={selectedCategory} handleCategory={handleCategory}/>
            <Card travel={filteredCategory} />
        </div>
    );
}
