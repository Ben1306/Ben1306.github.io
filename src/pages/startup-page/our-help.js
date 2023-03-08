/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import {ColoredLine, Button} from "../../layouts/components";
import {SectionTitle} from "../../layouts/headings";


const Wrapper = tw.div`flex flex-col p-6 py-24 relative rounded-md max-w-screen-2xl bg-textLightSecondaryBackground mx-auto mt-6 mb-24`

const TwoColumns = tw.div`flex flex-1`
const LeftColumn = tw.div`flex flex-col w-6/12 mr-1`
const RightColumn = tw.div`flex flex-col w-6/12 ml-1`

const GridContainer = tw.div`grid grid-cols-2`
const ElementContainer = tw.div`flex flex-col rounded-md bg-white shadow-contact p-4 m-2`

const HeaderContainer = tw.div`flex items-center justify-between`
const Title = tw.div`flex text-left text-lg font-medium text-textBlack mb-2`
const DotWrapper = tw.div`relative flex ml-4 w-4 h-full`
const Dot = tw.div`absolute top-0 right-0 w-4 h-4`
const Text = tw.div`flex justify-center items-center text-sm font-light mr-8 flex-1`

const BottomLinesContainer = tw.div`flex w-full mt-2`
const LineContainer = tw.div`flex flex-1 first:pl-0 last:pr-0 px-2 w-3/12`

const SubContainer = tw.div`flex justify-center absolute z-10 bottom-0 left-0 right-0`
const SubElement = tw.div`flex cursor-default shadow-contact justify-center bg-white rounded-md p-4`
const SubContainerText = tw.div`flex justify-center items-center text-base font-semibold mx-8`



function BottomLines({index, color, len}){

    return(
        <BottomLinesContainer>
            {Array.from(Array(len).keys()).map((value)=>{
                return(
                    <LineContainer key={value}>
                        <ColoredLine
                            color={color === 'blue' ? (value <= index ? "#1757C2" : "#E8EEF9") : (value <= index ? "#f55c34" : "#fff3ed")}
                            height={"4px"}
                        />
                    </LineContainer>
                )
            })}
        </BottomLinesContainer>
    )
}

function Element({element, index, color,len}){

    return(
        <ElementContainer>
            <HeaderContainer>
                <Title>
                    {element.title}
                </Title>
                <DotWrapper>
                    <Dot
                        style={{borderRadius:"50%"}}
                        css={color === 'blue' ? tw`bg-primaryDark` : tw`bg-secondaryDark`}
                    />
                </DotWrapper>
            </HeaderContainer>
            <Text>
                {element.description}
            </Text>
            <BottomLines
                index={index}
                color={color}
                len={len}
            />
        </ElementContainer>
    )
}

export default function OurHelp({blueElements, redElements}) {

    const numberBlueElements = blueElements.length
    const numberRedElements = redElements.length

    return(
        <Wrapper>
            <SectionTitle
                css={tw`self-center mb-12`}
            >
                Key Areas where we can help you
            </SectionTitle>
            <TwoColumns>
                <LeftColumn>
                    <GridContainer>
                        {blueElements.map((element,index)=>{
                            return(
                                <Element
                                    len={numberBlueElements}
                                    color={'blue'}
                                    key={index}
                                    element={element}
                                    index={index}
                                />
                            )
                        })}
                    </GridContainer>
                </LeftColumn>
                <RightColumn>
                    <GridContainer>
                        {redElements.map((element,index)=>{
                            return(
                                <Element
                                    len={numberRedElements}
                                    color={'red'}
                                    key={index}
                                    element={element}
                                    index={index}
                                />
                            )
                        })}
                    </GridContainer>
                </RightColumn>
            </TwoColumns>


            <SubContainer
                style={{
                    translate:"0 50%"
                }}
            >
                <SubElement>
                    <SubContainerText>
                        For more information
                    </SubContainerText>
                    <Button
                        color={'red'}
                        text={'Contact us'}
                        reverse={true}
                        url={"contact-us"}
                    />
                </SubElement>
            </SubContainer>
        </Wrapper>
    )
}