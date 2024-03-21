import React, { useState } from "react";
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
    { title: "Properties", to: "/property" },
    { title: "Design", to: "/design" },
    { title: "Search", to: "/search" },
    { title: "About Us", to: "/aboutus" },
    { title: "Contact Us", to: "/contactus" },
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
      pl={10}
      pr={10}
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
                    <Text variant="ghost" mr="2" mb="2" onClick={toggleMenu}>
                      {item.title}
                    </Text>
                  </Link>
                ))}
              </Flex>
            </Box>
          )}
        </>
      ) : (
        <Flex align="center" justifyContent="space-around" w="90%">
          {menuItems.map((item) => (
            <Link to={item.to} key={item.to}>
              <Text variant="ghost" mr="2">
                {item.title}
              </Text>
            </Link>
          ))}
          <Icon>
            {" "}
            <FiUser size="lg" />{" "}
          </Icon>
          <Button bg={"#10C66F"} color={"white"} mr="2">
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
