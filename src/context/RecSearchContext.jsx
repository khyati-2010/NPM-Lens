import { createContext, useEffect, useState } from "react";

export const RecSearchContext = createContext()

export default function RecSearchProvider({ children }) {
    const [searches, setSearches] = useState([]);
    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("recent-searches")) || []
        setSearches(stored)
    }, [])

    function addSearch(pkgName) {
        pkgName = pkgName.trim().toLowerCase()
        if (!pkgName) return;
        const updated = [pkgName, ...searches.filter((item) => item !== pkgName)].slice(0, 5)
        setSearches(updated)
        localStorage.setItem("recent-searches", JSON.stringify(updated))
    }

    function clearSearch() {
        setSearches([])
        localStorage.removeItem("recent-searches")
    }

    return (
        <RecSearchContext.Provider value={{ searches, addSearch, clearSearch }}>
            {children}
        </RecSearchContext.Provider>
    )
}