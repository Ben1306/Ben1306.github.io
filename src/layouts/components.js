/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'

import { motion } from "framer-motion"
import {ArrowRightIcon, ChevronRightIcon} from "@heroicons/react/24/solid";
import {useNavigate} from "react-router-dom";

export const ColoredLine = ({ color,height }) => (
    <hr
        style={{
            marginBottom:"0px",
            color: color,
            backgroundColor: color,
            height: height,
            width:"100%",
            border:"none"
        }}
    />
);

const ContactButton = tw.button`font-display p-0 flex border-0 shadow-md text-lg font-medium cursor-pointer justify-center rounded-md items-center transition duration-300`
const ContactText = tw.div``

export const Button = ({color, text, reverse, url}) => {

    const navigate = useNavigate()

    const buttonArrow = {
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
        <ContactButton
            css={
                color === 'blue' ?
                    (reverse === true ?
                            tw`bg-primaryDark text-white`
                            :
                            tw`bg-primaryLight text-primaryDark hover:bg-primaryDark hover:text-white`
                    )
                    :
                    (reverse === true ?
                            tw`bg-secondaryDark text-white`
                            :
                            tw`bg-secondaryLight text-secondaryDark hover:bg-secondaryDark hover:text-white`
                    )
            }
            onClick={()=>{
                if(url){
                    navigate('/' + url)
                }
                else{
                    navigate('/')
                }
            }}
        >
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
                    {text}
                </ContactText>
                <motion.div
                    style={{
                        justifyContent:'center'
                    }}
                    variants={buttonArrow}
                >
                    <ArrowRightIcon css={tw`w-12`}/>
                </motion.div>
            </motion.div>
        </ContactButton>
    )
}

const TopHeaderChip = tw.div`mr-4 mb-2 py-1 px-3 rounded-full font-normal text-center text-sm border-solid`


export function Chip({color, text}) {
    return(
        <TopHeaderChip
            css={color === 'blue' ? tw`text-primaryDark bg-primaryLight border-primaryDark`: tw`text-secondaryDark bg-secondaryLight border-secondaryDark`}
        >
            {text}
        </TopHeaderChip>
    )
}

export const IconComponentContainer = tw.div`flex justify-center items-center`


const Link = tw.div`group-hover:underline mr-1`
const Container = tw.div`flex flex-row items-center cursor-pointer`

export function ButtonLink({color,text, url}){

    const navigate = useNavigate()

    return(
        <Container className={"group"}>
            <Link
                css={[
                    color === 'blue' && tw`text-primaryDark`,
                    color === 'red' && tw`text-secondaryDark`,
                    color === 'white' && tw`text-white`,
                ]}

                onClick={()=>{
                    if(url){
                        if (url.substring(0,4) === "http"){

                            window.open(url)
                        }
                        else {
                            navigate('/' + url)
                        }
                    }
                    else{
                        navigate('/')
                    }
                }}
            >
                {text}
            </Link>
            <IconComponentContainer
                css={[
                    color === 'blue' && tw`text-primaryDark`,
                    color === 'red' && tw`text-secondaryDark`,
                    color === 'white' && tw`text-white`,
                ]}
            >
                <ChevronRightIcon tw="h-4 w-4"/>
            </IconComponentContainer>
        </Container>
    )
}

const Span = tw.span``

export function SpanComponent({color, paddingX, paddingY, text}){
    return(
        <Span
            style={{
                backgroundColor:color,
                paddingLeft: paddingX,
                paddingRight:paddingX,
                paddingTop: paddingY,
                paddingBottom:paddingY,
            }}
        >
            {text}
        </Span>
    )
}