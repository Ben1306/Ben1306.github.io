/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import Header, {TopHeader} from "../header";
import {PageContentWrapper} from "../../layouts/wrappers";

const Content = tw.div`h-screen p-4`

export default function MainPage() {
    return(
        <div>
            <TopHeader text={"Ceci est un top header"}/>
            <Header/>
            <PageContentWrapper>
                <Content/>
                <Content/>
            </PageContentWrapper>
        </div>
    )
}