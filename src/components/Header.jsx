import { FiPackage } from "react-icons/fi"
import { Link } from "react-router"

export default function Header() {
    return (
        <header className="border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link
                    to="/"
                    className="flex items-center gap-3 text-xl font-bold"
                >
                    <FiPackage className="text-sky-400" />
                    <div>NPM-Lens</div>
                </Link>
            </div>
        </header>
    )
}