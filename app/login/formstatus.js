'use client'

import { useFormStatus } from "react-dom";
import { Button } from "flowbite-react";
import { AiOutlineLoading } from "react-icons/ai";

export default function LoginStatus(){
    const status = useFormStatus();
    if (status.pending){
        return (
            <Button size="md" className="w-full" isProcessing processingSpinner={<AiOutlineLoading className="h-6 w-6 animate-spin" />}>
      Logging in...
    </Button>
        )
    }
    return (
        <Button type="submit" className="w-full">Login</Button>
    )
}