/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'

import {ChevronDownIcon, ArrowRightIcon, BeakerIcon, BuildingOffice2Icon} from "@heroicons/react/24/solid";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import { motion } from "framer-motion"
import {ButtonLink, IconComponentContainer} from "../layouts/components";

const TopHeaderContainer = tw.div`flex flex-row justify-center py-2 font-normal text-center w-full text-sm bg-primaryLight text-primaryDark`

const HeaderStickyWrapper = tw.div`flex sticky top-0 z-80 font-bold text-3xl bg-transparent h-16 transition duration-300 border-solid border-b-bgWhite border-x-0 border-t-0`
const HeaderContainer = tw.div`flex items-center max-w-screen-xl mx-auto w-full`
const HeaderLogo = tw.div`cursor-pointer flex items-center font-semibold text-xl hover:text-primaryDark transition duration-300`
const LogoContainer = tw.div`w-8 h-8 flex justify-center items-center bg-secondaryDark mr-4`

const HeaderLinks = tw.div`ml-8 flex-1 flex justify-end`
const Link = tw.div`mx-1 text-base font-normal cursor-pointer flex justify-center p-2 rounded-md items-center bg-white text-textBlack hover:bg-textGrayBackground transition duration-300`

const DropdownLink = tw(Link)`cursor-default inline relative whitespace-nowrap p-0`;
const DropdownButton = tw.div`flex items-center p-2`
const DropdownText = tw.div`mr-2`
const DropdownSubMenuWrapper = tw.div`hidden absolute right-0 z-80 group-hover:block bg-transparent`
const DropdownContent = tw.div`mt-4 p-2 rounded-md bg-white shadow-2xl`
const DropdownList = tw.div`flex flex-col`
const DropdownItem = tw.div`flex items-center cursor-pointer p-4 text-textBlack rounded-md hover:bg-textGrayBackground`
const DropdownItemIcon = tw.div`flex justify-center items-center w-8 h-8 mr-4`
const DropdownItemTitle = tw.div`flex-1 text-lg font-normal text-left`

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

export default function Header() {

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

    return(
        <HeaderStickyWrapper
            css={sticked ? tw`bg-white border-textGrayBackground transition duration-300` : tw`bg-transparent`}
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
                                                                {/*
                                                                <DropdownItemIcon
                                                                    style={{borderRadius:"50%"}}
                                                                    css={tw`bg-primaryLight text-primaryDark`}
                                                                >
                                                                    <IconComponentContainer css={tw`w-4 h-4`}>
                                                                        <BeakerIcon/>
                                                                    </IconComponentContainer>
                                                                </DropdownItemIcon>
                                                                */}
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
            </HeaderContainer>
        </HeaderStickyWrapper>
    )
}



