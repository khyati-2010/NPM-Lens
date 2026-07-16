import { FiGithub, FiLinkedin } from "react-icons/fi";

export default function Footer(){
    return(
        <footer className="border-t border-slate-800 mt-20">
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col items-center justify-between gap-3 text-sm text-slate-400">
                <p className="hover:text-sky-400 transition hover:scale-105">Developed by <b>~ Khyati Aggarwal ~</b></p>
                <a 
                    href="https://github.com/khyati-2010"
                    target="_blank"
                    rel="noopenner noreferrer"
                    className="flex items-center gap-2 hover:text-sky-400 transition"
                >
                    <FiGithub/> GitHub
                </a>
                <a 
                    href="https://www.linkedin.com/in/khyati-aggarwal2007/"
                    target="_blank"
                    rel="noopenner noreferrer"
                    className="flex items-center gap-2 hover:text-sky-400 transition"
                >
                    <FiLinkedin/> LinkedIn
                </a>
            </div>
        </footer>
    )
}