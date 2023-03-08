/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import Header, {TopHeader} from "./header";
import {PageContentWrapper} from "../layouts/wrappers";
import Footer from "./footer";

import NotFound from "../images/404-not-found.jpg"
import {SectionTitle} from "../layouts/headings";
import {Button} from "../layouts/components";

const Wrapper = tw.div`h-screen`
const Container = tw.div`flex flex-col`
const ImgContainer = tw.div`flex items-center justify-center w-6/12 mx-auto`
const ButtonContainer = tw.div`flex items-center justify-center my-4`

export default function NoPageMatching() {
    return(
        <Wrapper>
            <TopHeader text={"Espace pour display un texte ou pour renvoyer vers un lien intéressant"}/>
            <Header/>
            <PageContentWrapper>
                <Container>
                    <SectionTitle
                        css={tw`self-center my-12`}
                    >
                        Oups... it seems like this page doesn't exist
                    </SectionTitle>
                    <ImgContainer>
                        <img
                            css={tw`w-full`}
                            src={NotFound}
                            alt={"Page Not Found"}
                        />
                    </ImgContainer>
                    <ButtonContainer>
                        <Button
                            text={"Go back to main page"}
                            color={'blue'}
                            reverse={true}
                        />
                    </ButtonContainer>
                </Container>
            </PageContentWrapper>
        </Wrapper>
    )
}