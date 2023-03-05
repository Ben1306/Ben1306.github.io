/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import {Button} from "../../layouts/components";


const Wrapper = tw.div`flex justify-center mx-auto mb-24`
const MottoWrapper = tw.div`flex flex-col justify-center items-center text-textBlack max-w-screen-lg w-full`

const MottoIntro = tw.div`text-xl font-medium mb-6 text-textGrayMedium`
const MottoMessage = tw.div`text-5xl font-medium italic mb-6`
const MottoSubQuote = tw.div`mx-auto w-8/12 text-center text-xl font-medium text-textGrayMedium mb-4`

export default function Motto() {
    return (
        <Wrapper>
            <MottoWrapper>
                <MottoIntro>
                    Our motto is simple
                </MottoIntro>
                <MottoMessage>
                    “When there is a will, there is a way…”
                </MottoMessage>
                <MottoSubQuote>
                    What matters to us is not what we do but what we achieve. Our track records speak on their own.
                </MottoSubQuote>
            </MottoWrapper>
        </Wrapper>
    )
}
