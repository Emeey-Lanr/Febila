import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import { get } from "http";
import { adminModel } from "@/app/lib/models/admin";
export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    const authorization:string | null = req.headers.get("authorization")

    const token = authorization?.split(" ")[1]
    console.log(token, token?.split("-"), 100)
    // string at index 1 is jwt token why the one the at 0 is username
    const getTokenDetails: any = jwt.verify(`${token?.split("-")[1]}`, `${process.env.NEXT_PUBLIC_SECRET}`);
 console.log(getTokenDetails.data)
if(getTokenDetails.data !== token?.split("-")[0]){
  return NextResponse.error()
}
const adminVerification = await adminModel.findOne({username:`${token?.split("-")[0]}`})
    if (!adminVerification) {
  return NextResponse.error()
    }
    console.log(adminVerification)
  } catch (error: any) {

  }
};
