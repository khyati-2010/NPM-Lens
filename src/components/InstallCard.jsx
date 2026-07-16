import { useState } from "react";
import CopyBtn from "./CopyBtn";

export default function InstallCard({ name }) {
    const [manager, setManager] = useState("npm");
    const commands = {
        npm: `npm install ${name}`,
        yarn: `yarn add ${name}`,
        pnpm: `pnpm add ${name}`,
        bun: `bun add ${name}`,
    }

    const managers = ["npm", "yarn", "pnpm", "bun"]

    return (
        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-6">Installation</h2>
            <div className="flex flex-wrap gap-3 mb-6">
                {managers.map((item) => (
                    <button
                        key={item}
                        onClick={() => setManager(item)}
                        className={`px-4 py-2 rounded-lg transition ${manager === item ? "bg-sky-600 text-white scale-105" : "bg-slate-800 hover:bg-slate-700"}`}
                    >
                        {item}
                    </button>
                ))}
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-xl px-5 py-4 flex items-center justify-between">
                <code className="font-mono text-sky-300 break-all">{commands[manager]}</code>
                <CopyBtn text={commands[manager]} />
            </div>
        </section>
    )
}