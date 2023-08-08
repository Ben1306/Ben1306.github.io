/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import {SectionTitle} from "../../layouts/headings";
import {motion} from "framer-motion"

const Wrapper = tw.div`flex justify-center mx-auto`
const SectionWrapper = tw.div`flex bg-yellow justify-center py-24 my-12 w-full`
const ContentWrapper = tw.div`flex flex-1 max-w-screen-lg`

const LeftColumn = tw.div`flex flex-col w-4/12`
const BlockContainer = tw.div`flex flex-col sticky inset-y-1/2`
const RightColumn = tw.div`flex w-8/12 justify-center`

const ListContainer = tw.div`cursor-default w-8/12 flex flex-col`
const NumberContainer = tw.div`flex items-start my-4 text-right mr-4 justify-center text-8xl font-semibold`
const ListItem = tw.div`flex flex-1 flex-col my-4 rounded-md p-8`
const ListItemTitle = tw.div`mb-4 text-left text-secondaryDark text-3xl font-semibold transition duration-300`

const TextContainer = tw.div`text-textGrayMedium text-lg font-normal text-left mb-6`;


export default function Our({text, title, orientation, list}) {
    return(
        <Wrapper>
            <SectionWrapper>
                <ContentWrapper>
                    {orientation === 'left' &&
                        <LeftColumn>
                            <BlockContainer>
                                <SectionTitle
                                >
                                    {title}
                                </SectionTitle>
                                <TextContainer>
                                    {text}
                                </TextContainer>
                            </BlockContainer>
                        </LeftColumn>
                    }
                    <RightColumn>
                        <ListContainer>
                            {list.map((item,index)=>{
                                return(
                                    <motion.div
                                        key={index}
                                        css={tw`flex first:mt-0 last:mb-0 flex my-4`}
                                        whileInView={{ opacity: 1 }}
                                        initial={{ opacity: 0 }}
                                        transition={{
                                            duration: 1,
                                            delay: 0
                                        }}
                                    >
                                        <NumberContainer
                                            css={index % 2 === 0 ? tw`text-secondaryDark` : tw`text-primaryDark`}
                                        >
                                            {index + 1}
                                        </NumberContainer>
                                        <ListItem
                                            css={index % 2 === 0 ? tw`bg-secondaryLight` : tw`bg-primaryLight`}
                                        >
                                            <ListItemTitle
                                                css={index % 2 === 0 ? tw`text-secondaryDark` : tw`text-primaryDark`}
                                            >
                                                {item.title}
                                            </ListItemTitle>
                                            <motion.div
                                                css={tw`text-textBlack text-left text-base font-medium`}
                                            >
                                                {item.content}
                                            </motion.div>
                                        </ListItem>
                                    </motion.div>
                                )
                            })}
                        </ListContainer>
                    </RightColumn>
                    {orientation === 'right' &&
                        <LeftColumn>
                            <BlockContainer>
                                <SectionTitle
                                >
                                    {title}
                                </SectionTitle>
                                <TextContainer>
                                    {text}
                                </TextContainer>
                            </BlockContainer>
                        </LeftColumn>
                    }
                </ContentWrapper>
            </SectionWrapper>
        </Wrapper>
    )
}