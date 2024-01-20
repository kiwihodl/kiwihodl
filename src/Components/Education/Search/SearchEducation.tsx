import { Box, Button, Input, Flex, Select } from "@chakra-ui/react";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import AddContent from "./AddContent"

interface SearchEducationProps {
  children?: React.ReactNode;
}

const SearchEducation: React.FC<SearchEducationProps> = ({ children }) => {
  const [trigger, setTrigger] = useState(false);

  return (
    <Box mt={10}>
      <Flex align="center" justify="center">
        <Select
          width="200px" 
          height="50px" 
          iconColor="black" 
          backgroundColor="#FF8700"
          color="black"
          borderRadius="25px 0px 0px 25px"
          border="1px solid black"
          textAlign="center"
          focusBorderColor="transparent"
          errorBorderColor="transparent"
          variant="unstyled"
        >
            <option value="" hidden>Filter</option>
            <option value="a">Author</option>
            <option value="b">Title</option>
            <option value="c">Topic</option>
        </Select>
        <Flex align="center" position="relative" marginLeft="-1px">
          <Input placeholder="Search..." height="47px" sx={{
            borderRadius: "0px 25px 25px 0px",
            _focus: {
              borderColor: "#FF8700",
              boxShadow: "0 0 0 1px #FF8700"
            }
          }}/>
          <Box as="span" position="absolute" right="1rem" top="50%" transform="translateY(-50%)">
            <FontAwesomeIcon icon={faSearch} />
          </Box>
        </Flex>
        <Box marginLeft="1rem">
          <AddContent trigger={trigger} setTrigger={setTrigger}>{}</AddContent>
        </Box>
      </Flex>
      {children}
    </Box>
  );
};

export default SearchEducation;