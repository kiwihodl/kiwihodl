import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { Box } from "@chakra-ui/react";
import Card from '../card/Card';
import MockData from "../../mock-data.json";

const CardCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Box className="CarouselContainer">
            <Carousel activeIndex={index} onSelect={handleSelect}>
                {MockData.map((user) => (
                    <Carousel.Item key={user.id}>
                        <Card user={user} />
                    </Carousel.Item>
                ))}
            </Carousel>
        </Box>
    );
};

export default CardCarousel;
