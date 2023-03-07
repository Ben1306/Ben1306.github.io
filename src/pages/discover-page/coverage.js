/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import {SectionTitle} from "../../layouts/headings";
import {motion} from "framer-motion"
import Xarrow from "react-xarrows";

const Wrapper = tw.div`relative flex flex-col items-center mx-auto`
const UpperChipContainer = tw.div`absolute top-0 w-full flex justify-center`
const UpperChip = tw.div`text-center py-3 px-6 rounded-full bg-secondaryDark text-white text-lg font-semibold`

const SectionWrapper = tw.div`flex justify-center pt-48 pb-48 w-full bg-gradient-to-r from-primaryLight to-secondaryLight`
const ContentWrapper = tw.div`flex flex-col flex-1 max-w-screen-xl mx-12`

const SubTitle = tw.div`text-textGrayMedium text-lg font-normal text-center mb-6`;


const BusinessDevContainer = tw.div`flex justify-center relative w-10/12 mx-auto mb-4`
const BusinessDevTitle = tw.div`z-10 flex mb-12 self-center text-textBlack bg-white items-center justify-center text-center rounded-full shadow-contact p-8 text-3xl font-bold`
const Columns = tw.div`flex flex-1`

const LeftColumn = tw.div`flex relative h-96 flex-col justify-start w-6/12 mr-8`
const SubjectTitle = tw.div`text-center w-4/12 z-10 rounded-xl shadow-contact border-solid border-2 p-6 text-3xl font-bold`
const SubSubjects = tw.div`z-10 py-2 px-3 absolute shadow-2xl rounded-full border-solid border-2 text-lg font-medium`

const RightColumn = tw.div`flex flex-col h-96 relative justify-start items-center w-6/12 ml-8`



const ListContainer = tw.div`cursor-default w-8/12 flex flex-col`
const NumberContainer = tw.div`flex items-start my-4 text-right mr-4 justify-center text-8xl font-semibold`
const ListItem = tw.div`flex flex-1 flex-col my-4 rounded-md p-8`
const ListItemTitle = tw.div`mb-4 text-left text-secondaryDark text-3xl font-semibold transition duration-300`

const TextContainer = tw.div`text-textGrayMedium text-lg font-normal text-left mb-6`;


const salesBubbles = [
    {
        id:"sales1",
        text:"Customer Profiling",
        top:0,
        //bottom:"0",
        left:0,
        //right:""
    },
    {
        id:"sales2",
        text:"Customer Profiling",
        top:"40%",
        //bottom:"0",
        left:0,
        //right:""
    },
    {
        id:"sales3",
        text:"Lead generation",
        //top:0,
        bottom:"15%",
        left:"25%",
        //right:""
    },
    {
        id:"sales4",
        text:"Lead qualification",
        //top:0,
        bottom:"0",
        //left:0,
        right:0
    }
]

const marketingBubbles = [
    {
        id:"marketing1",
        text:"Customer Profiling",
        top:0,
        //bottom:"0",
        //left:0,
        right:0
    },
    {
        id:"marketing2",
        text:"Customer Profiling",
        top:"40%",
        //bottom:"0",
        //left:0,
        right:0
    },
    {
        id:"marketing3",
        text:"Lead generation",
        //top:0,
        bottom:"15%",
        //left:"",
        right:"25%"
    },
    {
        id:"marketing4",
        text:"Lead qualification",
        //top:0,
        bottom:"0",
        left:0,
        //right:0
    }
]

function BusinessDev({text}){

    return(
        <>
            <BusinessDevTitle
                id={"business-dev"}
            >
                {text}
            </BusinessDevTitle>
            <SubSubjects
                id={"bd-left"}
                css= {tw`border-white text-textBlack bg-white`}
                style={{
                    top:"50%",
                    translate:"0 -100%",
                    left:0
                }}

            >
                Market Growth
            </SubSubjects>
            <Xarrow
                start={"business-dev"}
                startAnchor={"middle"}
                endAnchor={"middle"}
                path={"straight"}
                end={"bd-left"}
                showHead={false}
                showTail={false}
                color={"#FFFFFF"}
                strokeWidth={4}
            />
            <SubSubjects
                id={"bd-right"}
                css= {tw`border-white text-textBlack bg-white`}
                style={{
                    top:"50%",
                    translate:"0 -100%",
                    right:0
                }}
            >
                Horizon Discover
            </SubSubjects>
            <Xarrow
                start={"business-dev"}
                startAnchor={"middle"}
                endAnchor={"middle"}
                path={"straight"}
                end={"bd-right"}
                showHead={false}
                showTail={false}
                color={"#FFFFFF"}
                strokeWidth={4}
            />

        </>
    )
}


