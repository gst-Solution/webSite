import { logout } from "@/lib/auth";
import Link from "next/link";

export default async function LogoutPage(){
    await logout();
    return (
        <div>
            <h3 className="mt-20 text-center text-xl font-bold">Logout succesfully! </h3>
            <div className="text-center mt-4">
            <Link href={"/login"} className="text-green-500">Login again</Link>
            </div>
        </div>
    )
}