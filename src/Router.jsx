import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import PackageLoader from "./loader/PackageLoader";
import { Home, NotFound, PackageError, PkgDetails } from "./pages/index"

export const router = createBrowserRouter(
    [{
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'package/:pkgName',
                loader: PackageLoader,
                element: <PkgDetails />,
                errorElement: <PackageError />
            },
            {
                path: '*',
                element: <NotFound />,
            },
        ],
    }
    ]
)
