import PopularPkg from "../components/PopularPkg"
import RecSearches from "../components/RecSearches"
import SearchBar from "../components/SearchBar"

export default function Home() {
    return (
        <section className="flex flex-col items-center justify-center py-28">
            <h1 className="text-6xl font-bold">NPM-Lens</h1>
            <p className="mt-5 text-slate-500 text-lg">Search any NPM package easily.</p>
            <div className="mt-12 w-full max-w-2xl">
                <SearchBar />
                <RecSearches />
                <PopularPkg />
            </div>
        </section>
    )
}