'use server'

import { redirect } from "next/navigation"
import { uploadImage } from "./clouninaray"
import { storeProject } from "./db-quary"

export async function uploadDocuments(id, formData){

    const image = formData.get('image')
    let imageUrl
try{
    imageUrl = await uploadImage(image)
}catch (error){
    throw new Error('Image upload failed. Try again')
}
await storeProject(id, imageUrl)
redirect("/")
}