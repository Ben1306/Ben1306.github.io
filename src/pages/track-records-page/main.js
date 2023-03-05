/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import Header, {TopHeader} from "../header";
import {PageContentWrapper} from "../../layouts/wrappers";
import Footer from "../footer";
import ContactBanner from "../main-page/contact-banner";
import {HeroTitle} from "../../layouts/headings";
import Records from "./records";


export default function TrackRecords() {
    return(
        <div>
            <TopHeader text={"Espace pour display un texte ou pour renvoyer vers un lien intéressant"}/>
            <Header/>
            <PageContentWrapper>
                <HeroTitle tw="text-textBlack my-24">
                    Our track records
                </HeroTitle>
                <Records/>
                <ContactBanner/>
            </PageContentWrapper>
            <Footer/>
        </div>
    )
}