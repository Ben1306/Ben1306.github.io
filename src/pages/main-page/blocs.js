/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'

import {BeakerIcon, BuildingOffice2Icon} from "@heroicons/react/24/solid";
import BlackBanner from "../../images/pissenlit.jpg"
import SalesMarketingImg from "../../images/sales-and-marketing.jpg"
import {ButtonLink, SpanComponent} from "../../layouts/components";

const Wrapper = tw.div`flex justify-center pt-24 mx-auto`
const ContentWrapper = tw.div`flex flex-col flex-1 max-w-screen-2xl`
const BlocsLayout = tw.div`flex flex-wrap flex-1`

const SemiBloc = tw.div`flex px-16 justify-center odd:ml-8 even:ml-4 odd:mr-4 even:mr-8 flex-1 mb-8 bg-blocGrayBG`
const BlocTitleBlock = tw.div`flex flex-col text-center text-lg text-textBlack items-center pt-16 pb-96`
const BlocTitle = tw.div`flex text-5xl font-semibold mb-6 items-center`
const BlocSubTitle = tw.div`max-w-sm text-lg mb-4`

const FullBlock = tw.div`flex bg-blocGrayBG mx-8 mb-8 h-64`

const BannerTitleBlock = tw.div`flex flex-col text-lg text-center text-white mr-48 items-center justify-center max-w-sm`
const BannerUpperTitle = tw.div`text-2xl mb-2 font-medium`
const BannerTitle = tw.div`text-5xl font-semibold mb-6`
const BannerSubTitle = tw.div`max-w-xs text-lg mb-4`


const BusinessModelLeft = tw.div`flex w-5/12 justify-end`
const BusinessModelRight = tw.div`flex w-7/12 justify-center`
const BusinessModelTitleBlock = tw.div`flex flex-col justify-center items-center text-center text-lg`
const BusinessModelUpperTitle = tw.div`text-8xl font-bold`
//const BusinessModelTitle = tw.div`text-6xl font-semibold mb-6`
const BusinessModelTitle = tw.div`text-textBlack text-6xl font-normal text-center mb-6`
const BusinessModelSubTitle = tw.div`max-w-xs text-lg mb-4`

const SalesMarketingTitleBlock = tw.div`flex flex-col justify-center items-center text-center text-lg`
const SalesMarketingTitle = tw.div`text-6xl font-semibold mb-6`
const SalesMarketingSubTitle = tw.div`text-lg mb-4`

function Banner(){
    return(
        <FullBlock
            css={tw`
                bg-black py-32 justify-end mx-0
            `}

            style={{
                //height:"800px",
                backgroundImage:`url(${BlackBanner})`,
                backgroundRepeat:"no-repeat",
                backgroundPositionX:"left",
                backgroundPositionY:"bottom",
                backgroundSize:"800px 450px",
            }}
        >
            <BannerTitleBlock>
                <BannerUpperTitle>
                    {"Take Advantage of our"}
                </BannerUpperTitle>
                <BannerTitle>
                    {"Semi-conductor IP Expertise"}
                </BannerTitle>
                <BannerSubTitle>
                    {"We have more than 30 years of experience and already traded with many blablabla..."}
                </BannerSubTitle>
                <ButtonLink text={"Learn more"} url={"/"} color={"red"}/>
            </BannerTitleBlock>
        </FullBlock>
    )
}


function BusinessModel(){
    return(
        <FullBlock css={tw`py-48`}>
            <BusinessModelLeft>
                <BusinessModelTitleBlock>
                    <BusinessModelUpperTitle>
                        {"You."}
                    </BusinessModelUpperTitle>
                    <BusinessModelTitle>
                        {"Are Unique."}
                    </BusinessModelTitle>
                    <BusinessModelSubTitle>
                        {"We will suit our approach to your needs."}
                    </BusinessModelSubTitle>
                    <ButtonLink text={"Learn more"} url={"business-models"} color={"blue"}/>
                </BusinessModelTitleBlock>
            </BusinessModelLeft>

            <BusinessModelRight>

            </BusinessModelRight>
        </FullBlock>
    )
}

function SalesMarketing(){
    return(
        <FullBlock
            css={tw`justify-center text-white py-48`}
            style={{
                //height:"800px",
                backgroundImage:`
                    linear-gradient(
                        rgba(0, 0, 0, 0.4), 
                        rgba(0, 0, 0, 0.4)
                    ),
                    url(${SalesMarketingImg})
                `,
                backgroundRepeat:"no-repeat",
                backgroundPositionX:"center",
                backgroundPositionY:"center",
                backgroundSize:"cover",
            }}
        >
            <SalesMarketingTitleBlock>
                <SalesMarketingTitle>
                    {"Sales. Marketing."}
                </SalesMarketingTitle>
                <SalesMarketingSubTitle>
                    {"Get the knowledge to take your business to the next level."}
                </SalesMarketingSubTitle>
                <ButtonLink text={"Learn more about our techniques"} url={"business-models"} color={"white"}/>
            </SalesMarketingTitleBlock>
        </FullBlock>
    )
}
function HalfBloc({title, color, subtitle, url, img}){

    return(
        <SemiBloc
            style={{
                backgroundImage:`url(${img})`,
                backgroundRepeat:"no-repeat",
                backgroundPositionX:"center",
                backgroundPositionY:"bottom",
                //backgroundSize:"960px 720px",
                //backgroundSize:`${window.innerWidth}px ${window.innerWidth * 16 / 9}px`,
            }}
        >
            <BlocTitleBlock>
                <BlocTitle>
                    {title}
                </BlocTitle>
                <BlocSubTitle>
                    {subtitle}
                </BlocSubTitle>
                <ButtonLink text={"Learn more"} url={url} color={color}/>
            </BlocTitleBlock>
        </SemiBloc>
    )
}

export default function Blocs() {

    return(
        <Wrapper>
            <ContentWrapper>
                <Banner/>
                <BlocsLayout>
                    <HalfBloc
                        title={
                            <div><SpanComponent paddingX={4} paddingY={4} text={"Estabished"} color={"#FAFF00"}/> IP Company.</div>
                        }
                        color={'blue'}
                        subtitle={"Your company is operating for some years and you look for means or paths to grow/boost your business?"}
                    />
                    <HalfBloc
                        title={"Start-Up."}
                        //span={''}
                        color={'blue'}
                        subtitle={
                            <div>
                                You have a <SpanComponent paddingX={2} paddingY={2} text={"bright idea"} color={"#00FF01"}/>, a promising technology, possibly first successes… and look for support to expand faster and deeper?
                            </div>
                        }
                    />
                </BlocsLayout>
                <BlocsLayout>
                    <HalfBloc
                        title={<div>Values. <SpanComponent paddingX={4} paddingY={4} text={"Skills."} color={"#13FAEF"}/></div>}
                        subtitle={"We developped them through many years of working in the industry. There are important to us and are the bottom line of our work."}
                        color={'blue'}
                    />
                    <HalfBloc
                        title={"Approach and Business Tools."}
                        subtitle={<div>We operate with <SpanComponent paddingX={2} paddingY={2} color={"#FFBF00"} text={"effective"}/> tools that we have created or that we leverage</div>}
                        color={'blue'}
                    />
                </BlocsLayout>
                <BusinessModel/>
                <SalesMarketing/>
            </ContentWrapper>
        </Wrapper>
    )
}