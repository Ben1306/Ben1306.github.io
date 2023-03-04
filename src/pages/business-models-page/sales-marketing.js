/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import {BusinessPlansIntroduction, HeroSubTitle, SectionTitle} from "../../layouts/headings";
import {Chip} from "../../layouts/components";

const SalesMarketingWrapper = tw.div`flex flex-col justify-center max-w-screen-lg mb-14`
const TwoColContainer = tw.div`flex justify-center mb-24`
const LeftColumn = tw.div`flex flex-col w-5/12 border-solid border-gray-300 shadow-md p-4 pt-8 rounded-md mr-8 hover:shadow-xl hover:border-gray-200 transition duration-300`
const RightColumn = tw.div`flex flex-col w-5/12 border-solid border-gray-300 shadow-md p-4 pt-8 rounded-md ml-8 hover:shadow-xl hover:border-gray-200 transition duration-300`
const ChipContainer = tw.div`flex justify-center mb-4`



export default function SalesMarketing() {
    return(
            <SalesMarketingWrapper>
                <TwoColContainer>
                    <LeftColumn>
                        <ChipContainer>
                            <Chip text={"Sales"} color={'red'}/>
                        </ChipContainer>
                        <SectionTitle tw="text-center">
                            Trusted sales channel partner
                        </SectionTitle>
                        <HeroSubTitle tw="text-center">
                            We help you grow your business through the support of our team of business experts, in regions that you target. Depending on the maturity and on the complexity of your IPs we operate as sales or as business developers.
                        </HeroSubTitle>
                    </LeftColumn>
                    <RightColumn>
                        <ChipContainer>
                            <Chip text={"Marketing"} color={'blue'}/>
                        </ChipContainer>
                        <SectionTitle tw="text-center">
                            Trusted marketing partner
                        </SectionTitle>
                        <HeroSubTitle tw="text-center">
                            We handle marketing tasks which correspond to our scope of expertise. We define jointly the coverage and the expected outcome and share a quote accordingly. The quote will depend on the complexity of the task (seniority and amount of work) and on the level of expertise involved to achieve it.
                        </HeroSubTitle>
                    </RightColumn>
                </TwoColContainer>
                <BusinessPlansIntroduction>
                    We propose three business models to accommodate with your needs
                </BusinessPlansIntroduction>
            </SalesMarketingWrapper>
    )
}