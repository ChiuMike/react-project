import React from "react";
import { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
const items = [
    {
        src:'https://upload.cc/i1/2021/09/29/VyPfqg.jpg',
        altText: '',
        caption: ''
    },
    {
        src:'https://upload.cc/i1/2021/09/29/BtvSzf.jpg',
        altText: '',
        caption: ''
    },
    {
        src:'https://upload.cc/i1/2021/09/29/chSspL.jpg',
        altText: '',
        caption: ''
    }
];

const CarouselSlide = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }
    const slides = items.map((item,index) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={index}
            >
                <img src={item.src} alt={item.altText}></img>
                <CarouselCaption captionText={item.caption} captionHeader={item.caption}/>
            </CarouselItem>
        );
    });
    return (
        <Carousel
            className="custom-tag"
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    )

}
export default CarouselSlide;