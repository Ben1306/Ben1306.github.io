/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import {Button, ButtonLink} from "../../layouts/components";


const Wrapper = tw.div`flex justify-center mx-auto`
const BannerWrapper = tw.div`w-full flex flex-col justify-center text-center py-24 mb-16 text-white shadow-inner bg-black max-w-screen-2xl`

const BannerTopHeader = tw.div`text-5xl font-semibold mb-4`
const BannerHeader = tw.div`text-lg mb-8 mx-auto w-10/12`
const BannerButton = tw.div`flex justify-center`

export default function ContactBanner() {
    return(
        <Wrapper>
            <BannerWrapper>
                <BannerTopHeader>
                    Take the leap.
                </BannerTopHeader>
                <BannerHeader>
                    Build a strong sales & marketing strategy to bring your business at another level. We dedicate our expertise and experience for your success.
                </BannerHeader>
                <BannerButton>
                    {/*<Button url={'contact-us'} color={'red'} text={'Contact us'} reverse={true}/>*/}
                    <ButtonLink text={"Contact us"} url={'contact-us'} color={'red'}/>
                </BannerButton>
            </BannerWrapper>
        </Wrapper>
    )
}