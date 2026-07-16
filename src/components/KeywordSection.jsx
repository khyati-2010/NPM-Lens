export default function KeywordSection({ keywords }) {
    if (keywords.length === 0) return null;
    return (
        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-xl semibold mb-6">Keywords</h2>
            <div className="flex flex-wrap gap-3">
                {keywords.map((keyword) => (<KeywordsChip key={keyword} keyword={keyword} />))}
            </div>
        </section>
    )
}

function KeywordsChip({ keyword }) {
    return (
        <div className="px-3 py-1.5 rounded-full bg-sky-500/15 text-sky-300 border border-sky-500/30 text-sm">
            {keyword}
        </div>
    )
}