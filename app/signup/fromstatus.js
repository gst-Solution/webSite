'use client'

import {useFormStatus} from 'react-dom';
import { Button } from "flowbite-react";
import { AiOutlineLoading } from "react-icons/ai";

export default function SignupStatus(){
    const status = useFormStatus();

    if (status.pending){
        return (
            <Button size="md" className="w-full" isProcessing processingSpinner={<AiOutlineLoading className="h-6 w-6 animate-spin" />}>
            Signing up...
          </Button>
        )    
    }

    return (
        <Button type="submit" className="w-full">Sign up</Button>
    )
}