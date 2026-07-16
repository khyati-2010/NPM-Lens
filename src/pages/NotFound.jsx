import { FiCompass, FiHome } from "react-icons/fi";
import { Link } from "react-router";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center gap-3 min-h-[70vh] px-6 text-center">
            <div className="bg-sky-500/10 p-5 rounded-full mb-6">
                <FiCompass size={48} className="text-sky-500" />
            </div>
            <h1 className="text-6xl font-bold text-white">404</h1>
            <h2 className="text-3xl font-semibold mt-4">Page not Found</h2>
            <p className="text-slate-400 max-w-md mt-4">The page you trying to find either doesn't exist or has been moved.</p>
            <Link
                to='/'
                className="mt-8 inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-500 px-6 py-3 rounded-xl transition active:scale-95"
            >
                <FiHome /> Go Home
            </Link>
        </div>
    )
}