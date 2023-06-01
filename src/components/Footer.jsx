import React from 'react'
import {Box, Button, Heading, HStack, Stack,VStack,Input,Text} from '@chakra-ui/react';
import { AiOutlineSend} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH = {'40'} p="16" color={'white'}>
     <Stack direction={['column','row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
            <Heading
             size={'md'} textTransform={'uppercase'} textAlign={['centre','left']}
            >Subscribe to get updates</Heading>

            <HStack borderBottom={'2px solid white'}>
                <Input placeholder='Enter your email...' border={'none'} borderRadius={'none'} outline={'none'} focusBorderColor="none"/>
                <Button p={'0'} colorScheme={'purple'} variant={'ghost'} borderRadius={'0 20px 20px 0'}> <AiOutlineSend size={20} /></Button>  
            </HStack>
        </VStack>


        <VStack w={'full'}  borderLeft={['none','1px solid white']} borderRight={['none','1px solid white']}>
            <Heading textAlign={'centre'}>VIDEO HUB</Heading>
             <Text>All rights received</Text>
        </VStack>

        <VStack w={'full'}>
           <Heading size={'md'} textTransform={'uppercase'}>Social Media</Heading>
           <Button variant={'link'} colorScheme={'purple'}>
            <a target={'blank'} href="#">Instagram</a>
           </Button>
           <Button variant={'link'} colorScheme={'purple'}>
            <a target={'blank'} href="#">Github</a>
           </Button>

           <Button variant={'link'} colorScheme={'purple'}>
            <a target={'blank'} href="#"> Youtube</a>
           </Button>
        </VStack>
     </Stack>
    </Box>
  )
}
export default Footer