import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import Home from "./pages/Home"
import PkgDetails from "./pages/PkgDetails";
import NotFound from "./pages/NotFound"


export const router = createBrowserRouter(
        [{
            path: '/',
            element: <Layout/>,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: 'package/:pkgName',
                    element: <PkgDetails />,
                },
                {
                    path:'*',
                    element: <NotFound />,
                },
            ],
        }
        ]
    )
