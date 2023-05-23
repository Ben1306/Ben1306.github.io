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


function getCurrentFrame(index) {
    return require(`../../images/img_tunnel_seq/tunnel-zoom${index.toString().padStart(4, '0')}.jpg`)
}

const ImageCanvas = ({ scrollHeight, numFrames, width, height }) => {

    const canvasRef = useRef(null);
    const [images, setImages] = useState([]);
    const [frameIndex, setFrameIndex] = useState(0);

    function preloadImages() {
        for (let i = 0; i < numFrames; i++) {
            const img = new Image();
            img.src = getCurrentFrame(i);
            setImages((prevImages) => [...prevImages, img]);
        }
    }
    const handleScroll = () => {
        const scrollFraction = window.scrollY / (scrollHeight - window.innerHeight);
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

    return (
        <div
            style={{ height: scrollHeight }}
        >
            <canvas
                ref={canvasRef}
                style={{
                    position:"fixed",
                    zIndex:10,
                }}
            />
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
        <Container css={tw`w-full overflow-hidden`}>
            <ImageCanvas
                css={tw`sticky inset-y-0`}
                scrollHeight={4000}
                width={width}
                height={height}
                numFrames={299}
            />
        </Container>
    )





}