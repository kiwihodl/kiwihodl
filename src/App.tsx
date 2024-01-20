import './App.css';
import React, { useState } from 'react';
import { ChakraProvider, useBreakpointValue } from "@chakra-ui/react";
import theme from "./Utils/theme";
import Nav from "./Components/Navbar/Navbar"
import ContentSearch from "./Components/Education/Search/SearchEducation"
import CardCarousel from './Components/Education/Carousel/Carousel';
import Education from './Components/Education/Education'

import { Box, Flex, Image } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import Logo from "./Assets/Logo.jpg"

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

function App() {

  return (
    <ChakraProvider theme={theme}>
      <Box
        position="absolute"
        top={{ base: "-55px", md: "13px" }}
        left="21px"
        width="60px"
        height="60px"
        borderRadius="full"
        bgGradient="linear(to bottom right, #FF8700, #ffbf00, #ffcf40, #ffffff)"
        animation={`${rotate} 5s linear infinite`}
        zIndex="4"
      />

      <Box
        position="absolute"
        top={{ base: "-62px", md: "6px" }}
        left="14px"
        width="58px"
        height="58px"
        borderRadius="full"
        zIndex="5"
      >
        <Flex
          width="54px"
          height="54px"
          borderRadius="full"
          overflow="hidden"
          margin="10px"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            src={Logo}
            alt="Profile"
            boxSize="100%"
            objectFit="cover"
            width="54px"
            height="54px"
          />
        </Flex>
      </Box>

      <Nav /> 
      {/* <ContentSearch />
      <CardCarousel /> */}
      <Education />
    </ChakraProvider>
  );
}

export default App;
