/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import {Button} from "../../layouts/components";


const Wrapper = tw.div`flex justify-center mx-auto`
const BannerWrapper = tw.div`flex flex-col justify-start p-16 mb-12 text-white rounded-md shadow-inner bg-primaryDark max-w-screen-lg w-full`

const BannerTopHeader = tw.div`text-base font-normal mb-2`
const BannerHeader = tw.div`text-3xl font-medium mb-8 w-10/12`
const BannerButton = tw.div`flex`

export default function ContactBanner() {
    return(
        <Wrapper>
            <BannerWrapper>
                <BannerTopHeader>
                    Take the leap!
                </BannerTopHeader>
                <BannerHeader>
                    Build a strong sales & marketing strategy to bring your business at another level. We dedicate our expertise and experience for your success.
                </BannerHeader>
                <BannerButton>
                    <Button color={'red'} text={'Contact us'} reverse={false}/>
                </BannerButton>
            </BannerWrapper>
        </Wrapper>
    )
}