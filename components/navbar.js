import { logout } from "@/lib/auth";
import { getUserById } from "@/lib/db-quary";
import { verifyAuth } from "@/lib/lucia-auth";
import Link from "next/link";

export default async function Navbar(){

    let greetingText
    const result = await verifyAuth();
    if (result.user){
        const id = result.user.id;
       const authUser = await getUserById(id);
         greetingText = "Welcome " + authUser[0].f_name;

    }

    return (
        <div className="flex justify-between">
            <h1 className="text-3xl font-extrabold">GST Solution</h1>
            {result.user ? <div className="flex m-4">
                <Link className="mx-4" href={"/profile"}>{greetingText}</Link>
                <form action={logout} className="mx-4"><button>Logout</button></form>
            </div> : <div className="m-4">
                <Link className="mx-4" href={"/signup"}>Sign up</Link>
                <Link className="mx-4" href={"/login"}>Login</Link>
            </div>}
            
            </div>
        
    )
}