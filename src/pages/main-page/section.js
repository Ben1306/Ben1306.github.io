/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import {SectionTitle} from "../../layouts/headings";
import {Chip} from "../../layouts/components";

const Wrapper = tw.div`flex justify-center mx-auto`
const SectionWrapper = tw.div`flex justify-center py-24 my-12 w-full`
const ContentWrapper = tw.div`flex flex-1 max-w-screen-xl`

const LeftColumn = tw.div`flex flex-col w-4/12`
const RightColumn = tw.div`flex flex-col w-8/12`

const TopHeaderChipContainer = tw.div`flex mb-2`
const TextContainer = tw.div`text-textGrayMedium text-lg font-normal text-left mb-6`;

const ButtonContainer = tw.div`flex`

export default function Section({orientation, background, color, text, chips, title, button}) {
    return(
        <Wrapper>
            <SectionWrapper
                css={background ? (color === 'blue' ? tw`bg-primaryLight` : tw`bg-secondaryLight`) : tw``}
            >
                <ContentWrapper>
                    {orientation === 'right' &&
                        <RightColumn>

                        </RightColumn>
                    }
                    <LeftColumn>
                        <TopHeaderChipContainer>
                            {chips.map((chip,index)=>{
                                return(
                                    <Chip key={index} text={chip} color={color === 'blue' ? 'red' : 'blue'}/>
                                )}
                            )}
                        </TopHeaderChipContainer>
                        <SectionTitle>
                            {title}
                        </SectionTitle>
                        <TextContainer>
                            {text}
                        </TextContainer>
                        <ButtonContainer>
                            {button}
                        </ButtonContainer>
                    </LeftColumn>
                    {orientation === 'left' &&
                        <RightColumn>

                        </RightColumn>
                    }
                </ContentWrapper>
            </SectionWrapper>
        </Wrapper>
    )
}