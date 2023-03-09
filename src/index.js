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
                <Route path={'*'} element={<NoPageMatching/>}/>
                <Route path={"/"} element={<App/>}/>
                <Route path="/business-models" element={<BusinessModelPage/>}/>
                <Route path="/discover-us" element={<DiscoverUsPage/>}/>
                <Route path="/track-records" element={<TrackRecords/>}/>
                <Route path="/contact-us" element={<Contact/>}/>
                <Route path="/startup" element={<StartUp/>}/>
                <Route path="/established-company" element={<EstablishedCompany/>}/>
            </Routes>
        </StyleWrapper>
    </Router>
);