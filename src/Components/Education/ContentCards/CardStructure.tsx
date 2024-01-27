import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import Kiwi from "../../../Assets/Logo.jpg";
import Fountain from "../../../Assets/fountain.jpg";
import Sphinx from "../../../Assets/sphinx.jpg";

interface FiatPlatform {
  Spotify: string;
  ApplePodcasts: string;
}

interface BitcoinPlatform {
  Sphinx: string;
  Fountain: string;
  Breez: string;
}

interface Content {
  Fiat_Platforms: FiatPlatform;
  Bitcoin_Platforms: BitcoinPlatform;
}
interface User {
  ID: number;
  User: string;
  Category: string;
  Full_Name: string;
  Email: string;
  Verified: boolean;
  "21Client": boolean;
  ThumbNail: string;
  ThumbNailAltDescription: string;
  ContentTitle: string;
  ContentParagraph: string;
  Watch: Content;
  Listen: Content;
  Read: Content;
  Donate: string;
  Contact: string;
}

const activeStyle = {
  transform: "translateX(95%)",
  transition: "transform 2s",
};

const inactiveStyle = {
  transition: "transform 2s",
};

const buttonStyles = {
  width: "100%",
  height: "40px",
  borderRadius: "5px",
  backgroundColor: "#1C1C1E",
  color: "#FF8700",
  fontWeight: "bold",
  fontSize: "18px",
  border: "1px solid white",
  zIndex: 4,
  marginBottom: "8px",
  _hover: {
    borderColor: "#FF8700",
    backgroundColor: "#1C1C1E",
  },
  _active: {
    borderColor: "#FF8700",
    backgroundColor: "#1C1C1E",
  },
};

const fiatBarStyles = {
  width: "50%",
  height: "100%",
  backgroundColor: "green",
  borderRadius: "0 5px 5px 0",
  marginTop: "-8px",
};

const bitcoinBarStyles = {
  width: "50%",
  height: "100%",
  backgroundColor: "#FF8700",
  borderRadius: "5px 0 0 5px ",
  marginTop: "-8px",
};

