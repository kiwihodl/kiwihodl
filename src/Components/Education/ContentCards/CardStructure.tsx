import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import MockData from "../../../mock-data.json";
import Kiwi from "../../../Assets/Logo.jpg";
import Fountain from "../../../Assets/Fountain.png";
import Sphinx from "../../../Assets/Sphinx.png";

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

    return (
        <Box className="CardsMain">
            <Box className="CardSingle">
                <Flex className="UpperBar">
                    <Box className="21Logo">
                        <Image
                            src={Kiwi}
                            alt="21 Websites logo of a shield and lightning bolt"
                            className="CardLogo"
                        />
                    </Box>
                    <Box className="SpacerDiv" />
                    <Box>
                        <Heading className="AuthorName">{user.Full_Name}</Heading>
                    </Box>
                    <Box className="SpacerDiv" />
                </Flex>
                <Box className="CardBg">
                    <Box className="CardInner">
                        <Box className="Thumbnaildiv">
                            <Image
                                src={Kiwi}
                                alt={user.ThumbNailAltDescription}
                                className="Thumbnailimage"
                            />
                        </Box>
                        <Box className="ContentTitleDiv">
                            <Heading className="ContentTitleText">
                                {user.ContentTitle}
                            </Heading>
                        </Box>
                        <Box className="ContentDescription">
                            <Text className="ContentParagraph">{user.ContentParagraph}</Text>
                        </Box>
                        <Box className="ConetentBars">
                            <Box className="ReadUnderlying">
                                <Box className="FiatBar"></Box>
                                <Box className="BitcoinBar"></Box>
                            </Box>
                            <Box className="ListenUnderlying">
                                <Box className="FiatBar">
                                    <Flex className="FiatItemsDiv">
                                        {generateLinks(user.Listen.Fiat_Platforms).map((link) => link)}
                                    </Flex>
                                </Box>
                                <Box className="BitcoinBar">
                                    <Flex className="BitcoinContentItems">
                                        {generateLinks(user.Listen.Bitcoin_Platforms).map((link) => link)}
                                    </Flex>
                                </Box>
                            </Box>
                            <Box className="WatchUnderlying">
                                <Box className="FiatBar">
                                    {generateLinks(user.Watch.Fiat_Platforms).map((link) => link)}
                                </Box>
                                <Box className="BitcoinBar">
                                    {generateLinks(user.Watch.Bitcoin_Platforms).map((link) => link)}
                                </Box>
                            </Box>
                        </Box>

                        <Box
                            className="CardConsumeButtons"
                            style={{ overflow: "hidden" }}
                        >
                            {buttons.map((name, index) => (
                                <Button
                                    className={`${name}Button ${
                                        activeButtons.includes(index) ? "active" : ""
                                    }`}
                                    onClick={() => handleButtonClick(index)}
                                    style={
                                        activeButtons.includes(index)
                                            ? { transform: "translateX(85%)", transition: "transform 2s" }
                                            : { transition: "transform 2s" }
                                    }
                                >
                                    <Box className="button-container">
                                        <Text>{name}</Text>
                                    </Box>
                                </Button>
                            ))}
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