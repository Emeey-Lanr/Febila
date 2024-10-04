

import { NextRequest, NextResponse } from "next/server"
import { adminModel } from "@/app/lib/models/admin"
import { connectToDb } from "@/app/lib/db"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
type reqData = {
    username:string,
    password:string
}
export const POST = async (req:NextRequest, res:NextResponse) => {
    try {
        const { username, password }: reqData = await req.json()
        const connect = await connectToDb()
        const dataFromDB = await adminModel.findOne({ username: username })
        console.log(dataFromDB)
        if (!dataFromDB) {
            return NextResponse.json({message:"Invalid Login Attempt", error:true})
        }
         const comparePassword =  await bcrypt.compare(password, dataFromDB.password)
         console.log(comparePassword)
        if (!comparePassword) {
        return NextResponse.json({message:"Invalid Password", error:true})
        }
        const token = jwt.sign({data:username}, `${process.env.NEXT_PUBLIC_SECRET}`, {expiresIn:'7d'})
        
      return NextResponse.json({token, username,password, status:2000})
         
    } catch (error) {
        return NextResponse.json({message:"an error occured"})
    }
}