const CardStructure = ({ user }: { user: User }) => {
  const [activeButtons, setActiveButtons] = useState<number[]>([]);
  const cardRef = useRef<HTMLDivElement>(null);
  const readButtonRef = useRef<HTMLButtonElement>(null);
  const listenButtonRef = useRef<HTMLButtonElement>(null);
  const watchButtonRef = useRef<HTMLButtonElement>(null);

  const handleButtonClick = (index: number) => {
    if (activeButtons.includes(index)) {
      setActiveButtons([]);
    } else {
      setActiveButtons([index]);
    }
  };

  const handleClickOutside = (event: any) => {
    if (
      cardRef.current &&
      !cardRef.current.contains(event.target) &&
      readButtonRef.current &&
      !readButtonRef.current.contains(event.target) &&
      listenButtonRef.current &&
      !listenButtonRef.current.contains(event.target) &&
      watchButtonRef.current &&
      !watchButtonRef.current.contains(event.target)
    ) {
      setActiveButtons([]);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const generatePlatformIcons = (platforms: FiatPlatform | BitcoinPlatform) => {
    return Object.keys(platforms).map((platform) => {
      let icon;
      switch (platform) {
        case "Spotify":
        case "ApplePodcasts":
          icon = <FontAwesomeIcon icon={faSpotify} size="lg" />;
          break;
        case "Sphinx":
          icon = <FontAwesomeIcon icon={faSpotify} size="lg" />;
          break;
        case "Fountain":
        case "Breez":
          icon = <FontAwesomeIcon icon={faSpotify} size="lg" />;
          break;
        default:
          icon = null;
      }
      return icon ? (
        <Box width="8px" height="8px" marginTop="7px">
          {icon}
        </Box>
      ) : null;
    });
  };

  return (
    <Box
      ref={cardRef}
      className="CardsMain"
      display="flex"
      justifyContent="center"
      width="400px"
      height="80"
      zIndex={1}
    >
      <Box
        className="CardSingle"
        backgroundColor="black"
        border="2px solid #FF8700"
        borderRadius="25px"
        p={4}
        height={660}
        width={1500}
        zIndex={2}
        bg="black"
        overflow={"hidden"}
      >
        <Flex
          className="UpperBar"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box>
            <Heading>{user.Full_Name}</Heading>
          </Box>
        </Flex>

        <Box className="CardBg">
          <Box className="CardInner">
            <Box
              className="Thumbnaildiv"
              display="flex"
              alignItems="center"
              justifyContent="center"
              padding={3}
            >
              <Image
                src={Kiwi}
                alt={user.ThumbNailAltDescription}
                className="Thumbnailimage"
                width={60}
                height={60}
              />
            </Box>
            <Box
              className="ContentTitleDiv"
              padding="3px"
              display="flex"
              justifyContent="center"
              alignContent="center"
            >
              <Heading className="ContentTitleText">
                {user.ContentTitle}
              </Heading>
            </Box>
            <Box className="ContentDescription" padding={2} mb={4}>
              <Text className="ContentParagraph">{user.ContentParagraph}</Text>
            </Box>

            <Box>
              <Button
                ref={readButtonRef}
                className={`ReadButton ${
                  activeButtons.includes(0) ? "active" : ""
                }`}
                onClick={() => handleButtonClick(0)}
                style={activeButtons.includes(0) ? activeStyle : inactiveStyle}
                {...buttonStyles}
              >
                <Text>Read</Text>
              </Button>
              <Flex
                direction="row"
                position="relative"
                marginTop="-40px"
                width="350px"
                height="39px"
                zIndex={2}
              >
                <Box
                  {...bitcoinBarStyles}
                >
                  <Flex className="FiatItemsDiv" justifyContent="space-evenly">
                    {generatePlatformIcons(user.Read.Fiat_Platforms)}
                  </Flex>
                </Box>
                <Box {...fiatBarStyles}>
                  <Flex
                    className="BitcoinContentItems"
                    justifyContent="space-evenly"
                  >
                    {generatePlatformIcons(user.Read.Bitcoin_Platforms)}
                  </Flex>
                </Box>
              </Flex>
            </Box>

            <Box marginTop={1}>
              <Button
                ref={listenButtonRef}
                className={`ListenButton ${
                  activeButtons.includes(1) ? "active" : ""
                }`}
                onClick={() => handleButtonClick(1)}
                style={activeButtons.includes(1) ? activeStyle : inactiveStyle}
                {...buttonStyles}
              >
                <Text>Listen</Text>
              </Button>
              <Flex
                direction="row"
                position="relative"
                marginTop="-40px"
                width="350px"
                height="39px"
                zIndex={2}
              >
                <Box
                 {...bitcoinBarStyles}
                >
                  <Flex className="FiatItemsDiv" justifyContent="space-evenly">
                    {generatePlatformIcons(user.Listen.Fiat_Platforms)}
                  </Flex>
                </Box>
                <Box {...fiatBarStyles}>
                  <Flex
                    className="BitcoinContentItems"
                    justifyContent="space-evenly"
                  >
                    {generatePlatformIcons(user.Listen.Bitcoin_Platforms)}
                  </Flex>
                </Box>
              </Flex>
            </Box>

            <Box marginTop={1}>
              <Button
                ref={watchButtonRef}
                className={`WatchButton ${
                  activeButtons.includes(2) ? "active" : ""
                }`}
                onClick={() => handleButtonClick(2)}
                style={activeButtons.includes(2) ? activeStyle : inactiveStyle}
                {...buttonStyles}
              >
                <Text>Watch</Text>
              </Button>
              <Flex
                direction="row"
                position="relative"
                marginTop="-40px"
                marginBottom={2}
                width="350px"
                height="39px"
                zIndex={2}
              >
                <Box
                  {...bitcoinBarStyles}
                >
                  <Flex className="FiatItemsDiv" justifyContent="space-evenly">
                    {generatePlatformIcons(user.Watch.Fiat_Platforms)}
                  </Flex>
                </Box>
                <Box {...fiatBarStyles}>
                  <Flex
                    className="BitcoinContentItems"
                    justifyContent="space-evenly"
                  >
                    {generatePlatformIcons(user.Watch.Bitcoin_Platforms)}
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CardStructure;
