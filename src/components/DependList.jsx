export default function DependList({ dependencies }) {
    const entries = Object.entries(dependencies)
    if (entries.length === 0) return null;

    return (
        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-6">Depedencies</h2>
            <div className="space-y-3">
                {entries.map(([name, version]) => (
                    <div key={name} className="flex justify-between bg-slate-950 rounded-lg px-4 py-3">
                        <div>{name}</div>
                        <div className="text-sky-400">{version}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}