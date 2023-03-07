/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import Header, {TopHeader} from "../header";
import {PageContentWrapper} from "../../layouts/wrappers";
import Footer from "../footer";
import ContactBanner from "../main-page/contact-banner";
import StartUpHero from "./hero";


export default function StartUp() {
    return(
        <div>
            <TopHeader text={"Espace pour display un texte ou pour renvoyer vers un lien intéressant"}/>
            <Header/>
            <PageContentWrapper>
                <StartUpHero/>

            </PageContentWrapper>
            <ContactBanner/>
            <Footer/>
        </div>
    )
}