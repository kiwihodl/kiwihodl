import React, { useState } from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Card from "../ContentCards/CardStructure";
import MockData from "../../../mock-data.json";

const CardCarousel = () => {
    const [index, setIndex] = useState(0);

    const handlePrev = () => {
        setIndex((old) => (old === 0 ? MockData.length - 1 : old - 1));
    };

    const handleNext = () => {
        setIndex((old) => (old === MockData.length - 1 ? 0 : old + 1));
    };

    const user = {
    ...MockData[index],
    Category: MockData[index].Category || '',
    ThumbNailAltDescription: MockData[index].ThumbNailAltDescription || '',
    Watch: {
        ...MockData[index].Watch,
        Bitcoin_Platforms: {
            ...MockData[index].Watch.Bitcoin_Platforms,
            Spotify: '',
            ApplePodcasts: ''
        }
    },
    Listen: {
        ...MockData[index].Listen,
        Bitcoin_Platforms: {
            ...MockData[index].Listen.Bitcoin_Platforms,
            Spotify: '',
            ApplePodcasts: ''
        }
    },
    Read: {
        ...MockData[index].Read,
        Bitcoin_Platforms: {
            ...MockData[index].Read.Bitcoin_Platforms,
            Spotify: '',
            ApplePodcasts: ''
        }
    }
};

    return (
        <Flex width="full" align="center" justifyContent="center" mt={20}>
            <Button onClick={handlePrev} leftIcon={<ChevronLeftIcon />} m={1}>
                Prev
            </Button>
            <Box width="full" p={4} display="flex" justifyContent="center">
                <Card user={user} />
            </Box>
            <Button onClick={handleNext} rightIcon={<ChevronRightIcon />} m={1}>
                Next
            </Button>
        </Flex>
    );
};

export default CardCarousel;