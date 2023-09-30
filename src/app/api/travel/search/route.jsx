import { NextResponse } from "next/server";
import travel from "../data.json";

export async function GET(req) { 
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");
    
    const filteredSearch = travel.filter((trav) => {
        return trav.city.toLowerCase().includes(query.toLowerCase());
    });
    return NextResponse.json(filteredSearch);
}
