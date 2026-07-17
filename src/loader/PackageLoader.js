async function packageLoader({ params }) {
  const [latestRes, downloadsRes, rootRes] = await Promise.all([
    fetch(`https://registry.npmjs.org/${params.pkgName}/latest`),
    fetch(`https://api.npmjs.org/downloads/point/last-week/${params.pkgName}`),
    fetch(`https://registry.npmjs.org/${params.pkgName}`),
  ]);

  if (!latestRes.ok) {
    throw new Response(null, {
      status: latestRes.status,
      statusText: latestRes.statusText,
    })
  } else if (!downloadsRes.ok) {
    throw new Response(null, {
      status: downloadsRes.status,
      statusText: downloadsRes.statusText,
    })
  } else if (!rootRes.ok) {
    throw new Response(null, {
      status: rootRes.status,
      statusText: rootRes.statusText,
    })
  }

  const latestData = await latestRes.json();
  const downloadData = await downloadsRes.json();
  const rootData = await rootRes.json();

  return {
    name: latestData.name,
    description: latestData.description,
    version: latestData.version,
    keywords: latestData.keywords ?? [],
    homepage: latestData.homepage ?? null,
    npmV: latestData._npmVersion ?? null,
    nodeV: latestData._nodeVersion ?? null,
    dependencies: latestData.dependencies ?? {},
    weeklyDownloads: downloadData.downloads,
    repository: rootData.repository?.url ?? null,
  };
}

export default packageLoader;
