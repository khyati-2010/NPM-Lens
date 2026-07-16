import { FiAlertTriangle, FiArrowLeft } from "react-icons/fi"
import { Link } from "react-router"

export default function PackageError() {
    return (
        <div className="flex flex-col items-center justify-center py-24 text-center">
            <FiAlertTriangle size={60} className="text-red-500 mb-6" />
            <h1 className="text-4xl font-bold mb-4">Package Not Found</h1>
            <p className="text-slate-400 max-w-md">Please check the spelling of the package you types ad try again!</p>
            <Link
                to="/"
                className="mt-10 inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-500 px-6 py-3 rounded-xl transition"
            >
                <FiArrowLeft /> Back Home
            </Link>
        </div>
    )
}