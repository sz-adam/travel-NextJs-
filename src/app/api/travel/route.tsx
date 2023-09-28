import { Travel } from "@/app/types/travel"
import travel from "./data.json"
import { NextResponse } from "next/server"

export async function GET(req:Travel){
   return NextResponse.json(travel)
}