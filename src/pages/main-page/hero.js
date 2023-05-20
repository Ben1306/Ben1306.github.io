/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import {HeroSubTitle, HeroTitle} from "../../layouts/headings";
import { TypeAnimation } from 'react-type-animation';
import {Button, ButtonLink} from "../../layouts/components";
import Papillon from "../../images/papillon.png"

const HeroWrapper = tw.div`relative flex justify-center items-center bg-transparent`;
const HeroContent = tw.div`flex flex-col max-w-screen-lg z-10 pt-24`
const HeroBlackTitle = tw.div`text-textBlack mr-4`

const HeroButtonsContainer = tw.div`flex justify-center items-center`

const LeftButtonContainer = tw.div`flex w-6/12 justify-end`
const RightButtonContainer = tw.div`flex w-6/12 justify-start`

export default function Hero() {

    return(
        <HeroWrapper
            //style={{height:"90vh"}}
            style={{
                backgroundImage:`url(${Papillon})`,
                backgroundRepeat:"no-repeat",
                backgroundPositionX:"center",
                backgroundPositionY:"bottom",
                backgroundSize:"600px 338px",
                //backgroundSize:`${window.innerWidth}px`,
            }}
        >
            <HeroContent
                style={{
                    paddingBottom:"360px"
                }}
            >
                <HeroTitle>
                    <HeroBlackTitle>
                        Choose to become
                    </HeroBlackTitle>
                    <TypeAnimation
                        sequence={[
                            'Sucessful',
                            3000, // Waits 1s
                            'Salesful',
                            4000, // Waits 1s
                            () => {
                                // Place optional callbacks anywhere in the array
                            }
                        ]}
                        wrapper="div"
                        cursor={false}
                        repeat={Infinity}
                    />
                    <HeroBlackTitle>
                        .
                    </HeroBlackTitle>
                </HeroTitle>
                <HeroSubTitle>
                    {"FlySemi makes you achieve your targets."}
                </HeroSubTitle>
                <HeroButtonsContainer css={tw`text-xl`}>
                    <LeftButtonContainer css={tw`mr-6`}>
                        {/*<Button url={"discover-us"} text={"Discover our expertise"} color={'red'}/>*/}
                        <ButtonLink url={"discover-us"} text={"Discover"} color={'blue'}/>
                    </LeftButtonContainer>
                    <RightButtonContainer css={tw`ml-6`}>
                        {/*<Button url={"contact-us"} text={"Get in touch with our team"} color={'blue'}/>*/}
                        <ButtonLink url={"contact-us"} text={"Contact us"} color={'blue'}/>
                    </RightButtonContainer>
                </HeroButtonsContainer>
            </HeroContent>
        </HeroWrapper>
    )
}