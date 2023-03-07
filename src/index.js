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
import DiscoverUsPage from "./pages/discover-page/main";
import TrackRecords from "./pages/track-records-page/main";
import Contact from "./pages/contact/main";
import StartUp from "./pages/startup-page/main";


const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path={"/"} element={<App/>}/>
            <Route path="/business-models" element={<BusinessModelPage/>}/>
            <Route path="/discover-us" element={<DiscoverUsPage/>}/>
            <Route path="/track-records" element={<TrackRecords/>}/>
            <Route path="/contact-us" element={<Contact/>}/>
            <Route path="/startup" element={<StartUp/>}/>
        </>
    )
)

createRoot(document.getElementById("root")).render(
    <StyleWrapper>
        <RouterProvider router={router} />
    </StyleWrapper>
);