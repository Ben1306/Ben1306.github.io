/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'

import { motion, useScroll } from "framer-motion"
import {useEffect, useRef, useState} from "react";

const Container = tw.div`w-full`


function drawImageProp(ctx, img, x, y, w, h, offsetX, offsetY) {

    if (arguments.length === 2) {
        x = y = 0;
        w = ctx.canvas.width;
        h = ctx.canvas.height;
    }

    // default offset is center
    offsetX = typeof offsetX === "number" ? offsetX : 0.5;
    offsetY = typeof offsetY === "number" ? offsetY : 0.5;

    // keep bounds [0.0, 1.0]
    if (offsetX < 0) offsetX = 0;
    if (offsetY < 0) offsetY = 0;
    if (offsetX > 1) offsetX = 1;
    if (offsetY > 1) offsetY = 1;

    let iw = img.width,
        ih = img.height,
        r = Math.min(w / iw, h / ih),
        nw = iw * r,   // new prop. width
        nh = ih * r,   // new prop. height
        cx, cy, cw, ch, ar = 1;

    // decide which gap to fill
    if (nw < w) ar = w / nw;
    if (Math.abs(ar - 1) < 1e-14 && nh < h) ar = h / nh;  // updated
    nw *= ar;
    nh *= ar;

    // calc source rectangle
    cw = iw / (nw / w);
    ch = ih / (nh / h);

    cx = (iw - cw) * offsetX;
    cy = (ih - ch) * offsetY;

    // make sure source rectangle is valid
    if (cx < 0) cx = 0;
    if (cy < 0) cy = 0;
    if (cw > iw) cw = iw;
    if (ch > ih) ch = ih;

    // fill image in dest. rectangle
    ctx.drawImage(img, cx, cy, cw, ch,  x, y, w, h);
}

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

function getCurrentFrame(index) {
    return require(`../../images/img_tunnel_seq/tunnel-zoom${index.toString().padStart(4, '0')}.jpg`)
}


const Text = tw.div`relative sticky inset-y-1/2 w-full text-center text-white text-6xl font-semibold`


function TextScroll({text, height, last=false}){

    const [opacity, setOpacity] = useState(0)
    const textRef = useRef(null)

    function handleFade(){
        //console.log(textRef.current.scrollTop)
        const fractionOfScreen = checkTargetPosition(textRef.current).fraction;
        if(fractionOfScreen>0.5 || fractionOfScreen<0.5){
            setOpacity(0)
        }
        else if(fractionOfScreen === 0.5){
            setOpacity(100)
        }
        //console.log(fractionOfScreen)
    }

    useEffect(()=>{
        window.addEventListener('scroll',handleFade);

        return () => {
            window.removeEventListener('scroll', handleFade);
        }
    },[])

    return(
        <div
            style={{
                height:height,
            }}
        >
            <Text
                style={{
                    opacity:`${opacity}%`,
                    transform:"translate(0% -50%)",
                    zIndex:10
                }}
                ref={textRef}
            >
                {text}
            </Text>
        </div>
    )
}


const ImageCanvas = ({ scrollHeight, numFrames, width, height }) => {

    const canvasRef = useRef(null);
    const containerRef = useRef(null)
    const [images, setImages] = useState([]);
    const [frameIndex, setFrameIndex] = useState(0);
    const [elemWidth, setElemWidth] = useState(100);
    const [radius, setRadius] = useState(0);
    function preloadImages() {
        for (let i = 0; i < numFrames; i++) {
            const img = new Image();
            img.src = getCurrentFrame(i);
            setImages((prevImages) => [...prevImages, img]);
        }
    }
    const handleScroll = () => {
        const scrollFraction = window.scrollY / (scrollHeight);
        const index = Math.min(
            numFrames - 2,
            Math.ceil(scrollFraction * numFrames)
        );

        if (index <= 0 || index > numFrames) {
            return;
        }

        setFrameIndex(index);
    };
    const renderCanvas = () => {
        const context = canvasRef.current.getContext("2d");
        context.canvas.width = width;
        context.canvas.height = height;
    };

    useEffect(() => {
        preloadImages();

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    useEffect(()=>{
        renderCanvas();
    }, [width, height])

    useEffect(() => {
        if (!canvasRef.current || images.length < 1) {
            return;
        }

        const context = canvasRef.current.getContext("2d");
        let requestId;

        const render = () => {
            drawImageProp(context, images[frameIndex], 0, 0, width, height);
            requestId = requestAnimationFrame(render);
        };
        render();
        return () => cancelAnimationFrame(requestId);
    }, [frameIndex, images,width, height]);

    function resizeElement(){

        const position = checkTargetPosition(containerRef.current);
        const fromTop = Math.abs(position.fromTop);
        const offSet = window.innerHeight/2;
        if(fromTop > scrollHeight - window.innerHeight && fromTop < scrollHeight - offSet ){
            setElemWidth(
                100 - 20* (fromTop - scrollHeight + window.innerHeight)/offSet
            )
            setRadius(
                (fromTop - scrollHeight + window.innerHeight)/offSet
            )
        }
        else if(fromTop >= scrollHeight - offSet){
            setElemWidth(80)
            setRadius(1)
        }
        else{
            setElemWidth(100)
            setRadius(0)
        }
    }

    useEffect(()=>{
        // Listen for scroll event and check position
        window.addEventListener('scroll', resizeElement);
        return () => {
            window.removeEventListener("scroll", resizeElement);
        }
    },[])


    return (
        <div
            css={tw`flex flex-col items-center overflow-clip mx-16`}
            style={{
                height: scrollHeight.toString() + "px",
                width: `${elemWidth}%`,
                borderRadius:`${radius}rem`,
            }}
            ref={containerRef}
        >
            <canvas
                ref={canvasRef}
                style={{
                    position:"sticky",
                    top:"50px",
                    zIndex:1,
                }}
            />
            <TextScroll height={500} text={"Maquette possible pour cette partie."}/>
            <TextScroll height={1000} text={"Il faut trouver une séquence de fond sympa et cohérente avec le business"}/>
            <TextScroll height={500} text={"Il faut que j'améliore l'apparition de ces titres."}/>
            <TextScroll height={1000} text={"Et ça sera désactivé sur téléphone"}/>
        </div>
    );
};

export default function ScrollExperience() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }


    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.addEventListener("resize", handleResize);
        }
    }, []);

    return(
        <Container css={tw`flex flex-col w-full items-center`}>
            <ImageCanvas
                scrollHeight={4000}
                width={width}
                height={height}
                numFrames={299}
            />
        </Container>
    )





}