function Subject({color, text, id, subBubbles}){

    return(
        <>
                <SubjectTitle
                    id={id}
                    css={color === 'blue' ? tw`border-primaryDark text-primaryDark bg-primaryLight self-end` : tw`self-start border-secondaryDark text-secondaryDark bg-secondaryLight`}
                >

                    {text}
                </SubjectTitle>
            {subBubbles.map((bubble,index)=>{
                return(
                    <div key={index}>
                        {/*
                        <motion.div
                            id={bubble.id}
                            css={color === 'blue' ?
                                tw`z-10 py-2 px-3 absolute shadow-2xl rounded-full border-solid border-2 text-lg font-medium border-primaryDark text-white bg-primaryDark`
                                :
                                tw`z-10 py-2 px-3 absolute shadow-2xl rounded-full border-solid border-2 text-lg font-medium border-secondaryDark text-white bg-secondaryDark`
                            }
                            style={{
                                top:bubble.top,
                                bottom:bubble.bottom,
                                right:bubble.right,
                                left:bubble.left,
                            }}
                            animate={{
                                //translateX:[0, 2, 0, -2, 0],
                                translateY:[0, 2,-2, 0],
                            }}
                            transition={{
                                ease: "easeInOut",
                                times: [0, 0.25, 0.75, 1],
                                repeat: Infinity,
                                duration: 2,
                                delay:index
                            }}

                        >
                            {bubble.text}
                        </motion.div>
                        */}
                            <SubSubjects
                                id={bubble.id}

                                css= {color === 'blue' ? tw`border-primaryDark text-white bg-primaryDark` : tw`border-secondaryDark text-white bg-secondaryDark`}
                                style={{
                                    top:bubble.top,
                                    bottom:bubble.bottom,
                                    right:bubble.right,
                                    left:bubble.left,
                                }}
                            >
                                {bubble.text}
                            </SubSubjects>
                        <Xarrow
                            start={id}
                            startAnchor={"middle"}
                            endAnchor={"middle"}
                            path={"straight"}
                            end={bubble.id}
                            showHead={false}
                            showTail={false}
                            color={color === 'blue' ? "#1757C2" : "#f55c34" }
                            strokeWidth={4}
                        />
                    </div>
                )
            })}
        </>
    )
}

export default function WeCover() {
    return(
        <Wrapper>
            <UpperChipContainer>
                <UpperChip
                    style={{
                        translate:"0 -50%"
                    }}
                >
                    Let us introduce you our scope of action and work philosophy
                </UpperChip>
            </UpperChipContainer>
            <SectionWrapper>
                <ContentWrapper>
                    <SectionTitle
                        css={tw`self-center`}
                    >
                        Our coverage
                    </SectionTitle>
                    <SubTitle
                        css={tw`mb-24`}
                    >
                        Lorem ipsum dolore es dela jactae est. Par toutatis.
                    </SubTitle>
                    <BusinessDevContainer>
                        <BusinessDev
                            text={"Business Development"}
                        />
                    </BusinessDevContainer>
                    <Columns>
                        <LeftColumn>
                            <Subject
                                id={"sales"}
                                text={'Sales'}
                                color={'blue'}
                                subBubbles={salesBubbles}
                            />
                        </LeftColumn>
                        <RightColumn>
                            <Subject
                                id={"marketing"}
                                text={'Marketing'}
                                color={'red'}
                                subBubbles={marketingBubbles}
                            />
                        </RightColumn>
                    </Columns>
                </ContentWrapper>
            </SectionWrapper>
        </Wrapper>
    )
}