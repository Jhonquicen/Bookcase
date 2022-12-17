import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Descripcion from '../descripcion/Descripcion';
import Mosaico from '../mosaico/Mosaico';

//Carrusel de imágenes

const items = [
    {
        src:'./img/book3.jpg',
        key: 1,
    },
    {
        src:'./img/book2.jpg',
        key: 2,
    },
    {
        src:'./img/book1.jpg',
        key: 3,
    },
    ];

function Dashboard (args) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
        <CarouselItem 
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
        >
            <img src={item.src} alt={item.altText} className="img" style={{
                height: "400px"
            }}/>
            <CarouselCaption
            captionText={item.caption}
            captionHeader={item.caption}
            />
        </CarouselItem>
        );
    });

    return (
        <div>
        <Descripcion/>
        <Mosaico/>
        </div>
    );
    }


export default Dashboard;