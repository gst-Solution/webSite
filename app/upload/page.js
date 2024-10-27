import { uploadDocuments } from "@/lib/actions";
import { verifyAuth } from "@/lib/lucia-auth"
import { redirect } from "next/navigation";

export default async function UploadPage(){
    const result = await verifyAuth();
    let id;
    if (!result.user){
        return redirect("/login")
    }
    if (result.user){
         id = result.user.id;       

    }
    return (
        <form action={uploadDocuments.bind(null, id)}>
            <label className="block w-full" htmlFor="Image">Upload Image</label>
            <input className="block w-full file:p-1 file:bg-gradient-to-r from-cyan-500 to-blue-500 file:text-white p-1 rounded-md mt-2 mb-4 border border-slate-900" type="file" accept="image/png, image/jpeg" id="image" name="image" required /> 
            <button className="w-24 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-10 py-2.5 me-2 my-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Upload</button>
        </form>
    )
}