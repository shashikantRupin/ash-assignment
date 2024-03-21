import { Box, Button, Center,Flex,Grid, Heading, Image, Text,useBreakpointValue  } from '@chakra-ui/react'

import React from 'react'
import background from "../images/BackgroundImg.jpg"
import Footer from './Footer'

const Home = () => {
  const columnCount = useBreakpointValue({ base: 1, md: 2, lg: 3 }); // Adjust column count for different breakpoints
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <>
     <Box h={isMobile ? "80vh" : "80vh"} style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition: "center" }}>
      <Box pl={isMobile ? 10 : 30} pr={isMobile ? "20%" : "40%"} pt={isMobile ? "10vh" : "20vh"} color={'white'}>
        <Text pt={isMobile?10:0} pb={isMobile?1:3} fontSize={isMobile ? "lg" : "xl"}>------- We are offering the </Text>
        <Heading pb={3} fontSize={isMobile ? "4xl" : "5xl"} fontWeight={"bold"}>Best Real Estate Deals</Heading>
        <Text opacity={"90%"} w={isMobile ? "100%" : "82%"} pb={5} lineHeight={isMobile ? "20px" : "25px"}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
          officia consequat duis enim velit mollit. Exercitation veniam consequat sunt
          nostrud amet.
        </Text>
        <Button color={"white"} bg={"#10C66F"} mr="2">More Details</Button>
      </Box>
    </Box>

      <Box w="90%" m="auto" mt={30}>
      <Center>
        <Heading pb={5} color="#10C66F">Featured Properties</Heading>
      </Center>
      <Center>
        <Text color="grey">Lorem ipsum dolor sit amet consectetur. Gravida et sit nibh accumsan arcu erat donec massa pulvinar.</Text>
      </Center>
      <Center>
        <Text color="grey">Rutrum pharetra id risus interdum. Donec proin quis mauris neque.</Text>
      </Center>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: `repeat(${columnCount}, 1fr)` }}
        gap={6}
        mt={10}
      >
        <Box boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.9)" mb={isMobile ? 6 : 0}>
          <Image borderTopLeftRadius="10px" borderTopRightRadius="10px" w="100%" h={isMobile ? "auto" : "50%"} src="https://media.istockphoto.com/id/1333102002/photo/modern-style-bedroom-interior.jpg?s=612x612&w=0&k=20&c=rkG5eNaw4cHR24ZnWxEVm9FIgIBwuXHoZhULUk9E7-Q=" />
          <Box ml={4} fontSize="sm" p={isMobile ? 5 : 4}>
            <Text>Mini Flat in Lekki Phase</Text>
            <Text color="#10C66F" fontWeight="bold">N 2,500,000/sq ft</Text>
            <Text>3 Bed 2 bath</Text>
            <Text>Managed by JR Developers</Text>
          </Box>
        </Box>
        <Box boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.9)" mb={isMobile ? 6 : 0}>
          <Image borderTopLeftRadius="10px" borderTopRightRadius="10px" w="100%" h={isMobile ? "auto" : "50%"} src="https://media.istockphoto.com/id/1333102002/photo/modern-style-bedroom-interior.jpg?s=612x612&w=0&k=20&c=rkG5eNaw4cHR24ZnWxEVm9FIgIBwuXHoZhULUk9E7-Q=" />
          <Box ml={4} fontSize="sm" p={isMobile ? 5 : 4}>
            <Text>Mini Flat in Lekki Phase</Text>
            <Text color="#10C66F" fontWeight="bold">N 2,500,000/sq ft</Text>
            <Text>3 Bed 2 bath</Text>
            <Text>Managed by JR Developers</Text>
          </Box>
        </Box>
        <Box boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.9)" mb={isMobile ? 6 : 0}>
          <Image borderTopLeftRadius="10px" borderTopRightRadius="10px" w="100%" h={isMobile ? "auto" : "50%"} src="https://media.istockphoto.com/id/1333102002/photo/modern-style-bedroom-interior.jpg?s=612x612&w=0&k=20&c=rkG5eNaw4cHR24ZnWxEVm9FIgIBwuXHoZhULUk9E7-Q=" />
          <Box ml={4} fontSize="sm" p={isMobile ? 5 : 4}>
            <Text>Mini Flat in Lekki Phase</Text>
            <Text color="#10C66F" fontWeight="bold">N 2,500,000/sq ft</Text>
            <Text>3 Bed 2 bath</Text>
            <Text>Managed by JR Developers</Text>
          </Box>
        </Box>
      </Grid>
    </Box>

    
    <Box w="90%" m="auto" mt={30}>
      <Center>
        <Heading pb={5} color="#10C66F">Meet our Designer</Heading>
      </Center>
      <Center>
        <Text color="grey">Lorem ipsum dolor sit amet consectetur. Proin sagittis duis et sed egestas turpis ut aliquet ultricies. Risus</Text>
      </Center>
      <Center>
        <Text color="grey">vulputate semper orci neque. Eu egestas et ac sit pellentesque nullam.</Text>
      </Center>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
        gap={6}
        mt={10}
      >
        <Box
          boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1)"
          width={isMobile ? "100%" : "100%"}
          mb={isMobile ? 6 : 0}
          transition="transform 0.3s, box-shadow 0.3s"
          _hover={{ transform: "scale(1.05)", boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)" }} // Scale up and add shadow on hover
        >
          <Image p={5} borderRadius="50%" w={isMobile ? "50%" : "90%"} margin="auto" h={isMobile ? "auto" : "60%"} src="https://www.hospitalitynet.org/picture/153125218/murphy.jpg?t=1616416546" />
          <Box ml={4} fontSize="sm" textAlign="center" >
            <Text>Kathryn Murphy</Text>
            <Text>Designer</Text>
          </Box>
        </Box>
        <Box
          boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1)"
          width={isMobile ? "100%" : "100%"}
          mb={isMobile ? 6 : 0}
          transition="transform 0.3s, box-shadow 0.3s"
          _hover={{ transform: "scale(1.05)", boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)" }} // Scale up and add shadow on hover
        >
          <Image p={5} borderRadius="50%" w={isMobile ? "50%" : "90%"} margin="auto" h={isMobile ? "auto" : "60%"} src="https://www.hospitalitynet.org/picture/153125218/murphy.jpg?t=1616416546" />
          <Box ml={4} fontSize="sm" textAlign="center" >
            <Text>Kathryn Murphy</Text>
            <Text>Designer</Text>
          </Box>
        </Box>
        <Box
          boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1)"
          width={isMobile ? "100%" : "100%"}
          mb={isMobile ? 6 : 0}
          transition="transform 0.3s, box-shadow 0.3s"
          _hover={{ transform: "scale(1.05)", boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)" }} // Scale up and add shadow on hover
        >
          <Image p={5} borderRadius="50%" w={isMobile ? "50%" : "90%"} margin="auto" h={isMobile ? "auto" : "60%"} src="https://www.hospitalitynet.org/picture/153125218/murphy.jpg?t=1616416546" />
          <Box ml={4} fontSize="sm" textAlign="center" >
            <Text>Kathryn Murphy</Text>
            <Text>Designer</Text>
          </Box>
        </Box>
        <Box
          boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1)"
          width={isMobile ? "100%" : "100%"}
          mb={isMobile ? 6 : 0}
          transition="transform 0.3s, box-shadow 0.3s"
          _hover={{ transform: "scale(1.05)", boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)" }} // Scale up and add shadow on hover
        >
          <Image p={5} borderRadius="50%" w={isMobile ? "50%" : "90%"} margin="auto" h={isMobile ? "auto" : "60%"} src="https://www.hospitalitynet.org/picture/153125218/murphy.jpg?t=1616416546" />
          <Box ml={4} fontSize="sm" textAlign="center" >
            <Text>Kathryn Murphy</Text>
            <Text>Designer</Text>
          </Box>
        </Box>
      </Grid>
    </Box>

    <Box w="90%" m="auto" mt={30}>
      <Center> 
        <Heading pb={5} color="#10C66F">Top Rated Properties</Heading>
      </Center>
      <Center>
        <Text color="grey">Lorem ipsum dolor sit amet consectetur. Gravida et sit nibh accumsan arcu erat donec massa pulvinar.</Text>
      </Center>
      <Center>
        <Text color="grey">Rutrum pharetra id risus interdum. Donec proin quis mauris neque.</Text>
      </Center>
      <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={6} mt={10}>
        <Box boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.9)" width="100%">
          <Flex gap={6}>
            <Image width={{ base: "50%", md: "50%" }} src="https://media.istockphoto.com/id/1333102002/photo/modern-style-bedroom-interior.jpg?s=612x612&w=0&k=20&c=rkG5eNaw4cHR24ZnWxEVm9FIgIBwuXHoZhULUk9E7-Q=" />
            <Box ml={{ base: 0, md: 1 }} mt={{ base: 4, md: 2 }} mb={{ base: 4, md: 5 }} pr={{base:0,md:5}} fontSize="sm">
              <Text>Mapkson Gardenia</Text>
              <Text fontSize="x-small">Mapkson Builders</Text>
              <Text color="#10C66F" fontWeight="bold">Greater Kailash, Delhi</Text>
              <Text>3 Bed 2 bath</Text> <br/>
              <Text mt={{base:30,md:5}} color="grey">Managed by JR Developers</Text>
            </Box>
          </Flex>
        </Box>
        <Box boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.9)" width="100%">
        <Flex gap={6}>
            <Image width={{ base: "50%", md: "50%" }} src="https://media.istockphoto.com/id/1333102002/photo/modern-style-bedroom-interior.jpg?s=612x612&w=0&k=20&c=rkG5eNaw4cHR24ZnWxEVm9FIgIBwuXHoZhULUk9E7-Q=" />
            <Box ml={{ base: 0, md: 1 }} mt={{ base: 4, md: 2 }} mb={{ base: 4, md: 5 }} pr={{base:0,md:5}} fontSize="sm">
              <Text>Mapkson Gardenia</Text>
              <Text fontSize="x-small">Mapkson Builders</Text>
              <Text color="#10C66F" fontWeight="bold">Greater Kailash, Delhi</Text>
              <Text>3 Bed 2 bath</Text> <br/>
              <Text mt={{base:30,md:5}} color="grey">Managed by JR Developers</Text>
            </Box>
          </Flex>
        </Box>
        <Box boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.9)" width="100%">
        <Flex gap={6}>
            <Image width={{ base: "50%", md: "50%" }} src="https://media.istockphoto.com/id/1333102002/photo/modern-style-bedroom-interior.jpg?s=612x612&w=0&k=20&c=rkG5eNaw4cHR24ZnWxEVm9FIgIBwuXHoZhULUk9E7-Q=" />
            <Box ml={{ base: 0, md: 1 }} mt={{ base: 4, md: 2 }} mb={{ base: 4, md: 5 }} pr={{base:0,md:5}} fontSize="sm">
              <Text>Mapkson Gardenia</Text>
              <Text fontSize="x-small">Mapkson Builders</Text>
              <Text color="#10C66F" fontWeight="bold">Greater Kailash, Delhi</Text>
              <Text>3 Bed 2 bath</Text> <br/>
              <Text mt={{base:30,md:5}} color="grey">Managed by JR Developers</Text>
            </Box>
          </Flex>
        </Box>
      </Grid>
    </Box>

    <Footer/>

    </>

  )
}

export default Home