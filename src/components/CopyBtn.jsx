import { FiCheck, FiCopy } from "react-icons/fi";
import useCopyToClipboard from "../hooks/useCopyToClipboard";

export default function CopyBtn({ text }) {
    const { copy, copied } = useCopyToClipboard()
    return (
        <button
            onClick={() => copy(text)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${copied ? "bg-green-600" : "bg-slate-800 hover:bg-slate-700"}`}
        >
            {copied ? <FiCheck /> : <FiCopy />}
            {copied ? "Copied!" : "Copy"}
        </button>
    )
}