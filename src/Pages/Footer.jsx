import { Box, Button, Flex,Icon, Image, Input, Text, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import companyLogo from "../images/companyLogo.png";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaInstagram, FaWhatsapp, FaAngleRight } from "react-icons/fa";
import { LiaAddressBookSolid } from "react-icons/lia";
import { MdOutlinePermPhoneMsg, MdOutgoingMail } from "react-icons/md";

const Footer = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box mt={70} h={"auto"} bg={"#10C66F"} color={'white'}>
      <Flex flexDirection={isMobile ? 'column' : 'row'} justifyContent={'space-around'} p={10} opacity={"80%"} flexWrap="wrap">
        <Box mb={isMobile ? 6 : 0}>
          <Image bg={'white'} w={40} src={companyLogo} />
          <Text mt={2}>Follow us on</Text>
          <Flex>
            <Icon as={RiFacebookCircleLine} fontSize={25} />
            <Icon as={FaInstagram} fontSize={25} ml={2} />
            <Icon as={FaWhatsapp} fontSize={25} ml={2} />
          </Flex>
          <Flex mt={2}>
            <Icon as={MdOutgoingMail} />
            <Text fontSize={"2xs"} color={'whitesmoke'} ml={2}>info@trophynig.com</Text>
          </Flex>
          <Flex mt={2}>
            <Icon as={MdOutlinePermPhoneMsg} />
            <Text fontSize={"2xs"} color={'whitesmoke'} ml={2}>8549852148</Text>
          </Flex>
          <Flex mt={2}>
            <Icon as={LiaAddressBookSolid} />
            <Text fontSize={"2xs"} color={'whitesmoke'} ml={2}>2972 Westheimer Rd. Santa Ana illinois 85486</Text>
          </Flex>
        </Box>

        <Box mb={6} ml={isMobile ? 0 : 6}>
          <Text fontSize={"2xl"} fontWeight={"bold"}>Company</Text>
          <Text mt={2}>About Us</Text>
          <Text>Contact Us</Text>
          <Text>Pricing</Text>
          <Text>Terms & Condition</Text>
          <Text>Report A Problem</Text>
          <Text>Privacy Policy</Text>
        </Box>

        <Box mb={6}>
          <Text mb={2}>Stay up to date</Text>
          <Input flexWrap={"wrap"} bg={'lightgrey'} maxW={isMobile?"50%":"100%"} border={'none'} placeholder='Enter Your Email Address' mb={5} /> <br/>
          <Button bg={'white'} color={'black'}><Flex>Subscribe For <span>Newsletter <FaAngleRight /></span></Flex></Button>
        </Box>
      </Flex>
    </Box>
  )
}

export default Footer;
