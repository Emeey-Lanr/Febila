

import { NextRequest, NextResponse } from "next/server"
type reqData = {
    username:string,
    password:string
}
export const POST = async (req:NextRequest, res:NextResponse) => {
    try {
        const { username, password }: reqData = await req.json()
        
        return NextResponse.json({username,password, status:2000})
         
    } catch (error) {
        
    }
}