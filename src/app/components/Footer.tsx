import Link from "next/link";
import { FaTwitter, FaInstagram,FaTiktok, FaYoutube } from "react-icons/fa";

export default function Footer(){
    return(
        <footer>
            <ul className="flex gap-4 p-4 items-end justify-end">
                <li><Link href="/" className="text-red-400"><FaInstagram />Instagram</Link></li>
                <li><Link href="/" className="text-blue-600"><FaTwitter />X(Twitter)</Link></li>
                <li><Link href="/" className="text-black"><FaTiktok />TikTok</Link></li>
                <li><Link href="/" className="text-red-500"><FaYoutube />YouTube</Link></li>
            </ul>
        </footer>
    );
}