/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'

import {ChevronDownIcon, ChevronRightIcon, ArrowRightIcon, BeakerIcon, BuildingOffice2Icon} from "@heroicons/react/24/solid";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"
import {ButtonLink, IconComponentContainer} from "../layouts/components";
import {Bars3BottomRightIcon, XMarkIcon} from "@heroicons/react/24/solid";

const TopHeaderContainer = tw.div`hidden md:flex flex-row justify-center py-2 font-normal text-center w-full text-sm bg-primaryLight text-primaryDark`

const HeaderStickyWrapper = tw.div`flex sticky top-0 z-80 font-bold text-3xl bg-transparent h-16 transition duration-300 border-solid border-b-bgWhite border-x-0 border-t-0`
const HeaderContainer = tw.div`flex items-center max-w-screen-xl mx-auto w-full px-4 2xl:px-0`
const HeaderLogo = tw.div`cursor-pointer flex items-center font-semibold text-xl hover:text-primaryDark transition duration-300`
const LogoContainer = tw.div`w-8 h-8 flex justify-center items-center bg-secondaryDark mr-4`

const HeaderLinks = tw.div`hidden md:flex ml-8 flex-1 justify-end`
const Link = tw.div`mx-1 text-base font-normal cursor-pointer flex justify-center p-2 rounded-md items-center bg-white text-textBlack hover:bg-textGrayBackground transition duration-300`

const DropdownLink = tw(Link)`cursor-default inline relative whitespace-nowrap p-0`;
const DropdownButton = tw.div`flex items-center p-2`
const DropdownText = tw.div`mr-2`
const DropdownSubMenuWrapper = tw.div`hidden absolute right-0 z-80 group-hover:block bg-transparent`
const DropdownContent = tw.div`mt-4 p-2 rounded-md bg-white shadow-2xl`
const DropdownList = tw.div`flex flex-col`
const DropdownItem = tw.div`flex items-center cursor-pointer p-4 text-textBlack rounded-md hover:bg-textGrayBackground`
const DropdownItemIcon = tw.div`flex justify-center items-center w-8 h-8 mr-4`
const DropdownItemTitle = tw.div`flex-1 text-base font-normal text-left`

const Contact = tw.div`flex mx-1 text-base font-normal cursor-pointer justify-center rounded-md items-center bg-primaryDark text-white`
const ContactText = tw.div``


export function TopHeader({text, url}) {
    return(
        <TopHeaderContainer>
            <div css={url && tw`mr-2`}>{text}</div>
            {url &&
                <ButtonLink
                    color={'blue'}
                    url={url}
                    text={'Learn more'}
                />
            }
        </TopHeaderContainer>
    )
}

const headerLinks = [
    {
        type:"link",
        url:"/business-models",
        label:"Business Models",
    },
    {
        type:"group",
        label:"You are",
        nested:[
            {
                type:"link",
                url:"/startup",
                label:"Start-up IP company",
            },
            {
                type:"link",
                url:"/established-company",
                label:"Established IP company",
            },
        ]
    },
    {
        type:"group",
        label:"Our expertise",
        nested:[
            {
                type:"link",
                url:"/values-and-skills",
                label:"Values and skills",
            },
            {
                type:"link",
                url:"/approach-and-business-tools",
                label:"Approach and business tools",
            },
            {
                type:"link",
                url:"/track-records",
                label:"Our track records",
            },
        ]
    },
]


const mobileMenuVariants = {
    closed:{
        height:0,
        //display:"none",
    },
    open:{
        height:"auto",
        //display:"flex",
    }
}

const arrowRotation = {
    rest: { rotate:0},
    hover: {
        rotate:180,
        transition: {
            duration: 0.2,
            type: "tween",
            ease: "easeIn"
        }
    }
};

