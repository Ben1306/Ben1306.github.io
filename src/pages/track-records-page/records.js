/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import {RecordTitle} from "../../layouts/headings";
import {motion} from "framer-motion"
import {useRef, useState} from "react";

const Wrapper = tw.div`flex justify-center mx-auto mb-24`
const ContentWrapper = tw.div`flex flex-col flex-1 max-w-screen-xl`

const RecordInnerContainer = tw.div`flex flex-col flex-1 px-8 pt-16 rounded-md`
const RecordGrid = tw.div`grid grid-cols-3 mb-24 mx-12`

const RecordContainer = tw.div`z-20 flex flex-col justify-center m-2 mb-6`
const KeyContainer = tw.div`flex justify-center items-center mb-4`
const KeySignature = tw.div`text-6xl font-black text-textBlack text-center my-4`
const ElementTitle = tw.div`flex-1 text-center text-base font-medium text-secondaryDark w-8/12 mx-auto`
const ElementDescription = tw.div`text-center text-sm font-normal text-textGrayLight`

function Record({title, elements, reverse}){

    function getRelativeCoordinates(event, referenceElement) {
        const position = {
            x: event.pageX,
            y: event.pageY
        };

        const offset = {
            left: referenceElement.offsetLeft,
            top: referenceElement.offsetTop,
            width: referenceElement.clientWidth,
            height: referenceElement.clientHeight
        };

        let reference = referenceElement.offsetParent;

        while (reference) {
            offset.left += reference.offsetLeft;
            offset.top += reference.offsetTop;
            reference = reference.offsetParent;
        }

        return {
            x: position.x - offset.left,
            y: position.y - offset.top,
            width: offset.width,
            height: offset.height,
            centerX: (position.x - offset.left - offset.width / 2) / (offset.width / 2),
            centerY: (position.y - offset.top - offset.height / 2) / (offset.height / 2)
        };
    }

    const [mousePosition, setMousePosition] = useState({});
    const boxRef = useRef();
    const handleMouseMove = e => {
        setMousePosition(getRelativeCoordinates(e, boxRef.current));
    };


    return(
        <motion.div
            ref={boxRef}
            style={{
                userSelect:"none",
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                overflow:"hidden",
                borderRadius:"8px",
                position:"relative",
                marginBottom:"48px",
                marginTop:"48px",
            }}
            onMouseMove={e => handleMouseMove(e)}
            className="group"
        >
            <RecordInnerContainer>
                <motion.div
                    style={{
                        position:'absolute',
                        width:'200px',
                        height:'200px',
                        borderRadius:"50%",
                        translateX:"-66%",
                        translateY:"-82%",
                        backgroundColor: reverse ? "#fff3ed" : "#E8EEF9"
                    }}
                    animate={{
                        x: mousePosition.x,
                        y: mousePosition.y
                    }}
                    transition={{ type: "spring", stiffness: 100 }}
                    tw="shadow-lg"
                />

                <RecordTitle
                    css={reverse ? tw`text-secondaryDark` : tw`text-primaryDark`}
                >
                    {title}
                </RecordTitle>
                <RecordGrid>
                    {elements.map((elem, index)=>{
                        return(
                            <RecordContainer>
                                <KeyContainer>
                                    <KeySignature>
                                        <motion.div
                                            whileHover={{scale:1.3}}
                                            transition={{
                                                type:"spring",
                                                duration:0.3
                                            }}
                                        >
                                            {elem.signature}
                                        </motion.div>
                                    </KeySignature>
                                </KeyContainer>
                                <ElementTitle
                                    css={
                                        reverse ?
                                            tw`text-secondaryDark`
                                            :
                                            tw`text-primaryDark`
                                    }
                                >
                                    {elem.title}
                                </ElementTitle>
                                <ElementDescription>
                                    {elem.description}
                                </ElementDescription>
                            </RecordContainer>
                        )
                    })}
                </RecordGrid>
            </RecordInnerContainer>
        </motion.div>
    )
}


const elementsSales = [
    {
        signature:"90-95%",
        title:'IP sales (firm orders) before silicon qualification from contract issuance to contract sign-off',
        description:''
    },
    {
        signature:"30-50%",
        title:'IP sales (firm orders) before silicon qualification from project qualification to request for quote',
        description:''
    },
    {
        signature:"3-6mon",
        title:'Average time for IP deal closure (from project qualification)',
        description:''
    },
    {
        signature:"+10x",
        title:'Sales turnover by sales person increased by >10x in less than 3 years',
        description:''
    },
    {
        signature:"-2years",
        title:'To create and sign business opportunities at large and flagship corporations',
        description:''
    },
    {
        signature:"IP Lead",
        title:'Reached in mainland China through remote sales operation',
        description:''
    },
]

const elementsMarketing = [
    {
        signature:"x2-x4",
        title:'Average selling price compared to than competition',
        description:''
    },
    {
        signature:"x5",
        title:'ASP increase, in 3 years',
        description:''
    },
    {
        signature:"2 years",
        title:'Time to reach RoI of new IP product line after its launch',
        description:''
    },
    {
        signature:"x10",
        title:'Business growth achieve in 5 years following our Business Plan startegy',
        description:''
    },
    {
        signature:"Partnering Companies",
        title:'Accelerating market penetration',
        description:''
    },
    {
        signature:"IP Lead",
        title:'Reached in a couple of years',
        description:''
    },
]

export default function Records() {
    return(
        <Wrapper>
            <ContentWrapper>
                <Record
                    reverse={false}
                    title={"Sales activity transformation"}
                    elements={elementsSales}
                />
                <Record
                    reverse={true}
                    title={"Marketing activity transformation"}
                    elements={elementsMarketing}
                />
            </ContentWrapper>
        </Wrapper>
    )
}