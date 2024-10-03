import { connectToDb } from "@/app/lib/db";
import { emailModel } from "@/app/lib/models/emailList";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req:NextRequest,res:NextResponse) => {
    try {
        const connect = await connectToDb()
        const data:{email:string} = await req.json()
        const add = new emailModel(data)
        const save = await add.save()
        return NextResponse.json({ message: "thanks for subscribing" })
        
    } catch (error) {
        return NextResponse.json({message:"An error occured, please try again"})
    }
}