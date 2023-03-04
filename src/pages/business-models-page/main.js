/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import Header, {TopHeader} from "../header";
import {PageContentWrapper} from "../../layouts/wrappers";
import PricingTable from "./page-pricing-table";
import {HeroTitle, BusinessPlans} from "../../layouts/headings";
import SalesMarketing from "./sales-marketing";
import Footer from "../footer";
import ContactBanner from "../main-page/contact-banner";

const Wrapper = tw.div`flex justify-center pt-24 pb-2 mx-auto`
const ContentWrapper = tw.div`flex flex-col items-center flex-1 max-w-screen-xl`

export default function BusinessModelPage() {
    return(
        <div>
            <TopHeader text={"Espace pour display un texte ou pour renvoyer vers un lien intéressant"}/>
            <Header/>

            <PageContentWrapper>
                <Wrapper>
                    <ContentWrapper>
                        <HeroTitle tw="text-textBlack mb-24">
                            Our business models
                        </HeroTitle>

                        <SalesMarketing/>
                        <PricingTable/>

                    </ContentWrapper>
                </Wrapper>

                <ContactBanner/>

            </PageContentWrapper>

            <Footer/>
        </div>
    )
}