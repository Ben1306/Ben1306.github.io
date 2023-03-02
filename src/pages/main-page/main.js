/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import Header, {TopHeader} from "../header";
import {PageContentWrapper} from "../../layouts/wrappers";
import Hero from "./hero";

const Content = tw.div`h-screen p-4`


export default function MainPage() {
    return(
        <div>
            <TopHeader text={"Espace pour display un texte ou pour renvoyer vers un lien intéressant"}/>
            <Header/>
            <PageContentWrapper>
                <Hero/>
                <Content/>
            </PageContentWrapper>
        </div>
    )
}