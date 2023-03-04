/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'

import { motion } from "framer-motion"
import {ArrowRightIcon} from "@heroicons/react/24/solid";

export const ColoredLine = ({ color,height }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: height
        }}
    />
);

const ContactButton = tw.div`flex shadow-md text-lg font-medium cursor-pointer justify-center rounded-md items-center transition duration-300`
const ContactText = tw.div``

export const Button = ({color, text, reverse}) => {

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
                    <ArrowRightIcon/>
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