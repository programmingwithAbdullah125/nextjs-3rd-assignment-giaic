import React from "react"
import Link from "next/link"
import Image from "next/image"
export default function Header(){
    return(
        <div className="min-h-screen flex flex-col items-center bg-gray-200">
        
            {/* navbar */}
            <header className="w-full bg-blue-600 text-white p-4 flex justify-between">
                <div className="flex items-center">
                <Image src="/a2c.jpg"alt="myimage" width={50} height={50} className="rounded-full"/>
                <h1 className="font-bold text-4xl pl-4">Abdullah</h1>
                </div>
                <nav className="flex gap-4 items-center">
                   <Link href ="/" className="hover:text-gray-300">Home</Link>
                  <Link href="/about" className="hover:text-gray-300">About us</Link>
                    <Link href="/contact" className="hover:text-gray-300">Contact us</Link>
                </nav>
            </header>
            <Image src="/a2c.jpg" alt="myImage" width={500} height={200} className="rounded-full border-4 border-gray-600 shadow-lg mt-10  hover:scale-110 ease-in-out transition duration-500"/>
            <br />
            <h1 className=" text-4xl font-bold ">Hello I'm</h1>
            <h1 className=" text-4xl font-bold transition duration-500 ease-in-out transform hover:scale-110  ">Abdullah</h1>
        </div>
    )
}