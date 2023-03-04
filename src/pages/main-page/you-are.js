/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import {SectionTitle, YouAreCardDescription, YouAreCardTitle} from "../../layouts/headings";
import {BeakerIcon, BuildingOffice2Icon} from "@heroicons/react/24/solid";

import { motion } from "framer-motion"
import {Button} from "../../layouts/components";


const Wrapper = tw.div`flex justify-center py-24 mx-auto`
const ContentWrapper = tw.div`flex flex-col items-center flex-1 max-w-screen-xl`

const CardsWrapper = tw.div`grid grid-cols-2 max-w-screen-lg w-full mt-4`

const CardContainer = tw.div`flex flex-1 flex-col overflow-hidden items-center py-12 px-4 rounded-md cursor-pointer shadow-none hover:shadow-xl hover:border-gray-200 border-solid border-gray-300 transition duration-300`

const Circle = tw.div`relative flex justify-center text-center w-20 h-20`

function Card({color,icon,title,description,button, reverse}) {

    const circleVariants = {
        rest: {
            scale:1,
            translateY:"0px",
            backgroundColor: color === 'blue' ? '#1757C2' : '#f55c34',
        },
        hover: {
            backgroundColor: color === 'blue' ? '#E8EEF9' : '#fff3ed',
            scale:5,
            translateY:"-80px",
            transition: {
                duration: 0.2,
                type: "tween",
                ease: "easeIn"
            }
        }
    };

    const iconVariants = {
        rest: {
            translateY:"0px",
            color: color === 'blue' ? '#E8EEF9' : '#fff3ed',
        },
        hover: {
            translateY:"-40px",
            color: color === 'blue' ? '#1757C2' : '#f55c34',
            transition: {
                duration: 0.2,
                delay:0.1,
                type: "tween",
                ease: "easeIn"
            }
        }
    };

    const titleVariants = {
        rest: {
            translateY:"0px",
            color:'#040F0F',
        },
        hover: {
            translateY:"-60px",
            color: color === 'blue' ? '#1757C2' : '#f55c34',
            transition: {
                duration: 0.2,
                delay: 0.2,
                type: "tween",
                ease: "easeIn"
            }
        }
    };

    return(
        <motion.div
            style={{
                display:'flex',
                flexGrow:1,
                margin:16,
            }}

            whileHover="hover"
            initial="rest"
            animate="rest"
        >
            <CardContainer className={"group"}>
                <Circle>
                    <motion.div
                        style={{
                            zIndex: 1,
                            margin:"16px",
                            position:"absolute",
                            top:0,
                            bottom:0,
                            left:0,
                            right:0,
                            display: 'flex',
                            justifyContent:'center',
                            justifyItems:'center',
                            textAlign:'center'
                        }}
                        variants={iconVariants}
                    >
                        {icon}
                    </motion.div>
                    <motion.div
                        style={{
                            backgroundColor: color,
                            width:"100%",
                            height:"100%",
                            borderRadius:"50%",
                        }}
                        variants={circleVariants}
                    />
                </Circle>
                <YouAreCardTitle>
                    <motion.div
                        style={{
                            display:'flex',
                        }}
                        variants={titleVariants}
                    >
                        {title}
                    </motion.div>
                </YouAreCardTitle>
                <YouAreCardDescription>
                    {description}
                </YouAreCardDescription>
                <Button reverse={reverse} color={color} text={button}/>
            </CardContainer>
        </motion.div>
    )
}


export default function YouAre() {
    return(
        <Wrapper>
            <ContentWrapper>
                <SectionTitle>
                    Who are you ?
                </SectionTitle>
                <CardsWrapper>
                    <Card icon={<BeakerIcon/>} title={"Startup IP company"} description={'You have a bright idea, a promising technology, possibly first successes… and look for support to expand faster and deeper.'} button={'Learn More'} reverse={true} color={'blue'}/>
                    <Card icon={<BuildingOffice2Icon/>} title={"Established IP company"} description={'Your company is operating for some years and you look for means or paths to grow/boost your business.'} button={'Learn More'} reverse={true} color={'red'}/>
                </CardsWrapper>
            </ContentWrapper>
        </Wrapper>
    )
}