/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import {SectionTitle} from "../../layouts/headings";
import {Bars4Icon, DocumentArrowUpIcon, ScaleIcon, PresentationChartLineIcon, ComputerDesktopIcon} from "@heroicons/react/24/solid";
import AdjustIcon from '@mui/icons-material/Adjust';
import AnimationIcon from '@mui/icons-material/Animation';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import AutoModeIcon from '@mui/icons-material/AutoMode';
import CameraIcon from '@mui/icons-material/Camera';
import {Button} from "../../layouts/components";

const Wrapper = tw.div`flex justify-center max-w-screen-xl mx-auto mb-24`
const LeftColumn = tw.div`flex flex-col w-6/12 justify-center items-center`
const RightColumn = tw.div`flex flex-col w-6/12 justify-center`

const GridContainer = tw.div`flex flex-col w-96`
const GridRow = tw.div`grid grid-cols-3`

const GridElement = tw.div`flex h-32 items-center justify-center`
const ElementIconContainer = tw.div`flex text-white items-center justify-center`

const RightGrid = tw.div`grid grid-cols-2 mb-6`
const ItemContainer = tw.div`flex flex-col p-2 m-2 rounded-md`
const ItemTop = tw.div`flex items-center mb-2`
const ItemIconContainer = tw.div`rounded-md bg-primaryLight p-2 flex justify-center items-center mr-4`
const ItemIcon = tw.div`flex justify-center text-primaryDark items-center w-6 h-6`

const ItemTitle = tw.div`flex-1 flex text-lg font-medium text-textBlack`
const ItemDescription = tw.div`text-left text-sm font-light text-textGrayLight`

const ButtonContainer = tw.div`flex`


const tools = [
    {
        icon:<Bars4Icon/>,
        title:"Market Segmentation",
        description:"Lorem ipsum dolore blablabla il faut mettre du texte."
    },
    {
        icon:<DocumentArrowUpIcon/>,
        title:"Business plan creation",
        description:"Lorem ipsum dolore blablabla il faut mettre du texte."
    },
    {
        icon:<ScaleIcon/>,
        title:"Sales negotiation",
        description:"Lorem ipsum dolore blablabla il faut mettre du texte."
    },
    {
        icon:<PresentationChartLineIcon/>,
        title:"Sales penetration plan",
        description:"Lorem ipsum dolore blablabla il faut mettre du texte."
    },
    {
        icon:<ComputerDesktopIcon/>,
        title:"Business activity monitoring",
        description:"Our methodology is adaptable to any CRM or with excel"
    }
]



function GridItem({icon, title, description}){
    return(
        <ItemContainer>
            <ItemTop>
                <ItemIconContainer>
                    <ItemIcon>
                        {icon}
                    </ItemIcon>
                </ItemIconContainer>
                <ItemTitle>
                    {title}
                </ItemTitle>
            </ItemTop>
            <ItemDescription>
                {description}
            </ItemDescription>
        </ItemContainer>
    )
}

export default function Tools() {
    return (
        <Wrapper>
            <LeftColumn>
            <GridContainer>
                <GridRow>
                    <GridElement
                        css={tw`rounded-t-full rounded-l-full bg-primaryDark`}
                    >
                        <ElementIconContainer>
                            <AutoAwesomeIcon css={tw`h-24 w-24`}/>
                        </ElementIconContainer>

                    </GridElement>
                    <GridElement
                        css={tw`rounded-t-full bg-secondaryLight`}
                    >

                    </GridElement>
                    <GridElement
                        css={tw`rounded-t-full rounded-r-full bg-primaryDark`}
                    >
                        <ElementIconContainer>
                            <AdjustIcon css={tw`h-24 w-24`}/>
                        </ElementIconContainer>
                    </GridElement>
                </GridRow>
                <GridRow>
                    <GridElement
                        css={tw`rounded-tr-tools bg-primaryLight`}
                    >

                    </GridElement>
                    <GridElement
                        css={tw`rounded-bl-tools bg-secondaryDark`}
                    >
                        <ElementIconContainer>
                            <CameraIcon css={tw`h-24 w-24`}/>
                        </ElementIconContainer>
                    </GridElement>
                    <GridElement
                        css={tw`rounded-r-full bg-secondaryDark`}
                    >

                    </GridElement>
                </GridRow>
                <GridRow>
                    <GridElement
                        css={tw`rounded-br-tools bg-primaryLight`}
                    >

                    </GridElement>
                    <GridElement
                        css={tw`rounded-tl-tools rounded-br-tools bg-secondaryLight`}
                    >
                        <ElementIconContainer>
                            <AnimationIcon css={tw`w-24 h-24 text-secondaryDark`}/>
                        </ElementIconContainer>
                    </GridElement>
                    <GridElement
                        css={tw`rounded-tr-tools bg-primaryDark`}
                    >

                    </GridElement>
                </GridRow>
                <GridRow>
                    <GridElement
                        css={tw`rounded-b-full rounded-l-full bg-secondaryDark`}
                    >
                        <ElementIconContainer>
                            <AutoModeIcon css={tw`w-24 h-24`}/>
                        </ElementIconContainer>
                    </GridElement>
                    <GridElement
                        css={tw`rounded-b-full rounded-r-full bg-primaryLight`}
                    >

                    </GridElement>
                    <GridElement
                        css={tw`rounded-b-full bg-primaryDark`}
                    >
                        <ElementIconContainer>
                            <AutoGraphIcon css={tw`w-24 h-24`}/>
                        </ElementIconContainer>
                    </GridElement>
                </GridRow>
            </GridContainer>
            </LeftColumn>


            <RightColumn>
                <SectionTitle>
                    We operate with effective tools that we have created or that we leverage
                </SectionTitle>
                <RightGrid>
                    {tools.map((tool,index)=>{
                        return(
                            <GridItem
                                key={index}
                                icon={tool.icon}
                                title={tool.title}
                                description={tool.description}
                            />
                        )
                    })}
                </RightGrid>
                <ButtonContainer>
                    <Button text={'Contact us for more information'} color={'blue'} reverse={true}/>
                </ButtonContainer>
            </RightColumn>
        </Wrapper>
    )
}