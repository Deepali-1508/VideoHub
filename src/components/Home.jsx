import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';


import img1 from "../assests/1.jpg";
import img2 from "../assests/2.jpg";
import img3 from "../assests/3.jpg";
import img4 from "../assests/4.jpg";
import img5 from "../assests/5.png";

const headingOptions ={
   pos:"absolute",
   left:"50%",
   top:"50%",
   transform:"translate(-50%,-50%)",
   textTransform: "uppercase",
   p:'4',
   size :'4xl'
}
const Home = () => {
  
  return (
    <Box>
       <MyCarousel/>

       <Container maxW={'container.xl'} minH={'100vh'} p="16">
        <Heading
        textTransform={'uppercase'} py ="2" w={'fit-content'} borderBottom = {'2px solid'} margin='auto'
        >
        Services</Heading>
        <Stack
        h="full" p={'4'} alignItems={'center'} direction ={['column','row']}
        >
         <Image src={img5} h ={['40','400']} filter={'hue-rotate(-130deg)'}/>
         <Text
         letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign={'center'}
         >
         Unlock the doors to endless possibilities with our repository of free knowledge.
         Expand your horizons without spending a dime - access a treasure trove of free knowledge.
         Ignite your curiosity and fuel your intellect with our collection of freely accessible knowledge.
         Discover the priceless value of free knowledge and embark on a journey of lifelong learning
         No payment required, only a desire to learn - quench your thirst for knowledge with us.
         
         <Heading  color={"purple.300"}>
         "Liberate your thirst for knowledge - here, learning comes at no cost."
         </Heading>

         </Text>
         
         </Stack>
       </Container>
    </Box>
  );
};

const MyCarousel = () =>(
  <Carousel
  autoPlay
  infiniteLoop
  interval={1000}
  showStatus={false}
  showThumbs={false}
  showArrows={false}
>
      <Box w="full" h={'100vh'}>
      <Image src={img1}  h="full" w={'full'}  objectFit={'cover'}/>
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
      AI: Shaping the World of Tomorrow.
      </Heading>
     </Box>

     <Box w="full" h={'100vh'}>
      <Image src={img2} h="full" w={'full'}  objectFit={'cover'}/>
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions} >
        Future is gaming
      </Heading>
     </Box>

     <Box w="full" h={'100vh'}>
      <Image src={img3} h="full" w={'full'}  objectFit={'cover'}/>
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions} >
      Game Tech Revolutionizing the Way We Play.
      </Heading>
     </Box>
      
     <Box w="full" h={'100vh'}>
      <Image src={img4} h="full" w={'full'}  objectFit={'cover'}/>
      <Heading bgColor={''} color={'white'} {...headingOptions} >
       LEARN WEB TECH
      </Heading>
     </Box>
     
    </Carousel>
);
export default Home