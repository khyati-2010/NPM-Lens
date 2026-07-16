import { useState } from "react"
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router";
import useRecSearches from "../hooks/useRecSearches";

export default function SearchBar() {
    const [qry, setQry] = useState("");
    const navigate = useNavigate();
    const { addSearch } = useRecSearches()

    function handleSubmit(e) {
        e.preventDefault();
        const pkgName = qry.trim().toLowerCase().replace(/\s+/g, "-");
        addSearch(pkgName)
        navigate(`/package/${pkgName}`)
    }
    return (
        <form
            className="flex gap-3"
            onSubmit={handleSubmit}
        >
            <div className="relative flex-1">
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                    className="w-full rounded-xl bg-slate-900 border border-slate-800 pl-12 pr-4 py-4 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/30"
                    value={qry}
                    onChange={(e) => setQry(e.target.value)}
                    placeholder="Search NPM package"
                />
            </div>
            <button className="bg-sky-600 hover:bg-sky-500 active:scale-95 px-7 rounded-xl font-medium transition">
                Search
            </button>
        </form>
    )
}