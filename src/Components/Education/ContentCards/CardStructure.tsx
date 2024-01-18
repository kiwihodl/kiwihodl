import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import MockData from "../../../mock-data.json";
import Kiwi from "../../../Assets/Logo.jpg";
import Fountain from "../../../Assets/fountain.jpg";
import Sphinx from "../../../Assets/sphinx.jpg";

interface Platform {
  Spotify: string;
  ApplePodcasts: string;
}

interface BitcoinPlatform extends Platform {
  Sphinx: string;
  Fountain: string;
  Breez: string;
}

interface Content {
  Fiat_Platforms: Platform;
  Bitcoin_Platforms: BitcoinPlatform;
}

interface User {
  ID: number;
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

const CardStructure = ({ user }: { user: User }) => {
  const card_ID = MockData[0].ID;
  const buttons = ["Read", "Listen", "Watch"];
  const [activeButtons, setActiveButtons] = useState<number[]>([]);

  const handleButtonClick = (index: number) => {
    if (activeButtons.includes(index)) {
      setActiveButtons(activeButtons.filter((i) => i !== index));
    } else {
      setActiveButtons([...activeButtons, index]);
    }
  };

  function generateLinks(data: Platform | BitcoinPlatform) {
    const anchorLinks: JSX.Element[] = [];

    for (const [key, value] of Object.entries(data)) {
      anchorLinks.push(
        <a href={value.toString() || "#"} key={key}>
          {key}
        </a>
      );
    }

    return anchorLinks;
  }

  const generatePlatformIcons = (platforms: Platform | BitcoinPlatform) => {
    return Object.keys(platforms).map((platform) => {
      let icon;
      switch (platform) {
        case "Spotify":
          icon = <FontAwesomeIcon icon={faSpotify} size="lg" />;
          break;
        case "Sphinx":
          icon = <Image src={Sphinx} width={8} height={8} />;
          break;
        case "Fountain":
          icon = <Image src={Fountain} width={8} height={8} />;
          break;
        default:
          icon = null;
      }
      return icon ? (
        <Box width="8px" height="8px">
          {icon}
        </Box>
      ) : null;
    });
  };

  return (
    <Box
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
        height={800}
        width={1500}
        zIndex={2}
      >
        <Flex
          className="UpperBar"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box className="21Logo">
            <Image
              src={Kiwi}
              alt="21 Websites logo of a shield and lightning bolt"
              className="CardLogo"
              width={10}
              height={10}
            />
          </Box>
          <Box className="SpacerDiv" />
          <Box display="flex" alignItems="center" justifyContent="center">
            <Heading className="AuthorName">{user.Full_Name}</Heading>
          </Box>
          <Box className="SpacerDiv" />
        </Flex>
        <Box className="CardBg">
          <Box className="CardInner">
            <Box
              className="Thumbnaildiv"
              display="flex"
              alignItems="center"
              justifyContent="center"
              padding={5}
            >
              <Image
                src={Kiwi}
                alt={user.ThumbNailAltDescription}
                className="Thumbnailimage"
                width={60}
                height={60}
              />
            </Box>
            <Box className="ContentTitleDiv" padding={3}>
              <Heading className="ContentTitleText">
                {user.ContentTitle}
              </Heading>
            </Box>
            <Box className="ContentDescription">
              <Text className="ContentParagraph">{user.ContentParagraph}</Text>
            </Box>
            <Box className="ContentBars" zIndex={5}>
              <Box className="ListenUnderlying">
                <Box className="FiatBar">
                </Box>
              </Box>
              <Box className="WatchUnderlying">
                <Box className="FiatBar">
                  {/* {generateLinks(user.Watch.Fiat_Platforms)} */}
                </Box>
                <Box className="BitcoinBar">
                  {/* {generateLinks(user.Watch.Bitcoin_Platforms)} */}
                </Box>
              </Box>
            </Box>

            <Box
              className="CardConsumeButtons"
              style={{ overflow: "hidden" }}
              display="flex"
              flexDirection="column"
              gap="8px"
              zIndex={4}
            >
            <Box>
              <Button
                className={`ReadButton ${
                  activeButtons.includes(0) ? "active" : ""
                }`}
                onClick={() => handleButtonClick(0)}
                style={activeButtons.includes(0) ? activeStyle : inactiveStyle}
                width="100%"
                zIndex={4}
              >
                <Box className="button-container">
                  <Text>Read</Text>
                </Box>
              </Button>
              <Flex
                  direction="row"
                  position="relative"
                  marginTop="-40px"
                  width="300px"
                  height="50px"
                  zIndex={2}
                >
                  <Box
                    width="50%"
                    height="100%"
                    backgroundColor="#FF8700"
                    borderRadius="25px 0 0 25px"
                  />
                  <Box width="50%" height="100%" backgroundColor="green" />
                </Flex>
              </Box>

              <Box>
  <Button
    className={`ListenButton ${
      activeButtons.includes(1) ? "active" : ""
    }`}
    onClick={() => handleButtonClick(1)}
    style={activeButtons.includes(1) ? activeStyle : inactiveStyle}
    width="100%"
    zIndex={4}
  >
    <Box className="button-container">
      <Text>Listen</Text>
    </Box>
  </Button>
  <Flex
    direction="row"
    position="relative"
    marginTop="-40px"
    width="300px"
    height="50px"
    zIndex={2}
  >
    <Box
      width="50%"
      height="100%"
      backgroundColor="#FF8700"
      borderRadius="25px 0 0 25px"
    >
      <Flex className="FiatItemsDiv">
        {generatePlatformIcons(user.Listen.Fiat_Platforms)}
      </Flex>
    </Box>
    <Box width="50%" height="100%" backgroundColor="green">
      <Flex className="BitcoinContentItems">
        {generatePlatformIcons(user.Listen.Bitcoin_Platforms)}
      </Flex>
    </Box>
  </Flex>
</Box>
    
                    <Box>

              <Button
                className={`WatchButton ${
                  activeButtons.includes(2) ? "active" : ""
                }`}
                onClick={() => handleButtonClick(2)}
                style={activeButtons.includes(2) ? activeStyle : inactiveStyle}
                width="100%"
                zIndex={4}
              >
                <Box className="button-container">
                  <Text>Watch</Text>
                </Box>
              </Button>
              <Flex
                  direction="row"
                  position="relative"
                  marginTop="-40px"
                  width="300px"
                  height="50px"
                  zIndex={2}
                >
                  <Box
                    width="50%"
                    height="100%"
                    backgroundColor="#FF8700"
                    borderRadius="25px 0 0 25px"
                  />
                  <Box width="50%" height="100%" backgroundColor="green" />
                </Flex>
            </Box>
            </Box>

          </Box>
        </Box>
        <Box className="LowerBar">
          <Box className="DonateContactButtons">
            <Button className="DonateButton">DONATE</Button>
            <Button className="ContactButton">CONTACT</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CardStructure;
