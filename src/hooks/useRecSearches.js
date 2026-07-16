import { useContext } from "react"
import { RecSearchContext } from "../context/RecSearchContext"

export default function useRecSearches() {
    return useContext(RecSearchContext)
}