/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import {useNavigate} from "react-router-dom";


import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

const FooterWrapper = tw.div`flex flex-col max-w-screen-lg mx-auto`
const FooterColumnsContainer = tw.div`flex mb-4`

const LogoColumn = tw.div`flex flex-col flex-grow-2`
const FooterLogo = tw.div`mb-3 flex items-center justify-start font-semibold text-xl transition duration-300`
const PostalAddress = tw.div`py-1 text-xs font-light text-textGrayMedium text-left`

const LeftColumn = tw.div`flex flex-col flex-1`
const RightColumn = tw.div`flex flex-col flex-1`

const ColumnTitle = tw.div`mb-3 flex items-center justify-start font-semibold text-lg`
const ColumnLink = tw.div`cursor-pointer py-1 text-left text-textGrayMedium font-light text-sm hover:text-primaryDark transition duration-300`

const SocialLinksContainer = tw.div`flex items-center mb-4`
const SocialLinksDescription = tw.div`text-left font-medium text-base`
const SocialLinksRightContainer = tw.div`flex flex-1 justify-end`
const SocialLink = tw.div`cursor-pointer flex justify-center items-center w-10 h-10 bg-primaryLight text-primaryDark rounded-md mx-4 last:mr-0 hover:text-white hover:bg-primaryDark transition duration-300`

export default function Footer() {

    const navigate = useNavigate()
    return(
        <FooterWrapper>
            <FooterColumnsContainer>
                <LogoColumn>
                    <FooterLogo
                        onClick={
                            ()=> {navigate('/')}
                        }
                    >
                        FlySemi
                    </FooterLogo>
                    <PostalAddress>
                        © FlySemi Inc, All rights reserved
                        <br/>
                        1 rue Général Marchand
                        <br/>
                        38000 GRENOBLE, FRANCE
                    </PostalAddress>
                </LogoColumn>
                <LeftColumn>
                    <ColumnTitle>
                        Our expertise
                    </ColumnTitle>
                    <ColumnLink>
                        Discover Us
                    </ColumnLink>
                    <ColumnLink>
                        Track records
                    </ColumnLink>
                    <ColumnLink>
                        Business Plans
                    </ColumnLink>
                    <ColumnLink>
                        FAQ
                    </ColumnLink>
                </LeftColumn>
                <RightColumn>
                    <ColumnTitle>
                        About
                    </ColumnTitle>
                    <ColumnLink>
                        Terms of service
                    </ColumnLink>
                    <ColumnLink>
                        Privacy Policy
                    </ColumnLink>
                    <ColumnLink>
                        Legal Notices
                    </ColumnLink>

                </RightColumn>
            </FooterColumnsContainer>
            <SocialLinksContainer>
                <SocialLinksDescription>
                    Follow our activity on social medias:
                </SocialLinksDescription>
                <SocialLinksRightContainer>
                    <SocialLink>
                        <LinkedInIcon/>
                    </SocialLink>
                    <SocialLink
                        css={tw`bg-secondaryLight text-secondaryDark hover:text-white hover:bg-secondaryDark`}
                    >
                        <YouTubeIcon/>
                    </SocialLink>
                    <SocialLink>
                        <TwitterIcon/>
                    </SocialLink>
                </SocialLinksRightContainer>
            </SocialLinksContainer>
        </FooterWrapper>
    )
}