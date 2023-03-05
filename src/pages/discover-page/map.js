/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import { ComposableMap, Geographies, Geography } from "react-simple-maps"
import JsonMap from './map.json'
import {MapTitle} from "../../layouts/headings";
import {Button} from "../../layouts/components";

const Wrapper = tw.div`flex justify-center mx-auto max-w-screen-xl`

const LeftCol = tw.div`flex flex-col w-5/12 ml-12`
const DetailText = tw.div`text-lg font-semibold text-textGrayMedium text-left mb-8`

const GridContainer = tw.div`grid grid-cols-2 mb-6`
const GridElement = tw.div`flex items-center`
const LeftLogoContainer = tw.div`flex justify-center items-center w-10 h-10 text-secondaryDark`
const RightContainer = tw.div`flex flex-1 flex-col`
const ElementTitle = tw.div`font-semibold text-lg text-textBlack`
const ElementDescription = tw.div`font-normal text-sm text-textGrayLight`

const ButtonContainer = tw.div`flex`

const RightCol = tw.div`flex justify-center items-center w-7/12`



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
    "BEL"
]


export default function Map() {
    return(
        <Wrapper>
            <LeftCol>
                <MapTitle>
                    Our market coverage
                </MapTitle>
                <DetailText>
                    We have a large database of contacts in many different continents
                </DetailText>
                <GridContainer>
                    <GridElement>
                        <LeftLogoContainer>

                        </LeftLogoContainer>
                        <RightContainer>
                            <ElementTitle>

                            </ElementTitle>
                            <ElementDescription>

                            </ElementDescription>
                        </RightContainer>
                    </GridElement>
                </GridContainer>
                <ButtonContainer>
                    <Button text={'Ask us directly for more information'} color={'red'} reverse={false}/>
                </ButtonContainer>
            </LeftCol>
            <RightCol>
                <ComposableMap
                    projection="geoMercator"
                    projectionConfig={{
                        rotate: [-10, 0, 0],
                        scale: 100
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