import { connectToDb } from "@/app/lib/db";
import { realEstateModel } from "@/app/lib/models/realestate";
import {v2 as cloudinary} from "cloudinary"
import { NextRequest, NextResponse } from "next/server";
import { realEstateData } from "@/types/realEstateData";

cloudinary.config({
  cloud_name: `${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}`,
  api_key: `${process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY}`,
  api_secret: `${process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET}`,
});
export const POST = async (req:NextRequest, res:NextResponse) => {
  try {
      
    let data: realEstateData = await req.json()
    console.log(data)
     const connect  = await connectToDb()
      const ifTitleExist = await realEstateModel.findOne({ title: data.title })
      if (ifTitleExist) {
        return NextResponse.json({message:"Title already exist"})
      }
      const changeImgToUrl = await cloudinary.uploader.upload(data.img, { public_id: 'febila' })
      data.img = `${changeImgToUrl}`
      const add = new realEstateModel(data)
      const save = await add.save()
    return NextResponse.json({ message: "added succesfully", realEstateData : save })
    
    } catch (error) {
        return NextResponse.json({message:"an error occured, try again"})
    }
}