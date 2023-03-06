/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import Header, {TopHeader} from "../header";
import {PageContentWrapper} from "../../layouts/wrappers";
import Footer from "../footer";
import ContactBanner from "../main-page/contact-banner";
import {HeroSubTitle, HeroTitle} from "../../layouts/headings";
import Records from "./records";


export default function TrackRecords() {
    return(
        <div>
            <TopHeader text={"Espace pour display un texte ou pour renvoyer vers un lien intéressant"}/>
            <Header/>
            <PageContentWrapper>
                <HeroTitle tw="text-textBlack mt-24">
                    Our track records
                </HeroTitle>
                <HeroSubTitle css={tw`max-w-screen-lg mx-auto mb-24`}>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                </HeroSubTitle>
                <Records/>
                <ContactBanner/>
            </PageContentWrapper>
            <Footer/>
        </div>
    )
}