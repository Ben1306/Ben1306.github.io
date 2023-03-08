/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import Header, {TopHeader} from "../header";
import {PageContentWrapper} from "../../layouts/wrappers";
import Footer from "../footer";
import ContactBanner from "../main-page/contact-banner";
import StartUpHero from "./hero";
import OurHelp from "./our-help";
import {Button} from "../../layouts/components";
import Section from "../main-page/section";


const helpBlueElements = [
    {
        title: "Identify and contact prospects",
        description:"Lorem ipsum dolore blablabla il faut une petite description je pense"
    },
    {
        title: "Set customer expectation ",
        description:"Lorem ipsum dolore blablabla il faut une petite description je pense"
    },
    {
        title: "Define/refine product positioning",
        description: "Lorem ipsum dolore blablabla il faut une petite description je pense"
    },
    {
        title: "Going beyond the trust fence",
        description: "Lorem ipsum dolore blablabla il faut une petite description je pense"
    },
    {
        title: "Value proposition articulation",
        description: "Lorem ipsum dolore blablabla il faut une petite description je pense"
    }
]

const helpRedElements = [
    {
        title: "Assess the real market potential",
        description: "Lorem ipsum dolore blablabla il faut une petite description je pense"
    },
    {
        title: "Identify the roadblocks and the path forward",
        description: "Lorem ipsum dolore blablabla il faut une petite description je pense"
    },
    {
        title: "Create awareness and appraisal",
        description: "Lorem ipsum dolore blablabla il faut une petite description je pense"
    },
    {
        title: "Build pricing model that increase sales closure rate",
        description: "Lorem ipsum dolore blablabla il faut une petite description je pense"
    },
    {
        title: "Sale and establish robust sales processes",
        description: "Lorem ipsum dolore blablabla il faut une petite description je pense"
    },
]

export default function StartUp() {
    return(
        <div>
            <TopHeader text={"Espace pour display un texte ou pour renvoyer vers un lien intéressant"}/>
            <Header/>
            <PageContentWrapper>
                <StartUpHero/>
                <OurHelp
                    blueElements={helpBlueElements}
                    redElements={helpRedElements}
                />
                <Section
                    title={"Sales and business development focus"}
                    text={"Our worldwide network of experts will promote your product(s) to qualified customers. They will support you during the sales steps to up to the agreement signature. We operate under your company name and share with you project and need qualifications. We align on a regular basis with your management on the progress of each deal and support your application engineers. We help potential customers appreciate your value proposition in their specific context and build quotes to extract the best and fair value out of each deal. We drive the business until the signature of the agreement."}
                    chips={["Sales","Expertise"]}
                    orientation={"right"}
                    background={"true"}
                    color={'blue'}
                    button={
                        <Button
                            color={'blue'}
                            reverse={true}
                            text={"Contact us"}
                            url={'contact-us'}
                        />
                    }

                />
                <Section
                    title={"Marketing focus"}
                    text={"Our worldwide network of experts can help with specific marketing actions up to supporting you for building a solid business plan for growth. We size and model your market and the position of your company and its product(s). We help identify drivers and challenges to overcome for achieving a leadership position in your targeted market segment(s). We perform communication and partnership action for strengthening your market position."}
                    chips={["Marketing","Expertise"]}
                    orientation={"left"}
                    background={"true"}
                    color={'red'}
                    button={
                        <Button
                            color={'red'}
                            reverse={true}
                            text={"Contact us"}
                            url={'contact-us'}
                        />
                    }

                />
            </PageContentWrapper>
            <ContactBanner/>
            <Footer/>
        </div>
    )
}