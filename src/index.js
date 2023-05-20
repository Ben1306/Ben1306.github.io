import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import {
    Route,
    Routes
} from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import {StyleWrapper} from "./layouts/wrappers";
import BusinessModelPage from "./pages/business-models-page/main";
import DiscoverUsPage from "./pages/discover-page/main";
import TrackRecords from "./pages/track-records-page/main";
import Contact from "./pages/contact/main";
import StartUp from "./pages/startup-page/main";
import ScrollToTop from "./scroll-to-top";
import NoPageMatching from "./pages/no-route-found";
import EstablishedCompany from "./pages/company-page/main";


const root = createRoot(document.getElementById("root"));
root.render(
    <Router>
        <StyleWrapper>
            <ScrollToTop />
            <Routes>
                <Route key={"0"} path={'*'} element={<NoPageMatching/>}/>
                <Route key={"1"} path={"/"} element={<App/>}/>
                <Route key={"2"} path="/business-models" element={<BusinessModelPage/>}/>
                <Route key={"3"} path="/discover-us" element={<DiscoverUsPage/>}/>
                <Route key={"4"} path="/track-records" element={<TrackRecords/>}/>
                <Route key={"5"} path="/contact-us" element={<Contact/>}/>
                <Route key={"6"} path="/startup" element={<StartUp/>}/>
                <Route key={"7"} path="/established-company" element={<EstablishedCompany/>}/>
            </Routes>
        </StyleWrapper>
    </Router>
);