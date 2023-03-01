/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import {Bars3BottomRightIcon, XMarkIcon, ArrowRightIcon} from "@heroicons/react/24/outline";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const TopHeaderContainer = tw.div`sticky top-0 z-1 text-center w-full text-sm bg-green-700`


const HeaderStickyWrapper = tw.div`flex sticky top-0 z-10 font-bold text-3xl bg-blue-300 h-20`
const HeaderContainer = tw.div`flex items-center max-w-screen-xl mx-auto w-full`
const HeaderLogo = tw.div`flex items-center justify-center`
const HeaderLinks = tw.div`ml-8 flex-1 flex`

export function TopHeader({text}) {
    return(
        <TopHeaderContainer>
            {text}
        </TopHeaderContainer>
    )
}

export default function Header() {
    return(
        <HeaderStickyWrapper>
            <HeaderContainer>
                <HeaderLogo>
                    FLY-SEMI
                </HeaderLogo>
                <HeaderLinks>
                    BONSOIR LE HEADER QUOI
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