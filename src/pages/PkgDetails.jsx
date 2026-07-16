import { useState } from "react";
import { FiArrowLeft, FiPackage } from "react-icons/fi";
import { Link, useLoaderData } from "react-router"
import PkgInfo from "../components/PkgInfo";
import InstallCard from "../components/InstallCard";
import KeywordSection from "../components/KeywordSection";
import DependList from "../components/DependList";

export default function PkgDetails() {
    const data = useLoaderData();

    return (
        <div className="space-y-8">
            <Link
                to="/"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-all hover:-translate-x-1"
            >
                <FiArrowLeft />
                Back
            </Link>
            <section>
                <div className="flex items-center gap-4">
                    <div className="bg-sky-600/20 p-3 rounded-xl">
                        <FiPackage
                            size={28}
                            className="text-sky-400"
                        />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold">{data.name}</h1>
                        <p className="text-slate-400 mt-2">{data.description ?? "No description available."}</p>
                    </div>
                </div>
            </section>
            <PkgInfo
                version={data.version}
                weeklyDownloads={data.weeklyDownloads}
                homepage={data.homepage}
                repository={data.repository}
                nodeV={data.nodeV}
                npmV={data.npmV}
            />
            <InstallCard name={data.name} />
            <KeywordSection keywords={data.keywords} />
            <DependList dependencies={data.dependencies} />
        </div>
    );
}