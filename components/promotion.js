"use client";

import { Card } from "flowbite-react";
import Image from "next/image";

export default function Promotion(){
    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="m-10 p-8">
                <h2 className="mb-2 font-bold">Why choose</h2>
                <h3 className="mb-2 text-3xl font-bold">Gst Solution</h3>
                <p>Our primary focus is towards assisting the clients with navigating the legal and the regulatory requirements that are related to business. With this purpose, our primary goal is to become the “partner of choice” for the assistance related to company  business management in India</p>
                <Image src={"https://res.cloudinary.com/dafshcwj1/image/upload/v1730654508/work-8744593_1920_cplwd5.jpg"} alt="Gst Solution image" width={700} height={700} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-10 py-10">
            <Card className="max-w-sm border-t-8 border-l-8 rounded-b-2xl rounded-r-2xl border-pink-500">
                <Image src={"https://res.cloudinary.com/dafshcwj1/image/upload/v1730657951/reduce-cost_1_l4k4h8.gif"} alt="Reduce cost" width={50} height={50} />
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      No Hidden Fees
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      Everything is explained to you with no hidden charges or conditions.
      </p>
    </Card>
    <Card className="max-w-sm border-t-8 border-l-8 rounded-b-2xl rounded-r-2xl border-green-500">
        <Image src={"https://res.cloudinary.com/dafshcwj1/image/upload/v1730657707/certificate_bfnjuw.gif"} alt="Expert CA" width={50} height={50} />
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Expert CA/CS Assistance
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      Prompt response from our in-house expert professionals.
      </p>
    </Card>
    <Card className="max-w-sm border-t-8 border-l-8 rounded-b-2xl rounded-r-2xl border-orange-500">
        <Image src={"https://res.cloudinary.com/dafshcwj1/image/upload/v1730657695/rating_yo0m7f.gif"} alt="Satisfacton" width={50} height={50} />
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Guaranteed Satisfaction
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      We make sure that you stay 100% satisfied with our offered services.
      </p>
    </Card>
    <Card className="max-w-sm border-t-8 border-l-8 rounded-b-2xl rounded-r-2xl border-teal-500">
        <Image src={"https://res.cloudinary.com/dafshcwj1/image/upload/v1730657683/safe_un7yxl.gif"} alt="Confidential" width={50} height={50} />
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        
Confidential & Safe
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        All your private information is safe with us and no shared with anyone.
      </p>
    </Card>
    <Card className="max-w-sm border-t-8 border-l-8 rounded-b-2xl rounded-r-2xl border-violet-500">
        <Image src={"https://res.cloudinary.com/dafshcwj1/image/upload/v1730657672/work_kpkmkv.gif"} alt="Ontime" width={50} height={50} />
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Ontime Services
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      We try to provide our customer ontime services everytime.
      </p>
    </Card>
    <Card className="max-w-sm border-t-8 border-l-8 rounded-b-2xl rounded-r-2xl border-yellow-500">
        <Image src={"https://res.cloudinary.com/dafshcwj1/image/upload/v1730657664/money_u3dblb.gif"} alt="Flexible" width={50} height={50} />
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Flexible Payments
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      We provide our customers options to make payments flexibly.
      </p>
    </Card>
            </div>
        </div>
    )
}