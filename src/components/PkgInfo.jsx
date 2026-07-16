import { FiExternalLink, FiGithub } from "react-icons/fi"

export default function PkgInfo({
    version,
    weeklyDownloads,
    homepage,
    repository,
    nodeV,
    npmV,
}) {
    const repoLink = repository ? repository.replace("git+", "").replace(".git", "") : null

    return (
        <section className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-6">Package Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
                <InfoRow
                    label="Version"
                    value={version}
                />
                <InfoRow
                    label="Weekly Downloads"
                    value={weeklyDownloads?.toLocaleString()}
                />
                <InfoRow
                    label="Node Version"
                    value={nodeV ?? "Not Available"}
                />
                <InfoRow
                    label="NPM Version"
                    value={npmV ?? "Not Available"}
                />
                <InfoLink
                    label="Homepage"
                    href={homepage}
                    icon={<FiExternalLink />}
                />
                <InfoLink
                    label="Repository"
                    href={repoLink}
                    icon={<FiGithub />}
                />
            </div>
        </section>
    )
}

function InfoRow({ label, value }) {
    return (
        <div>
            <p className="text-slate-400 text-sm">{label}</p>
            <p className="font-medium mt-1 break-all">{value}</p>
        </div>
    )
}

function InfoLink({ label, href, icon }) {
    return (
        <div>
            <p className="text-slate-400 text-sm">{label}</p>
            {href ? (
                <a href={href} target="_blank" rel="noreferrer" className="mt-1 inline-flex items-center gap-2 text-sky-400 hover:text-sky-300">
                    {icon} Visit
                </a>
            ) : (
                <p className="mt-1">Not Available</p>
            )}
        </div>
    )
}