/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'


const Wrapper = tw.div`flex justify-center mx-auto my-24`
const MottoWrapper = tw.div`flex rounded-md px-8 flex-col justify-center items-center text-textBlack max-w-screen-lg w-full`

const MottoMessage = tw.div`text-3xl font-semibold mb-12 mb-12 mr-2`
const MottoSubQuote = tw.div`w-8/12 text-center text-xl font-semibold text-secondaryDark mb-8`

export default function Motto() {
    return (
        <Wrapper>
            <MottoWrapper>
                <MottoMessage>
                    “When there is a will, there is a way…”
                </MottoMessage>
                {/*
                <MottoSubQuote>
                    What matters to us is not what we do but what we achieve. Our track records speak on their own.
                </MottoSubQuote>
                */}
            </MottoWrapper>
        </Wrapper>
    )
}
