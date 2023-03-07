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
import Our from "./our";
import WeCover from "./coverage";


const values = [
    {
        title:"Embrace reality",
        content:"Face it and deal with it",
    },
    {
        title:"Listen, be curious",
        content:"Understand what is happening",
    },
    {
        title:"Be forward thinking",
        content:"Drive and achieve",
    },
    {
        title:"Believe",
        content:"With the will to find a way",
    },
    {
        title:"Be creative",
        content:"Think beyond the fence, strive to reach mutually valuable agreements",
    },
    {
        title:"Be ambitious",
        content:"Audacious and respectful",
    },
    {
        title:"Share, explain",
        content:"Act transparently",
    },
]

const skills = [
    {
        title:"Understand high technology",
        content:"Ability to handle sales but also business development",
    },
    {
        title:"Project and need qualification",
        content:"For a thorough assessment of sales potential",
    },
    {
        title:"Negotiation",
        content:"To increase business success rate ",
    },
    {
        title:"Sales penetration",
        content:"To maximize RoI",
    },
    {
        title:"Sales management",
        content:"To maximize success rate and optimize time to success",
    },
    {
        title:"Value proposition articulation",
        content:"To maximize sales return",
    },
    {
        title:"Market segmentation and positioning",
        content:"To identify your key targets",
    },
    {
        title:"Business planification",
        content:"",
    },
    {
        title:"Partnership creation",
        content:"",
    },
    {
        title:"Communication",
        content:"",
    }
]

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
                <WeCover/>
                <Map/>
                <Our
                    title={"Our key values"}
                    text={"There are important to us and are the bottom line of our work"}
                    orientation={"left"}
                    list={values}
                />
                <Our
                    title={"Our skills"}
                    text={"We developped this expertise through many years of working in the industry"}
                    orientation={"right"}
                    list={skills}
                />
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