/*
const Container = tw.div`h-16 flex items-center content-center text-primaryBlue bg-white px-2 md:px-10 border-solid border-gray-400 border-0 border-b`;
const SiteName = tw.div`font-black text-xl mr-4 select-none`;
const LogoContainer = tw.div`flex h-8 w-8 justify-center items-center`;
const CenterFill = tw.div`flex-1`;
const Link = tw.div`cursor-pointer text-center font-semibold text-lg mx-6 last:mr-0 px-2 border-solid border-primaryOrange hover:border-primaryBlue rounded-md text-primaryOrange hover:text-white hover:bg-primaryBlue transition duration-500`;
const IconContainer = tw.div`cursor-pointer text-primaryBlue w-10 h-10 relative`;

const Desktop = tw.div`hidden md:flex flex-1`;
const Mobile = tw.div`flex md:hidden flex-1 flex justify-end`;

const MobileContainer = tw.div`
md:hidden z-1 fixed inset-0 text-center
text-black bg-white
select-none
`;

const MobileTitle = tw.div`flex text-darkViolet text-xl items-center pl-4 h-16 text-left font-bold border-solid border-gray-400 border-l-0 border-r-0 border-t-0`
const MobileItem = tw.div`cursor-pointer flex items-center py-2 px-4 my-1 mx-3 rounded-md focus:bg-secondaryOrange`;
const MobileIconItem = tw.div`w-8 h-8 flex justify-center items-center content-center`;
const MobileLink = tw.div`text-center text-xl font-semibold text-darkViolet flex-1`
const MobileRound = tw.div`bg-primaryOrange w-4 h-4`


export default function BlogHeader() {

    const navigate = useNavigate()
    const [openMobileLinks,setOpenMobileLinks] = useState(false);

    return (
        <Container>
            <SiteName>
                Ben en Australie
            </SiteName>
            <LogoContainer>
                <img style={{width:"100%"}} src={kangourou} alt="Kangourou"/>
            </LogoContainer>

            <Desktop>
                <CenterFill/>
                <Link
                    onClick={() =>{navigate('/')}}
                    css={window.location.pathname === '/' ? tw`border-primaryBlue text-primaryBlue hover:text-primaryBlue hover:bg-white` : tw``}
                >
                    Introduction
                </Link>
                <Link
                    onClick={() =>{navigate('/blog')}}
                    css={window.location.pathname === '/blog' ? tw`border-primaryBlue text-primaryBlue hover:text-primaryBlue hover:bg-white` : tw``}
                >
                    Blog
                </Link>
                <Link
                    onClick={() =>{navigate('/map')}}
                    css={window.location.pathname === '/map' ? tw`border-primaryBlue text-primaryBlue hover:text-primaryBlue hover:bg-white` : tw``}
                >
                    Carte
                </Link>
            </Desktop>

            <Mobile>
                <IconContainer style={openMobileLinks ? {zIndex:10} : {zIndex:0}} onClick={()=>{setOpenMobileLinks(prevState => !prevState)}}>
                    {openMobileLinks ? <XMarkIcon tw="text-primaryBlue"/> : <Bars3BottomRightIcon/>}
                </IconContainer>

                <MobileContainer css={openMobileLinks ? tw`block` : tw`hidden`}>

                    <MobileTitle>
                        <div>
                            MENU
                        </div>
                        <img src={traveller} alt={'Surf Board'} style={{height:"80%"}}/>
                    </MobileTitle>

                    <MobileItem
                        onClick={() =>{navigate('/')}}
                        css={window.location.pathname === '/' ? tw`bg-secondaryOrange` : tw``}
                    >
                        <MobileRound
                            style={{borderRadius:"50%"}}
                            css={window.location.pathname === '/' ? tw`bg-primaryBlue` : tw``}
                        />
                        <MobileLink>
                            Introduction
                        </MobileLink>
                        <MobileIconItem>
                            <ArrowRightIcon/>
                        </MobileIconItem>
                    </MobileItem>

                    <MobileItem
                        onClick={() =>{navigate('/blog')}}
                        css={window.location.pathname === '/blog' ? tw`bg-secondaryOrange` : tw``}
                    >
                        <MobileRound
                            style={{borderRadius:"50%"}}
                            css={window.location.pathname === '/blog' ? tw`bg-primaryBlue` : tw``}
                        />
                        <MobileLink>
                            Blog
                        </MobileLink>
                        <MobileIconItem>
                            <ArrowRightIcon/>
                        </MobileIconItem>
                    </MobileItem>

                    <MobileItem
                        onClick={() =>{navigate('/map')}}
                        css={window.location.pathname === '/map' ? tw`bg-secondaryOrange` : tw``}
                    >
                        <MobileRound
                            style={{borderRadius:"50%"}}
                            css={window.location.pathname === '/map' ? tw`bg-primaryBlue` : tw``}
                        />
                        <MobileLink>
                            Carte
                        </MobileLink>
                        <MobileIconItem>
                            <ArrowRightIcon/>
                        </MobileIconItem>
                    </MobileItem>

                </MobileContainer>

            </Mobile>

        </Container>
    );
}
*/