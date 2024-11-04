'use client'

import { useActionState} from "react";

import { login } from "@/lib/auth";
import Link from "next/link";
import LoginStatus from "./formstatus";

export default function LoginPage(){
  const [formState, formAction] = useActionState(login, {});
  
    return (
        <> 
        <h2 className="max-w-sm mt-20 mx-auto text-center p-4 m-4">Welcome to GST Solution</h2>
<form className="min-h-screen max-w-sm mx-auto" action={formAction}>
  <div className="mb-5">
    <label htmlFor="PhoneNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" id="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email addres" required />
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" id="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter password" required />
  </div>
  {formState.error && <p className="text-xs text-red-500 mb-5">{formState.error}</p>}
  <LoginStatus />  
  <p className="my-6"> Not a user? <Link href={"/signup"} className="text-green-600 mx-1"> Create an account</Link></p>
</form>
        </>
    )
}