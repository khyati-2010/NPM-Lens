import { Outlet, useNavigation } from "react-router"
import Header from "./components/Header"
import Footer from "./components/Footer"

export default function Layout() {
    const navigation = useNavigation
    return (
        <div className="min-h-screen bg-slate-950 text-white">
            <Header />
            <div className="max-w-7xl mx-auto px-6 py-8">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}