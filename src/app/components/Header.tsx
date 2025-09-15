import Link from "next/link";

export default function Header(){
    return (
        <div className="flex justify-between items-center w-full px-8">
                <div>
                    <Link href="/" className="text-6xl font-bold hover:border-b-2 hover:text-gray-300">FBS</Link>
                </div>
                <div>
                    <ul className="flex gap-4">
                        <li><Link href="/" className="border-b-2 border-transparent transition-colors hover:border-blue-500 active:border-gray-500 text-gray-500 hover:text-blue-500 active:text-gray-500 cursor-pointer">Top Page</Link></li>
                        <li><Link href="/about" className="border-b-2 border-transparent transition-colors hover:border-blue-500 active:border-gray-500 text-gray-500 hover:text-blue-500 active:text-gray-500 cursor-pointer">About</Link></li>
                        <li><Link href="/contact" className="border-b-2 border-transparent transition-colors hover:border-blue-500 active:border-gray-500 text-gray-500 hover:text-blue-500 active:text-gray-500 cursor-pointer">Contact</Link></li>
                    </ul>
                </div>
        </div>
    );
} 