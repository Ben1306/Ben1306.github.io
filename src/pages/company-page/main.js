/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import Header, {TopHeader} from "../header";
import {PageContentWrapper} from "../../layouts/wrappers";
import Footer from "../footer";
import ContactBanner from "../main-page/contact-banner";
import StartUpHero from "../startup-page/hero";
import OurHelp from "../startup-page/our-help";
import {Button} from "../../layouts/components";
import Section from "../main-page/section";


const helpBlueElements = [
    {
        title: "Lorem Ipsum",
        description:"Lorem ipsum dolore blablabla il faut une petite description je pense"
    },
    {
        title: "Lorem Ipsum",
        description:"Lorem ipsum dolore blablabla il faut une petite description je pense"
    },
    {
        title: "Lorem Ipsum",
        description: "Lorem ipsum dolore blablabla il faut une petite description je pense"
    },
    {
        title: "Lorem Ipsum",
        description: "Lorem ipsum dolore blablabla il faut une petite description je pense"
    },
    {
        title: "Lorem Ipsum",
        description: "Lorem ipsum dolore blablabla il faut une petite description je pense"
    }
]

const helpRedElements = [
    {
        title: "Lorem Ipsum",
        description: "Lorem ipsum dolore blablabla il faut une petite description je pense"
    },
    {
        title: "Lorem Ipsum",
        description: "Lorem ipsum dolore blablabla il faut une petite description je pense"
    },
    {
        title: "Lorem Ipsum",
        description: "Lorem ipsum dolore blablabla il faut une petite description je pense"
    },
    {
        title: "Lorem Ipsum",
        description: "Lorem ipsum dolore blablabla il faut une petite description je pense"
    },
    {
        title: "Lorem Ipsum",
        description: "Lorem ipsum dolore blablabla il faut une petite description je pense"
    },
]

export default function EstablishedCompany() {
    return(
        <div>
            <TopHeader text={"Espace pour display un texte ou pour renvoyer vers un lien intéressant"}/>
            <Header/>
            <PageContentWrapper>
                <StartUpHero
                    title={"Your company is operating for some years and you look for means or paths to grow/boost your business?"}
                    description={"If you already have an in-house sales and marketing team, we are here to augment them for reaching new customers, new markets, new countries or for helping you introduce new products. If you operate through a distribution channel, we can expand your network of trusted partners."}
                    subcontainerText={"Depending on your needs, we either focus on sales or act as business developers"}
                    imgComponent={<p>Pretty Img Here</p>}
                />
                <OurHelp
                    blueElements={helpBlueElements}
                    redElements={helpRedElements}
                />
                <Section
                    title={"Sales and business development focus"}
                    text={"Our worldwide network of experts will promote your product(s) to qualified customers. They will support you during the sales steps to up to the agreement signature. \n" +
                        "\n" +
                        "We operate under your company name and share with you project and need qualifications. We align on a regular basis with your management on the progress of each deal and support your application engineers. We help your customer appreciate the value proposition in their specific context and build quotes to extract the best and fair value out of each deal. We drive the business until the signature of the agreement."}
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