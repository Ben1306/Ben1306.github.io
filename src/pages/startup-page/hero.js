/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import {ColoredLine} from "../../layouts/components";
import {LinkIcon} from "@heroicons/react/24/solid";

const Wrapper = tw.div`flex p-6 pb-24 relative rounded-md max-w-screen-xl bg-textLightPrimaryBackground mx-auto mt-6 mb-48`
const LeftColumn = tw.div`flex flex-col w-8/12 pl-12 pt-12`
const RightColumn = tw.div`flex justify-center items-center w-4/12`

const SubContainer = tw.div`flex justify-center absolute z-10 bottom-0 left-0 right-0`
const SubElement = tw.div`flex cursor-default shadow-contact justify-center bg-white rounded-md px-4 py-6 w-10/12`

const HeroTitle = tw.div`flex text-left text-5xl font-medium text-black mb-12`
const LineContainer = tw.div`flex mb-10`
const SubTitle = tw.div`flex text-left text-xl font-normal text-textBlack`

const SubContainerText = tw.div`flex justify-center items-center text-base font-semibold mr-8`
const SubContainerSales = tw.div`py-3 px-4 bg-primaryDark rounded-md text-white font-bold text-lg`
const SubContainerLogo = tw.div`flex justify-center items-center w-12 h-12 text-textBlack mx-4`
const SubContainerMarketing = tw.div`py-3 px-4 bg-secondaryDark rounded-md text-white font-bold text-lg`

export default function StartUpHero() {
    return(
        <Wrapper>
            <LeftColumn>
                <HeroTitle>
                    You have a bright idea, a promising technology, possibly first successes… and look for support to expand faster and deeper ?
                </HeroTitle>
                <LineContainer>
                    <ColoredLine
                        color={"#1757C2"}
                        height={"4px"}
                    />
                </LineContainer>
                <SubTitle>
                    If you already have a sales and marketing team, we are here to augment them for reaching new customers, new markets or new countries. If you do not have any, we can act as your trusted partner to put in place an effective sales and/or business development channel.
                    combining sales and marketing skills.
                </SubTitle>
            </LeftColumn>
            <RightColumn>

            </RightColumn>
            <SubContainer
                style={{
                    translate:"0 50%"
                }}
            >
                <SubElement>
                    <SubContainerText>
                        Depending on your needs, we either focus on sales or act as business developers
                    </SubContainerText>
                    <SubContainerSales>
                        Sales
                    </SubContainerSales>
                    <SubContainerLogo>
                        <LinkIcon/>
                    </SubContainerLogo>
                    <SubContainerMarketing>
                        Marketing
                    </SubContainerMarketing>
                </SubElement>
            </SubContainer>
        </Wrapper>
    )
}