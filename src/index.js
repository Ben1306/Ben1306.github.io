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


const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path={"/"} element={<App/>}/>
        </>
    )
)

createRoot(document.getElementById("root")).render(
    <StyleWrapper>
        <RouterProvider router={router} />
    </StyleWrapper>
);