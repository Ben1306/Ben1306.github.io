/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import { ComposableMap, Geographies, Geography } from "react-simple-maps"
import {CircleStackIcon, UserGroupIcon, CpuChipIcon, MapIcon} from "@heroicons/react/24/solid";

import JsonMap from './map.json'
import {MapTitle} from "../../layouts/headings";
import {Button} from "../../layouts/components";

const Wrapper = tw.div`flex justify-center mx-auto max-w-screen-xl mt-24 mb-48`

const LeftCol = tw.div`flex flex-col w-6/12 ml-12`

const GridContainer = tw.div`grid grid-cols-2 mt-2 mb-6`
const GridElement = tw.div`flex flex-col p-2 m-2 rounded-md`

const TopContainer = tw.div`flex items-center mb-2`
const ItemIconContainer = tw.div`rounded-md bg-secondaryLight p-2 flex justify-center items-center mr-4`
const ItemIcon = tw.div`flex justify-center text-secondaryDark items-center w-6 h-6`

const ItemTitle = tw.div`flex-1 flex text-lg font-medium text-textBlack`
const ItemDescription = tw.div`text-left text-sm font-light text-textGrayLight`


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
                <MapTitle css={tw`mb-2`}>
                    Our pool of knowledge and market coverage
                </MapTitle>
                <GridContainer>
                    {elements.map((elem,index)=>{

                        return(
                            <GridElement key={index}>
                                <TopContainer>
                                    <ItemIconContainer
                                        style={{
                                            borderRadius:"50%",
                                        }}
                                    >
                                        <ItemIcon>
                                            {elem.logo}
                                        </ItemIcon>
                                    </ItemIconContainer>
                                    <ItemTitle>
                                        {elem.title}
                                    </ItemTitle>
                                </TopContainer>
                                <ItemDescription>
                                    {elem.description}
                                </ItemDescription>
                            </GridElement>
                        )
                    })}
                </GridContainer>
                <ButtonContainer>
                    <Button text={'Contact us for more information'} color={'red'} reverse={true}/>
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