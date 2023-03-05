/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import {HeroSubTitle, HeroTitle} from "../../layouts/headings";
import { TypeAnimation } from 'react-type-animation';
import {Button} from "../../layouts/components";

const HeroWrapper = tw.div`relative flex justify-center items-center bg-transparent`;
const HeroContent = tw.div`flex flex-col max-w-screen-lg z-10`
const HeroBlackTitle = tw.div`text-textBlack mr-4`

const HeroButtonsContainer = tw.div`flex justify-center items-center`

const LeftButtonContainer = tw.div`flex w-6/12 justify-end`
const RightButtonContainer = tw.div`flex w-6/12 justify-start`

export default function Hero() {

    return(
        <HeroWrapper style={{height:"90vh"}}>
            <HeroContent>
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
                </HeroTitle>
                <HeroSubTitle>
                    You want to grow your semiconductor IP business? FlySemi helps you achieve your targets
                </HeroSubTitle>
                <HeroButtonsContainer>
                    <LeftButtonContainer css={tw`mr-4`}>
                        <Button text={"Discover our expertise"} color={'red'}/>
                    </LeftButtonContainer>
                    <RightButtonContainer css={tw`ml-4`}>
                        <Button text={"Get in touch with our team"} color={'blue'}/>
                    </RightButtonContainer>
                </HeroButtonsContainer>
            </HeroContent>
        </HeroWrapper>
    )
}