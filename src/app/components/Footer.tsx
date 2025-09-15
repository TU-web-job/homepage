import Link from "next/link";
import { FaTwitter, FaInstagram,FaTiktok, FaYoutube } from "react-icons/fa";

export default function Footer(){
    return(
        <footer>
            <ul className="flex">
                <li><Link href="/" className="text-white"><FaInstagram />Instagram</Link></li>
                <li><Link href="/" className="text-white"><FaTwitter />X(Twitter)</Link></li>
                <li><Link href="/" className="text-white"><FaTiktok />TikTok</Link></li>
                <li><Link href="/" className="text-white"><FaYoutube />YouTube</Link></li>
            </ul>
        </footer>
    );
}