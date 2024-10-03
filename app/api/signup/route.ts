import { NextRequest, NextResponse } from "next/server";

import { adminModel } from "@/app/lib/models/admin";
import { connectToDb } from "@/app/lib/db";
import jwt from "jsonwebtoken"
 import bcrypt from "bcryptjs"

const registrationkey = process.env.NEXT_PUBLIC_REGISTRATION_KEY;
type reqData = {
  username: string;
    password: string;
    key: string;
};

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const { username, password, key }: reqData = await req.json();
    const connect = await connectToDb()
    console.log(`${key}` == `${registrationkey}`, key, registrationkey, typeof (key), typeof (registrationkey), key == 'febilaxxx', 2 === 2)
    
    if (key != `${registrationkey}`) {
      return NextResponse.json({ message: "Invalid Acess", error: true })
    }
    const encryptedpassword = await bcrypt.hash(password, 10)
    const register = new adminModel({username, password: encryptedpassword})
    
     const save = await register.save()
    const token = jwt.sign({ data: username }, `${process.env.NEXT_PUBLIC_SECRET}`, {expiresIn:'7d'})
      
    return NextResponse.json({token, username, error:false });
  } catch (error:any) {
    console.log(error.message)
      return NextResponse.json({message:"An error occured"})
  }
};
