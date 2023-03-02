/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import {HeroSubTitle, HeroTitle} from "../../layouts/headings";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion"
import {ArrowRightIcon} from "@heroicons/react/24/solid";

const HeroWrapper = tw.div`flex justify-center items-center py-32`;
const HeroContent = tw.div`flex flex-col max-w-screen-lg`
const HeroBlackTitle = tw.div`text-textBlack mr-4`

const HeroButtonsContainer = tw.div`flex justify-center items-center`

const LeftButtonContainer = tw.div`flex w-6/12 justify-end`
const RightButtonContainer = tw.div`flex w-6/12 justify-start`
const DiscoverButton = tw.div`mr-4 flex shadow-md text-lg font-medium cursor-pointer justify-center rounded-md items-center bg-secondaryLight text-secondaryDark hover:bg-secondaryDark hover:text-white transition duration-300`
const ContactButton = tw.div`ml-4 flex shadow-md text-lg font-medium cursor-pointer justify-center rounded-md items-center bg-primaryLight text-primaryDark hover:bg-primaryDark hover:text-white transition duration-300`
const ContactText = tw.div``

export default function Hero() {

    const contactArrow = {
        rest: { display:"hidden", width:0, translateX:-10, opacity:"0%", marginLeft:0},
        hover: {
            width:"24px",
            marginLeft:8,
            display:"flex",
            translateX:0,
            opacity:"100%",
            transition: {
                duration: 0.2,
                type: "tween",
                ease: "easeIn"
            }
        }
    };


    return(
        <HeroWrapper>
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
                                console.log('Done typing!'); // Place optional callbacks anywhere in the array
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
                    <LeftButtonContainer>
                    <DiscoverButton>
                        <motion.div
                            style={{
                                display:'flex',
                                paddingLeft:'14px',
                                paddingRight:'14px',
                                paddingTop:'16px',
                                paddingBottom:'16px',
                                justifyContent:'center',
                                justifyItems:'center'
                            }}
                            whileHover="hover"
                            initial="rest"
                            animate="rest"
                        >
                            <ContactText>
                                Discover our expertise
                            </ContactText>
                            <motion.div
                                style={{
                                    justifyContent:'center'
                                }}
                                variants={contactArrow}
                            >
                                <ArrowRightIcon/>
                            </motion.div>
                        </motion.div>
                    </DiscoverButton>
                    </LeftButtonContainer>
                    <RightButtonContainer>
                    <ContactButton>
                        <motion.div
                            style={{
                                display:'flex',
                                paddingLeft:'14px',
                                paddingRight:'14px',
                                paddingTop:'16px',
                                paddingBottom:'16px',
                                justifyContent:'center',
                                justifyItems:'center'
                            }}
                            whileHover="hover"
                            initial="rest"
                            animate="rest"
                        >
                            <ContactText>
                                Get in touch with our team
                            </ContactText>
                            <motion.div
                                style={{
                                    justifyContent:'center'
                                }}
                                variants={contactArrow}
                            >
                                <ArrowRightIcon/>
                            </motion.div>
                        </motion.div>
                    </ContactButton>
                    </RightButtonContainer>
                </HeroButtonsContainer>
            </HeroContent>
        </HeroWrapper>
    )
}