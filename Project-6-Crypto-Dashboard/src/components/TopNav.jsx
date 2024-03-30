import {
  Box,
  Button,
  HStack,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BiSolidUserCircle } from "react-icons/bi";
import { FaBars } from "react-icons/fa";

const TopNav = ({ title, onOpen }) => {
  return (
    <Box px={4} bg={"white"}>
      <HStack maxW={"70rem"} h={16} justify={"space-between"} mx={"auto"}>
        <Icon
          as={FaBars}
          onClick={onOpen}
          display={{
            base: "block",
            lg: "none",
          }}
        />
        <Heading fontSize={"28px"} fontWeight={"medium"}>
          {title}
        </Heading>
        <Menu>
          <MenuButton>
            <Icon as={BiSolidUserCircle} fontSize={"35px"} />
          </MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Support</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default TopNav;
