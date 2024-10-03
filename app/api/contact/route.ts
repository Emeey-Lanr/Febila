import { contactModel } from "@/app/lib/models/contact";
import { connectToDb } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";
type contactData = {
  name: string
  email: string,
  message:string
};
export const POST = async (req: NextRequest, res: NextResponse) => {
    try {
        const connect = await connectToDb()
        const { name, email, message }: contactData =  await req.json()
        if(name !== "" && email !== "" && message !== ""){
                 const register = new contactModel({ name, email, message });
                 const save = await  register.save();
                 return NextResponse.json({
                   message: "Message sent succesfully",
                 });
        }
   
    } catch (error:any) {
        console.log(error)
        return NextResponse.json({errorMessage:error.message, message:"an error occured, pls try again"})
    }
}