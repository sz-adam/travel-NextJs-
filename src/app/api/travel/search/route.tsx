import { NextResponse } from "next/server";
import travel from "../data.json";
import { IncomingMessage } from "http"; 
import { Travel } from "@/app/types/travel";

export async function GET(req: IncomingMessage) { 
    const { searchParams } = new URL(req.url!,"http://localhost");
    const query = searchParams.get("query");
    
    const filteredSearch = travel.filter((trav:Travel) => {
        return trav.city.toLowerCase().includes(query!.toLowerCase());
    });
    return NextResponse.json(filteredSearch);
}
