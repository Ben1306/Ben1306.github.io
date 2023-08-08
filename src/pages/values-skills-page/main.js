/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import Header, {TopHeader} from "../header";
import {PageContentWrapper} from "../../layouts/wrappers";
import Footer from "../footer";
import ContactBanner from "../main-page/contact-banner";
import {HeroSubTitle, HeroTitle, SectionSubtitle, SectionTitle} from "../../layouts/headings";
import Our from "../approach-business-tools-page/our";

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

export default function ValuesAndSkillsPage() {
    return(
        <div>
            <TopHeader text={"Espace pour display un texte ou pour renvoyer vers un lien intéressant"}/>
            <Header/>
            <PageContentWrapper>
                <SectionTitle tw="text-textBlack mt-24">
                    We Value. our Skills
                </SectionTitle>
                <SectionSubtitle css={tw`mx-auto text-center`}>
                    Because our values are the major driver when we accomplish a job.
                </SectionSubtitle>
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
                <ContactBanner/>
            </PageContentWrapper>
            <Footer/>
        </div>
    )
}