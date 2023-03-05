import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
} from "react-router-dom";
import {StyleWrapper} from "./layouts/wrappers";
import BusinessModelPage from "./pages/business-models-page/main";
import DiscoverUsPage from "./pages/discover-page/discover-us";


const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path={"/"} element={<App/>}/>
            <Route path="/business-models" element={<BusinessModelPage/>}/>
            <Route path="/discover-us" element={<DiscoverUsPage/>}/>
        </>
    )
)

createRoot(document.getElementById("root")).render(
    <StyleWrapper>
        <RouterProvider router={router} />
    </StyleWrapper>
);