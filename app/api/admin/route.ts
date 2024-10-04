import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"

import { connectToDb } from "@/app/lib/db";
import { adminModel } from "@/app/lib/models/admin";
import { realEstateModel } from "@/app/lib/models/realestate";
export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    const connect = await connectToDb();
    const authorization:string | null = req.headers.get("authorization")
    
    const token = authorization?.split(" ")[1]
    console.log(token, token?.split("-"), 100)
    // string at index 1 is jwt token why the one the at 0 is username
    const getTokenDetails: any = jwt.verify(`${token?.split("-")[1]}`, `${process.env.NEXT_PUBLIC_SECRET}`);

if(getTokenDetails.data !== token?.split("-")[0]){
  return NextResponse.json({ message: "an error occured", error: true });
}

const adminVerification = await adminModel.findOne({username:`${token?.split("-")[0]}`})
    if (!adminVerification) {
  return NextResponse.json({message:"an error occured", error:true })
    }
    console.log(adminVerification)

    const realEstateDataAdded = await realEstateModel.find({ username: adminVerification.username })
    console.log(realEstateDataAdded)
    
    return NextResponse.json({message:"verification succesfull", username:adminVerification.username, realEstateData: realEstateDataAdded, error:false})
  } catch (error: any) {
    console.log(error)
     return NextResponse.json({message:'an error occured'})
  }
};
