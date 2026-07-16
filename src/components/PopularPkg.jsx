import { Link } from "react-router"

const packages = [
    "react",
    "react-router",
    "vite",
    "express",
    "mongodb",
    "mongoose",
    "tailwindcss",
    "typescript",
    "next",
    "axios",
]

export default function PopularPkg() {
    return (
        <section className="mt-16">
            <h2 className="text-2xl font-semibold mb-6">Popular Packages</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {packages.map((pkg) => (
                    <Link
                        className="bg-slate-900 border border-slate-800 rounded-xl px-5 py-4 hover:border-sky-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-900/20 transition"
                    >
                        <p className="font-medium capitalize">{pkg}</p>
                    </Link>
                ))}
            </div>
        </section>
    )
}