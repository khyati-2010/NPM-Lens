import { Link } from "react-router";
import useRecSearches from "../hooks/useRecSearches";

export default function RecSearches() {
    const { searches, clearSearch } = useRecSearches()
    if (searches.length === 0) return null
    return (
        <section className="mt-14">
            <div className="flex items-center justify-between mb-5">
                <h2 className="font-semibold text-2xl">Recent Searches</h2>
                <button
                    onClick={clearSearch}
                    className="text-sm text-red-400 hover:text-red-300"
                >
                    Clear
                </button>
            </div>
            <div className="flex flex-wrap gap-3">
                {searches.map((pkg) => (
                    <Link
                        key={pkg}
                        to={`/package/${pkg}`}
                        className="px-4 py-2 rounded-full bg-slate-800 hover:bg-sky-400 transition"
                    >
                        {pkg}
                    </Link>
                ))}
            </div>
        </section>
    )
}