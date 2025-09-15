import Link from "next/link";
import { FaTwitter, FaInstagram,FaTiktok, FaYoutube } from "react-icons/fa";

export default function Footer(){
    return(
        <footer className="p-4 bottom-2">
            <ul className="flex gap-4 p-4 justify-end">
                <li><Link href="/" className="flex items-center gap-2 text-black"><FaTiktok />TikTok</Link></li>
                <li><Link href="/" className="flex items-center gap-2 text-red-400"><FaInstagram />Instagram</Link></li>
                <li><Link href="/" className="flex items-center gap-2 text-blue-600"><FaTwitter />X(Twitter)</Link></li>
                <li><Link href="/" className="flex items-center gap-2 text-red-500"><FaYoutube />YouTube</Link></li>
            </ul>
        </footer>
    );
}