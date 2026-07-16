import { useState } from "react";

export default function useCopyToClipboard() {
    const [copied, setCopied] = useState(false)
    async function copy(text) {
        try {
            await navigator.clipboard.writeText(text)
            setCopied(true)
            setTimeout(() => {
                setCopied(false)
            }, 2000)
        } catch (error) { console.error(error) };
    }
    return { copied, copy, }
}