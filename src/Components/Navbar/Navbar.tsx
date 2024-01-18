import { Box, Button, Flex, Image, useBreakpointValue, Menu, MenuButton, MenuList, IconButton, Stack } from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons';
import { keyframes } from "@emotion/react";
import Logo from "../../Assets/Logo.jpg";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const fontStyles = {
  fontFamily: "'Rubik Glitch', 'sans-serif', 'Lato', sans-serif",
};

const MenuItem: React.FC<{ children: React.ReactNode, isMobile: boolean }> = ({ children, isMobile }) => (
  <Button 
    variant="link" 
    color="#FF8700" 
    mr={2}
    fontSize="3xl"
    _hover={{
      textDecoration: "none",
      background: "linear-gradient(to top, white 1%, #FF8700 10%, white 89%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontFamily: "Rubik Glitch",
      paddingTop: "3px",
    }}
  >
    {children}
  </Button>
);

const Navbar: React.FC = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box position="sticky" top="23px" zIndex="1" mt="21px">
      {isMobile ? (
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon boxSize={8} />}
            color="white"
            backgroundColor="#1C1C1E"
            border= "2px solid #FF8700"
            variant="outline"
            position="absolute"
            top={6}
            right={4}
            _hover={{
              backgroundColor: "#1C1C1E",
            }}
            _active={{
              backgroundColor: "#1C1C1E",
            }}
          />
          <MenuList bg= "#1C1C1E">
            <Stack spacing={4} padding={4}> 
              <MenuItem isMobile={isMobile}>Donate</MenuItem>
              <MenuItem isMobile={isMobile}>Learn</MenuItem>
              <MenuItem isMobile={isMobile}>Contact</MenuItem>
            </Stack>
          </MenuList>
        </Menu>
      ) : (
        <Flex
          as="nav"
          px={4}
          py={2}
          align="center"
          justify="center"
          minHeight="80px"
          borderRadius="192px"
          width="30rem"
          margin="auto"
          style={{
            background: 'linear-gradient(128deg, rgba(99, 99, 102, 0.2048) 100%, rgba(0, 0, 0, 0.064) 100%)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            boxShadow: 'inset 0px 0px 0px 1px #ffffff16',
          }}
        >
          <Box ml="auto" mr="auto">
            <Flex justifyContent="space-between" width="21rem">
              <MenuItem isMobile={!isMobile}>Donate</MenuItem>
              <MenuItem isMobile={!isMobile}>Learn</MenuItem>
              <MenuItem isMobile={!isMobile}>Contact</MenuItem>
            </Flex>
          </Box>
        </Flex>
      )}
    </Box>
  );
};

export default Navbar;