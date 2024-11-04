
"use client";

import { Carousel } from "flowbite-react";
import { Button } from "flowbite-react";
import Image from "next/image";
import { useState } from "react";

export default function HeroSection() {

  const [state, setState] = useState("")
    
  return (
    <div className="h-96">
    <Carousel onSlideChange={(index) => setState(index)}>
      <div className="h-full items-center justify-center bg-gradient-to-br from-green-400 to-green-700 text-white">
        <div className="grid sm:grid-rows-2 md:grid-cols-2">
            <div className="md:order-last"><Image src="https://res.cloudinary.com/dafshcwj1/image/upload/v1730387776/financial-5050415-removebg-preview_mrqwjf.png" className="object-scale-down" alt="1" width={500} height={500} /></div>
            <div className="flex justify-center items-center"><div><h2 data-id={state} className="text-5xl font-bold m-4 data-[id=0]:animate-fadeinleft">GST e-filing</h2><Button data-id={state} className="mx-auto px-6 mb-8 text-green-600 font-semibold data-[id=0]:animate-fadeinup" color="light">Know more</Button></div></div>
        </div>
      </div>
      <div className="h-full items-center justify-center bg-gradient-to-br from-green-400 to-green-700 text-white">
        <div className="grid sm:grid-rows-2 md:grid-cols-2">
            <div className="md:order-last"><Image src="https://res.cloudinary.com/dafshcwj1/image/upload/v1730387742/audit-6904474_1920-removebg-preview_lpsgiq.png" className="object-scale-down" alt="2" width={500} height={500} /></div>
            <div className="flex justify-center items-center"><div><h2 data-id={state} className="text-5xl font-bold m-4 data-[id=1]:animate-fadeinleft">Accounting</h2><Button data-id={state} className="mx-auto px-6 mb-8 text-green-600 font-semibold data-[id=1]:animate-fadeinup" color="light">Know more</Button></div></div>
        </div>
      </div>
      <div className="h-full items-center justify-center bg-gradient-to-br from-green-400 to-green-700 text-white">
        <div className="grid sm:grid-rows-2 md:grid-cols-2">
            <div className="md:order-last object-scale-down"><Image src="https://res.cloudinary.com/dafshcwj1/image/upload/v1730387804/tax-7630744_1280-removebg-preview_ssuh3i.png" className="object-scale-down"  alt="3" width={500} height={500} /></div>
            <div className="flex justify-center items-center"><div><h2 data-id={state} className="text-5xl font-bold m-4 data-[id=2]:animate-fadeinleft">Tax audit</h2><Button data-id={state} className="mx-auto px-6 mb-8 text-green-600 font-semibold data-[id=2]:animate-fadeinup" color="light">Know more</Button></div></div>
        </div>
      </div>
    </Carousel>
  </div>
  );
}