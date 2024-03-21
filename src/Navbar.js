import React, { useState } from "react";
import { LuUserCircle2 } from "react-icons/lu";
import {
  Box,
  Flex,
  Spacer,
  Button,
  Text,
  Icon,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FiUser, FiMenu } from "react-icons/fi";
import companyLogo from "./images/companyLogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { title: "Home", to: "/" },
    { title: "Properties", to: "#" },
    { title: "Design", to: "#" },
    { title: "Search", to: "#" },
    { title: "About Us", to: "#" },
    { title: "Contact Us", to: "#" },
  ];

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding=".5rem"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="999"
      bg="transparent"
      color="#10C66F"
      pl={5}
      pr={5}
    >
      <Flex w={isMobile ? "100%" : "50%"} align="center">
        <Image w={100} src={companyLogo} alt="company logo" />
      </Flex>
      {isMobile ? (
        <>
          <Box onClick={toggleMenu} cursor="pointer">
            <Icon as={isMenuOpen ? FiUser : FiMenu} fontSize={"30px"} />
          </Box>
          {isMenuOpen && (
            <Box
              position="absolute"
              top="60px"
              right="0"
              bg="white"
              p={4}
              borderRadius="md"
              boxShadow="md"
              zIndex="999"
            >
              <Flex direction="column" align="flex-end">
                {menuItems.map((item) => (
                  <Link to={item.to} key={item.to}>
                    <Text
                      fontSize="lg"
                      fontWeight="bold" // Make the text bold
                      variant="ghost"
                      mr="2"
                      mb="2"
                      onClick={toggleMenu}
                    >
                      {item.title}
                    </Text>
                  </Link>
                ))}
              </Flex>
            </Box>
          )}
        </>
      ) : (
        <Flex align="center" justifyContent="space-around" w="100%">
          {menuItems.map((item) => (
            <Link to={item.to} key={item.to}>
              <Text
                fontSize="lg"
                fontWeight="bold" // Make the text bold
                variant="ghost"
                mr="2"
                _hover={{ color: "#10C66F" }}
              >
                {item.title}
              </Text>
            </Link>
          ))}
          <LuUserCircle2
            style={{ height: "10%", width: "1.7rem" }}
            color="black"
          />
          <Button
            bg={"#10C66F"}
            color={"white"}
            mr="2"
            _hover={{ bg: "#0F9D58" }}
          >
            Create Listing
          </Button>
        </Flex>
      )}
      <Spacer />
      <Box></Box>
    </Flex>
  );
};

export default Navbar;
