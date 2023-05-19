/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'

import {BeakerIcon, BuildingOffice2Icon} from "@heroicons/react/24/solid";
import BlackBanner from "../../images/pissenlit.jpg"
import {ButtonLink, SpanComponent} from "../../layouts/components";

const Wrapper = tw.div`flex justify-center py-24 mx-auto`
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


function Banner(){
    return(
        <FullBlock
            css={tw`
                bg-black py-32 justify-end
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
                <ButtonLink text={"Learn More"} url={"/"} color={"red"}/>
            </BannerTitleBlock>
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
                        title={"Start-up IP Company"}
                        //span={''}
                        color={'blue'}
                        subtitle={
                            <div>
                                You have a <SpanComponent padding={2} text={"bright idea"} color={"#00FF01"}/>, a promising technology, possibly first successes… and look for support to expand faster and deeper?
                            </div>
                        }
                    />
                    <HalfBloc
                        title={
                            <div><SpanComponent padding={4} text={"Estabished"} color={"#FAFF00"}/> IP Company</div>
                        }
                        color={'red'}
                        subtitle={"Your company is operating for some years and you look for means or paths to grow/boost your business?"}
                    />
                </BlocsLayout>
                <BlocsLayout>
                    <HalfBloc
                        title={"Our values and skills"}
                        subtitle={"We developped them through many years of working in the industry. There are important to us and are the bottom line of our work."}
                        color={'red'}
                    />
                    <HalfBloc
                        title={"Our approach and business tools"}
                        subtitle={""}
                        color={'blue'}
                    />
                </BlocsLayout>
                <FullBlock>Our business models</FullBlock>
                <FullBlock>Sales and Marketing techniques</FullBlock>
            </ContentWrapper>
        </Wrapper>
    )
}