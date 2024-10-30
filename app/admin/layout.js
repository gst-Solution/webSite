import { getUserById } from "@/lib/db-quary";
import { verifyAuth } from "@/lib/lucia-auth";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function RootLayout({ children }) {
    
const adminKey = process.env.ADMIN_KEY

const result = await verifyAuth();

if(!result.user){
    return redirect("/login")
}
const userId = result.user.id;
const authUser = await getUserById(userId);
const key = authUser[0].email

if(key !== adminKey){
    notFound()
}

    return (
        <div>
          <div className="m-4 min-h-screen">
            <Link className="m-4 p-2 border rounded-md border-gray-400" href={"/admin"}>Projects</Link>
            <Link className="m-4 p-2 border rounded-md border-gray-400" href={"/admin/users"}>Users</Link>
          </div>
          {children}
        </div>
    );
  }