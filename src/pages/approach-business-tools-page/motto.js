/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'


const Wrapper = tw.div`flex justify-center mx-auto my-24`
const MottoWrapper = tw.div`flex rounded-md px-8 flex-col justify-center items-center text-textBlack max-w-screen-lg w-full`

const MottoMessage = tw.div`text-3xl font-semibold mb-24 mr-2`

export default function Motto() {
    return (
        <Wrapper>
            <MottoWrapper>
                <MottoMessage>
                    “When there is a will, there is a way…”
                </MottoMessage>
            </MottoWrapper>
        </Wrapper>
    )
}
