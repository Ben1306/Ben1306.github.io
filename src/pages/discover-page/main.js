/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import Header, {TopHeader} from "../header";
import Section from "../main-page/section";
import {PageContentWrapper} from "../../layouts/wrappers";
import {Button} from "../../layouts/components";
import Footer from "../footer";
import ContactBanner from "../main-page/contact-banner";
import {HeroTitle} from "../../layouts/headings";
import Motto from "./motto";
import Map from "./map";

export default function DiscoverUsPage() {
    return(
        <div>
            <TopHeader text={"Espace pour display un texte ou pour renvoyer vers un lien intéressant"}/>
            <Header/>
            <PageContentWrapper>
                <HeroTitle tw="text-textBlack my-24">
                    Discover our expertise
                </HeroTitle>
                <Motto/>
                <Map/>
                <Section
                    title={"We become an essential part of your team"}
                    text={"We believe in trust and operate in full transparency. We operate under your name, for your company. Our network of professionals “crusaders” share values that make them fully committed to help you succeed. If you trust your technology, if you have the ambition to lead your market and want to be reinforced or augmented in sales and/or marketing, we can help with our brains and hands to speed-up your Time-to-Success."}
                    chips={["Transparency"]}
                    orientation={"left"}
                    background={"true"}
                    color={'blue'}
                    button={
                        <Button
                            color={'blue'}
                            reverse={true}
                            text={"Choose one of our plan"}
                        />
                    }
                />
                <Section
                    title={"You get access to proficient tools and methodologies"}
                    text={"If you select us to boost your sales you will get access to all our qualification reports, we will share with your our negotiation plan and progress… you will be entitled to ask for updates at any time. We do not operate business activities for us but for you. If you select us for marketing activities, we will share our tools and methodologies with you… you will be able to question the outcome of our findings at any time. What matters to succeed are the paths that will make your business successful."}
                    chips={["Full Avaibility","Shared Goals"]}
                    orientation={"right"}
                    background={"true"}
                    color={'red'}
                    button={
                        <Button
                            color={'red'}
                            reverse={true}
                            text={"Learn more about our expertise"}
                        />
                    }

                />

                <ContactBanner/>
            </PageContentWrapper>
            <Footer/>
        </div>
    )
}