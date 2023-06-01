import { Container ,Heading,Text,Input,Button, VStack, Avatar} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
       <form>
       <VStack w={['full','96']} alignItems={'stretch'} spacing={'8'} m={'auto'} my={'4'} >
           <Heading textAlign={'center'}>VIDEO HUB</Heading>
           <Avatar alignSelf={'center'} boxSize={'32'}/>
           <Input placeholder='Name' value={'name'} required focusBorderColor={'purple.500'}/>
           <Input placeholder='Email' value={'email'} required focusBorderColor={'purple.500'}/>
           <Input placeholder='Password' value={'password'} required focusBorderColor={'purple.500'}/>
           <Button colorScheme={'purple'} type={'submit'}>Sign up</Button>
           <Text textAlign={'right'}>Already Signed Up? {' '} 
            <Button variant={'link'} colorScheme={'purple'}> <Link to={'/login'}>Login</Link> </Button>
           </Text>
       </VStack>
       </form>
    </Container>
  )
}

export default Signup