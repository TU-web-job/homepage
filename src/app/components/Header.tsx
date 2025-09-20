"use client"
import { useState } from "react";
import Link from "next/link";

export default function Header(){
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex justify-between items-center w-full px-8 mt-4">
                <div>
                    <Link href="/" className="text-6xl font-bold hover:border-b-2 hover:text-gray-300 text-red-400"><span className="text-green-500">O</span><span className="text-blue-500">F</span><span className="text-red-500">S</span></Link>
                </div>
                <div className="hidden md:flex">
                    <ul className="flex gap-4">
                        <li><Link href="/" className="border-b-2 border-transparent transition-colors hover:border-blue-500 active:border-gray-500 text-gray-500 hover:text-blue-500 active:text-gray-500 cursor-pointer">Top Page</Link></li>
                        <li><Link href="/about" className="border-b-2 border-transparent transition-colors hover:border-blue-500 active:border-gray-500 text-gray-500 hover:text-blue-500 active:text-gray-500 cursor-pointer">About</Link></li>
                        <li><Link href="/contact" className="border-b-2 border-transparent transition-colors hover:border-blue-500 active:border-gray-500 text-gray-500 hover:text-blue-500 active:text-gray-500 cursor-pointer">Contact</Link></li>
                        <li><Link href="/trial" className="border-b-2 border-transparent transition-colors hover:border-blue-500 active:border-gray-500 text-gray-500 hover:text-blue-500 active:text-gray-500 cursor-pointer">Trial</Link></li>
                    </ul>
                </div>
                <button className="md:hidden flex flex-col gap-1 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}>
                    <span className="w-6 h-0.5 bg-gray-300"></span>
                    <span className="w-6 h-0.5 bg-gray-300"></span>
                    <span className="w-6 h-0.5 bg-gray-300"></span>
                    <span className="w-6 h-0.5 bg-gray-300"></span>
                </button>
                {isOpen && (
                    <div className="absolute top-16 right-4 rounded-lg p-4 flex flex-col gap-4 md:hidden">
                        <Link href="/" onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-blue-400">Top Page</Link>
                        <Link href="/about" onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-blue-400">About</Link>
                        <Link href="/contact" onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-blue-400">Contact</Link>
                        <Link href="/trial" onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-blue-400">Trial</Link>
                    </div>
                )}
        </div>
    );
} 