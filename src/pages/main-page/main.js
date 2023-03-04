/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import Header, {TopHeader} from "../header";
import Section from "./section";
import {PageContentWrapper} from "../../layouts/wrappers";
import Hero from "./hero";
import YouAre from "./you-are";
import {Button} from "../../layouts/components";
import Footer from "../footer";
import ContactBanner from "./contact-banner";

export default function MainPage() {
    return(
        <div>
            <TopHeader text={"Espace pour display un texte ou pour renvoyer vers un lien intéressant"}/>
            <Header/>
            <PageContentWrapper>
                <Hero/>
                <Section
                    title={"Boost your Business"}
                    text={"We believe that any innovation must be supported by real marketing and sales work carried out by passionate professionals who have the will to succeed, which in turn gives the product its best chance to find its way to success."}
                    chips={["Sales","Marketing"]}
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
                    title={"Our expertise dedicated to your success"}
                    text={"The team of business experts from Fly semi is committed to your success and operates under your company name to build a solid stream of revenues through long term sales and marketing support, or to handle specific sales and marketing tasks for your company."}
                    chips={["Expertise","Support"]}
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
                <YouAre/>
                <ContactBanner/>
            </PageContentWrapper>
            <Footer/>
        </div>
    )
}