const contactArrow = {
    rest: { display:"hidden", width:0, translateX:-10, opacity:"0%", marginLeft:0},
    hover: {
        width:"16px",
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

export default function Header({transparent=true}) {

    const [sticked, setSticked] = useState(false)
    const navigate = useNavigate();

    useEffect(
        ()=>{
            if (typeof window !== "undefined") {
                window.addEventListener("scroll", () =>
                    setSticked(window.scrollY > 36)
                );
            }
        },
        [setSticked]
    )

    const [openMobileLinks,setOpenMobileLinks] = useState(false);
    const [mobileSelectedLink, setMobileSelectedLink] = useState(null);

    return(
        <HeaderStickyWrapper
            css={[
                transparent && (sticked ? tw`bg-white border-textGrayBackground transition duration-300` : tw`bg-transparent`),
                !transparent && tw`bg-white`
            ]}
        >
            <HeaderContainer>
                <HeaderLogo
                    onClick={
                        ()=> {navigate('/')}
                    }
                >
                    <LogoContainer
                        style={{
                            borderRadius:"50%"
                        }}
                    />
                    FlySemi
                </HeaderLogo>
                <HeaderLinks>
                    {headerLinks.map((obj,index)=>{
                        if(obj.type === "link"){
                            return(
                                <Link
                                    key={obj.label + index.toString()}
                                    onClick={
                                        ()=> {navigate(obj.url)}
                                    }
                                >
                                    {obj.label}
                                </Link>
                            )
                        }
                        else{
                            return(
                                <DropdownLink className="group" key={obj.label + index.toString()}>
                                    <motion.div
                                        initial="rest"
                                        whileHover="hover"
                                        animate="rest"
                                    >
                                        <DropdownButton>
                                            <DropdownText>
                                                {obj.label}
                                            </DropdownText>
                                            <motion.div
                                                style={{
                                                    width:"16px",
                                                    height:"16px",
                                                    display:'flex',
                                                    justifyContent:'center',
                                                    justifyItems:'center'
                                                }}
                                                variants={arrowRotation}
                                            >
                                                <ChevronDownIcon/>
                                            </motion.div>
                                        </DropdownButton>
                                        <DropdownSubMenuWrapper>
                                            <DropdownContent>
                                                <DropdownList>
                                                    {obj.nested.map((nestedObj,index)=>{
                                                        return(
                                                            <DropdownItem
                                                                key={obj.label + index.toString()}
                                                                onClick={
                                                                    ()=> {
                                                                        navigate(nestedObj.url)
                                                                    }
                                                                }
                                                            >
                                                                <DropdownItemIcon
                                                                    style={{borderRadius:"50%"}}
                                                                    css={tw`bg-primaryLight text-primaryDark`}
                                                                >
                                                                    <IconComponentContainer css={tw`w-4 h-4`}>
                                                                        <BeakerIcon/>
                                                                    </IconComponentContainer>
                                                                </DropdownItemIcon>

                                                                <DropdownItemTitle>
                                                                    {nestedObj.label}
                                                                </DropdownItemTitle>
                                                            </DropdownItem>
                                                        )
                                                    })}
                                                </DropdownList>
                                            </DropdownContent>
                                        </DropdownSubMenuWrapper>
                                    </motion.div>
                                </DropdownLink>
                            )
                        }
                    })}
                    <Contact
                        onClick={
                            ()=> {navigate('/contact-us')}
                        }
                    >
                        <motion.div
                            style={{
                                display:'flex',
                                padding:'8px',
                                justifyContent:'center',
                                justifyItems:'center'
                            }}
                            whileHover="hover"
                            initial="rest"
                            animate="rest"
                        >
                            <ContactText>
                                Contact
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
                    </Contact>
                </HeaderLinks>


                <MobileLinks>
                    <IconContainer style={openMobileLinks ? {zIndex:10} : {zIndex:0}} onClick={()=>{setOpenMobileLinks(prevState => !prevState)}}>
                        {openMobileLinks ? <XMarkIcon tw="text-white"/> : <Bars3BottomRightIcon/>}
                    </IconContainer>
                    <motion.div
                        initial='closed'
                        variants={mobileMenuVariants}
                        animate={openMobileLinks ? "open" : "closed"}
                        transition={{
                            type:"easeIn",
                            duration:0.5
                        }}
                        css={[
                            openMobileLinks ? tw`block` : tw`hidden`,
                            tw`
                            md:hidden z-1 fixed inset-0
                            text-textBlack bg-headerBG select-none
                            `
                        ]}
                    >
                                <MobileDropdownLinks
                                    open={openMobileLinks}
                                    selected={mobileSelectedLink}
                                    setSelected={setMobileSelectedLink}
                                    links={headerLinks}
                                />

                    </motion.div>
                </MobileLinks>
            </HeaderContainer>
        </HeaderStickyWrapper>
    )
}


const MobileLinks = tw.div`flex md:hidden flex-1 flex justify-end`;
const IconContainer = tw.div`cursor-pointer text-textBlack w-10 h-10 relative`;

const MobileLink = tw.div`flex w-full cursor-pointer text-3xl font-normal mb-4`
const MobileDropdownLinkText = tw.div`flex-1 text-3xl font-normal`

const mobileArrowRotation = {
    closed: { rotate:0},
    deployed: {
        rotate:90,
        transition: {
            duration: 0.2,
            type: "tween",
            ease: "easeIn"
        }
    }
};

const mobileSubLinkContainerVariants = {
    closed: {
        display:"none",
        opacity:"0%",
        height:0,
        marginBottom:0,
        transition: {
            duration: 0.2,
            type: "tween",
            ease: "easeInOut",
            height:{
                delay: 0.2
            },
            display:{
                delay:0.4
            }
        }
    },
    deployed: {
        display:"flex",
        height:"auto",
        opacity:"100%",
        marginBottom:"4px",
        transition: {
            duration: 0.2,
            type: "tween",
            ease: "easeInOut",
            opacity:{
                delay: 0.2
            }
        }
    }
}



function MobileDropdownLinks({open, selected, setSelected, links}){


    function toggleSelect(obj){
        if(selected === obj){
            setSelected(null);
        }
        else{
            setSelected(obj)
        }
    }

    const navigate = useNavigate();
    return(
        <AnimatePresence>
            {open &&
                <motion.div
                    css={tw`mt-24 flex flex-col items-start pl-8 pr-4 text-white`}
                    initial={{ opacity: 0, transform:"translateX(-50px)" }}
                    animate={{ opacity: 1, transform:"translateX(0px)" }}
                    transition={{ ease: "easeOut", delay:0.2 }}
                    exit={{ opacity: 0, transition:{delay:0} }}
                >
                    {links.map((obj,index)=>{
                        if(obj.type === "link"){
                            return(
                                <MobileLink
                                    key={obj.label + index.toString()}
                                    onClick={
                                        ()=> {navigate(obj.url)}
                                    }
                                >
                                    {obj.label}
                                </MobileLink>
                            )
                        }
                        else{
                            return(
                                <div css={tw`flex w-full flex-col`}>
                                    <motion.div
                                        css={tw`flex flex-1 cursor-pointer mb-4`}
                                        key={obj.label + index.toString()}
                                        initial="closed"
                                        animate={selected === obj ? "deployed" : "closed"}
                                        onClick={()=>{toggleSelect(obj)}}
                                    >
                                        <MobileDropdownLinkText>
                                            {obj.label}
                                        </MobileDropdownLinkText>
                                        <motion.div
                                            css={tw`flex justify-center items-center w-8 h-8 text-white`}
                                            variants={mobileArrowRotation}
                                        >
                                            <ChevronRightIcon/>
                                        </motion.div>
                                    </motion.div>
                                    <motion.div
                                        css={tw`flex flex-col justify-center pl-8 text-left`}
                                        //initial="closed"
                                        //animate={selected === obj ? "deployed" : "closed"}
                                        //variants={mobileSubLinkContainerVariants}
                                    >
                                        {obj.nested.map((nestedObj,index)=>{
                                            return(
                                                <motion.div
                                                    css={tw`cursor-pointer text-white text-xl font-normal mb-2`}
                                                    initial="closed"
                                                    animate={selected === obj ? "deployed" : "closed"}
                                                    variants={mobileSubLinkContainerVariants}
                                                    onClick={
                                                        ()=> {navigate(nestedObj.url)}
                                                    }
                                                >
                                                    {nestedObj.label}
                                                </motion.div>
                                            )
                                        })}
                                    </motion.div>
                                </div>
                            )
                        }
                    })}
                    <MobileLink
                        css={tw`text-secondaryDark`}
                        key={"Contact"}
                        onClick={
                            ()=> {navigate("/contact-us")}
                        }
                    >
                        Contact us
                    </MobileLink>
                </motion.div>
            }

        </AnimatePresence>
    )
}