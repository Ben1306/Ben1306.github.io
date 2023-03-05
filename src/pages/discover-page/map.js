/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import { ComposableMap, Geographies, Geography } from "react-simple-maps"
import {CircleStackIcon, UserGroupIcon, CpuChipIcon, MapIcon} from "@heroicons/react/24/solid";

import JsonMap from './map.json'
import {MapTitle} from "../../layouts/headings";
import {Button} from "../../layouts/components";

const Wrapper = tw.div`flex justify-center mx-auto max-w-screen-xl my-24`

const LeftCol = tw.div`flex flex-col w-6/12 ml-12`
const DetailText = tw.div`text-lg font-semibold text-textGrayMedium text-left mb-8`

const GridContainer = tw.div`grid grid-cols-2 mb-6`
const GridElement = tw.div`flex items-center mr-4 mb-4`
const LeftLogoContainer = tw.div`flex self-start justify-center items-center w-10 h-10 bg-secondaryLight mr-2`
const LeftLogo = tw.div`flex justify-center items-center w-6 h-6 text-secondaryDark`
const RightContainer = tw.div`flex flex-1 flex-col self-start`
const ElementTitle = tw.div`font-semibold text-lg text-textBlack`
const ElementDescription = tw.div`font-normal text-sm text-textGrayLight`

const ButtonContainer = tw.div`flex`

const RightCol = tw.div`flex justify-center items-center w-6/12`



const coloredCountriesID = [
    "USA",
    "CHN",
    "SGP",
    "PRK",
    "KOR",
    "TWN",
    "ISR",

    //EUROPE
    "FRA",
    "ESP",
    "GBR",
    "DEU",
    "CHE",
    "ITA",
    "PRT",
    "LUX",
    "BEL",
    "IRL",
    "NOR",
    "SWE",
    "DNK",
    "NLD"
]

const elements = [
    {
        logo:<CircleStackIcon/>,
        title:"Large database of contacts",
        description:"Lorem Ipsum dolore il faut remplir le contenu de ce petit paragraphe."
    },
    {
        logo:<MapIcon/>,
        title:"Market coverage",
        description:"We master the industry in Mainland China, Taiwan, USA, Korea, Singapour, Europe, Taiwan and Israel."
    },
    {
        logo:<UserGroupIcon/>,
        title:"Team of experts",
        description:"Lorem Ipsum dolore il faut remplir le contenu de ce petit paragraphe."
    },

    {
        logo:<CpuChipIcon/>,
        title:"Strong knowledge of the semiconductor industry",
        description:"Lorem Ipsum dolore il faut remplir le contenu de ce petit paragraphe."
    }
]


export default function Map() {
    return(
        <Wrapper>
            <LeftCol>
                <MapTitle>
                    Our pool of knowledge and market coverage
                </MapTitle>
                <DetailText>
                    Lorem Ipsum dolore il faut remplir le contenu de ce petit paragraphe.
                </DetailText>
                <GridContainer>
                    {elements.map((elem)=>{

                        return(
                            <GridElement>
                                <LeftLogoContainer
                                    style={{
                                        borderRadius:"50%",
                                    }}
                                >
                                    <LeftLogo>
                                        {elem.logo}
                                    </LeftLogo>
                                </LeftLogoContainer>
                                <RightContainer>
                                    <ElementTitle>
                                        {elem.title}
                                    </ElementTitle>
                                    <ElementDescription>
                                        {elem.description}
                                    </ElementDescription>
                                </RightContainer>
                            </GridElement>
                        )
                    })}
                </GridContainer>
                <ButtonContainer>
                    <Button text={'Contact us for more information'} color={'red'} reverse={false}/>
                </ButtonContainer>
            </LeftCol>
            <RightCol>
                <ComposableMap
                    projection="geoMercator"
                    projectionConfig={{
                        rotate: [-10, 0, 0],
                        scale: 110,
                        center:[0,45]
                    }}
                >
                    <Geographies geography={JsonMap}>
                        {({ geographies }) =>
                            geographies.map((geo) => {
                                return (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        fill={coloredCountriesID.includes(geo.id) ? "#1757C2" : "#E8EEF9"}
                                    />
                                );
                            })
                        }
                    </Geographies>
                </ComposableMap>
            </RightCol>
        </Wrapper>
    )
}