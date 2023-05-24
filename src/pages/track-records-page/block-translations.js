/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import {useEffect, useRef, useState} from "react";

const Wrapper = tw.div`w-full flex justify-center mt-3`
const Container = tw.div`flex flex-col items-center`

const Row = tw.div`flex w-full my-3`
const Block = tw.div`flex flex-col bg-white items-center justify-center rounded-2xl h-96`
const BlockText = tw.div`text-black text-6xl font-semibold`

// Function to check target element's position
let checkTargetPosition = (element) => {
    // get bounding client rect from element
    let rect = element.getBoundingClientRect();
    // grab measurements and percentage conversion
    let fromTop = rect.top;
    let fraction = rect.top/window.innerHeight;
    let percentage = fraction * 100;
    //console.log('target scroll:', fromTop, 'px from top.', fraction, '/', percentage, '%');
    return {fromTop:fromTop,fraction:fraction,percentage:percentage}
}


function BlockComponent({text, objRef, offSet, speed, size}){

    const[translateValue, setTranslateValue] = useState(speed)

    function handleTranslate(){
        const fractionOfScreen = checkTargetPosition(objRef.current).fraction;

        if(fractionOfScreen <= offSet){
            setTranslateValue(0)
        }
        else{
            setTranslateValue(
                speed * ((fractionOfScreen - offSet)/(1-offSet))
            )
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',handleTranslate);

        return () => {
            window.removeEventListener('scroll', handleTranslate);
        }
    },[])

    return(
        <Block
            css={[
                size === "half" && tw`w-full first:mr-3 last:ml-3`,
                size === "full" && tw`flex-1 m-0`
            ]}
            style={{
                transform:`translateY(${translateValue}px)`,
            }}
            ref={objRef}
        >
            <BlockText>
                {text}
            </BlockText>
        </Block>
    )
}

export default function BlockTranslations() {

    const block1 = useRef(null)
    const block2 = useRef(null)
    const block3 = useRef(null)
    const block4 = useRef(null)

    return(
        <Wrapper>
            <Container
                style={{width:"80%"}}
            >
                <Row>
                    <BlockComponent
                        size={"full"}
                        objRef={block1}
                        offSet={0}
                        speed={0}
                        text={"Achievement n°1"}
                    />
                </Row>
                <Row>
                    <BlockComponent
                        size={"half"}
                        objRef={block2}
                        offSet={0.6}
                        speed={60}
                        text={"Achievement n°2"}
                    />
                    <BlockComponent
                        size={"half"}
                        objRef={block3}
                        offSet={0.4}
                        speed={100}
                        text={"Achievement n°3"}
                    />
                </Row>
                <Row>
                    <BlockComponent
                        size={"full"}
                        objRef={block4}
                        offSet={0.6}
                        speed={80}
                        text={"Achievement n°4"}
                    />
                </Row>

            </Container>
        </Wrapper>
    )
}