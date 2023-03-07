/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import {RocketLaunchIcon, PresentationChartLineIcon, BoltIcon, CheckIcon, MinusIcon} from "@heroicons/react/24/outline";

const Wrapper = tw.div`flex justify-center mx-auto`
const ContentWrapper = tw.div`flex flex-col items-center flex-1`
const PricingWrapper = tw.div`flex flex-col my-8 mb-32 max-w-screen-xl w-full mx-auto text-textBlack`

const GridHeader = tw.div`grid grid-cols-pricing mb-4`

const GridNamesContainer = tw.div`flex flex-col items-center mb-6`
const GridNamesIcon = tw.div`flex justify-center items-center w-12 h-12 text-secondaryDark bg-secondaryLight mb-4`
const NamesStyle = tw.div`flex justify-center items-center text-textBlack text-2xl font-medium`

const GridCommissionContainer = tw.div`flex justify-center items-center text-center font-semibold text-2xl`
const GridFeesContainer = tw.div`flex justify-center items-center text-center text-primaryDark font-medium text-base px-4`

const GridContainer = tw.div`grid grid-cols-pricing`

const GridLabelContainer = tw.div`grid grid-cols-1`
const GridLabelStyle = tw.div`h-10 py-3 px-3 flex items-center justify-start font-normal text-base`

const GridSolutionContainer = tw.div`grid grid-cols-1`
const GridSolutionLayout = tw.div`h-10 py-3 px-3 flex justify-center text-center items-center text-sm font-normal text-textGrayMedium`
const GridSolutionIconContainer = tw.div`flex justify-center text-primaryDark text-center w-5 h-5`


const GridAsterix = tw.div`flex text-left pl-2 italic text-base font-normal text-textGrayDark`


function GridBundleItem ({text, index}){
    return(
        <GridSolutionLayout css={index % 2 === 0 ?tw`bg-textLightPrimaryBackground` :  tw``} key={index}>
            {text==='yes' &&
                    <GridSolutionIconContainer>
                        <CheckIcon/>
                    </GridSolutionIconContainer>
            }
            {text==='no' &&
                <GridSolutionIconContainer css={tw`text-secondaryDark`}>
                    <MinusIcon/>
                </GridSolutionIconContainer>
            }
            {text === 'yes*' &&
                <div tw="flex text-secondaryDark">
                    <GridSolutionIconContainer>
                        <CheckIcon/>
                    </GridSolutionIconContainer>
                    {"*"}
                </div>
            }
            {text !== 'yes' && text !=='no' && text !== 'yes*' &&
                text
            }
        </GridSolutionLayout>
    )
}

export default function PricingTable() {

    const falseData = {
        header: [
            {
                text:"",
                icon: <></>,
            },
            {
                text:"Starter",
                icon:
                    <PresentationChartLineIcon
                        style={{
                            width:"22px",height:"22px"
                        }}
                    />
            },
            {
                text:"Advanced",
                icon:
                    <BoltIcon
                        style={{
                            width:"22px",height:"22px"
                        }}
                    />
            },
            {
                text:"All Inclusive",
                icon:
                    <RocketLaunchIcon
                        style={{
                            width:"22px",height:"22px"
                        }}
                    />
            },
        ],
        commission: ["Commission rates","10%", "15%", "20%"],
        fees: ["Monthly retainer fee", "Depends on targets and business maturity ", "Depends on targets and business maturity ", "Depends on targets and business maturity"],
        labels: [
            "Customer profiling",
            "Lead generation",
            "Lead qualification",
            "Value proposition articulation",
            "Customer evaluation coordination",
            "Pricing model elaboration",
            "Quoting and business negotiation",
            "License agreement negotiation",
            "Event representation",
            "Sales channel development (team hiring and training)",
        ],
        starter: [
            "no",
            "no",
            "yes",
            "yes",
            "yes",
            "no",
            "yes",
            "no",
            "no",
            "Option (separate quote) - after two years of operation"
        ],
        advanced: [
            "no",
            "yes",
            "yes",
            "yes",
            "yes",
            "no",
            "yes",
            "no",
            "yes*",
            "Option (separate quote) - after two years of operation"
        ],
        allInclusive: [
            "yes",
            "yes",
            "yes",
            "yes",
            "yes",
            "yes",
            "yes",
            "yes",
            "yes*",
            "Option (separate quote) - after two years of operation"
        ],
    }

    return(
        <PricingWrapper>
            <GridHeader>
                {
                    falseData.header.map((elem,index)=> {
                        return (
                            <GridNamesContainer key={index}>
                                {elem.text !== "" &&
                                    <GridNamesIcon style={{borderRadius:"50%"}}>
                                        {elem.icon}
                                    </GridNamesIcon>
                                }
                                <NamesStyle>
                                    {elem.text}
                                </NamesStyle>
                            </GridNamesContainer>
                        )
                    })
                }
            </GridHeader>
            <GridHeader>
                {
                    falseData.commission.map((e,index)=>{
                        return(
                            <GridCommissionContainer
                                key={index}
                                css={index === 0 ? tw`justify-start pl-3 font-normal text-xl` : tw``}
                            >
                                {e}
                            </GridCommissionContainer>
                        )
                    })
                }
            </GridHeader>
            <GridHeader css={tw`mb-6`}>
                {
                    falseData.fees.map((e,index)=>{
                        return(
                            <GridFeesContainer
                                key={index}
                                css={index === 0 ? tw`justify-start pl-3 font-normal text-xl px-0 text-textBlack` : tw``}
                            >
                                {e}
                            </GridFeesContainer>
                        )
                    })
                }
            </GridHeader>
            <GridContainer>
                <GridLabelContainer>
                    {
                        falseData.labels.map((e,index)=>{
                            return(
                                <GridLabelStyle css={index % 2 === 0 ? tw`bg-textLightPrimaryBackground` : tw``} key={index}>
                                    {e}
                                </GridLabelStyle>
                            )
                        })
                    }
                </GridLabelContainer>
                <GridSolutionContainer>
                    {
                        falseData.starter.map((e,index)=>{
                            return(
                                <GridBundleItem text={e} index={index}/>
                            )
                        })
                    }
                </GridSolutionContainer>
                <GridSolutionContainer>
                    {
                        falseData.advanced.map((e,index)=>{
                            return(
                                <GridBundleItem text={e} index={index}/>
                            )
                        })
                    }
                </GridSolutionContainer>
                <GridSolutionContainer>
                    {
                        falseData.allInclusive.map((e,index)=>{
                            return(
                                <GridBundleItem text={e} index={index}/>
                            )
                        })
                    }
                </GridSolutionContainer>
            </GridContainer>

            <GridAsterix>
                <div tw="text-secondaryDark">
                    *
                </div>
                <div>
                    T&E at your charge.
                </div>
            </GridAsterix>
        </PricingWrapper>
    )
}