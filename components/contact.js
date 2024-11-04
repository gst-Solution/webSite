
"use client";

import { Button, Label, TextInput } from "flowbite-react";

export default function Contact() {
  return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="m-10 p-8">
                <h2 className="mb-2 font-bold">About</h2>
                <h3 className="mb-2 text-3xl font-bold">Gst Solution</h3>
                <p>Gst Solution motivated platform establishing the specialized legal, Tax preparation services, legal services, business-to-business (B2B)/enterprise services .
           Our mission is to provide one-click access to individuals and businesses for all their legal and professional needs. We believe in delivering the services without compromising on time and quality.</p>
            </div>
            <div className="mx-10 mt-20 p-5 md:p-10 lg:p-20 border-l-4 rounded-lg bg-slate-200">
                <h3 className="text-4xl font-semibold border-b-2 border-slate-400 text-center pb-4 text-gray-800">Get a free consultation</h3>
            <form className="flex max-w-md flex-col gap-4 mx-auto mt-8">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name" value="Your name" />
        </div>
        <TextInput id="name" type="text" name="name" placeholder="Enter your name" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" />
        </div>
        <TextInput id="email" type="email" name="email" placeholder="name@gstsolution.co.in" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="phone" value="Your phone" />
        </div>
        <TextInput id="phone" type="number" name="phone" placeholder="Enter phone number" required />
      </div>      
      <Button type="submit">Submit</Button>
    </form>
            </div>
        </div>

        
  );
}
