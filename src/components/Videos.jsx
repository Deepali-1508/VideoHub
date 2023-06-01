
import { Heading, Stack, VStack ,Text,Button} from '@chakra-ui/react'
import React, {useState} from 'react'

const Videos = () => {
    const videosArr = [
      {
        src:
          'https://player.vimeo.com/progressive_redirect/playback/689949818/rendition/540p?loc=external&oauth2_token_id=1027659655&signature=cf602155bf49e4e74db6f2ec9d4ecf067fbab44c4295a8950d58ecdb88910882',
        heading: 'Fastest Growing Economy',
        text: 'India becomes the one of the fastest growing Economy in the world , having the GDP of 3 trillion USD dollor.',
      },
      {
        src:
          'https://player.vimeo.com/progressive_redirect/playback/697718184/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=26d69c3df603d083fedd663acaab4d35a33444d11033a626864cf1e578e136cf',
        heading: 'Nature',
        text: 'The different animals and their living in the Forest.',
      },
    
    {src:
     'https://player.vimeo.com/external/577442929.hd.mp4?s=95231c8a7fe2066ffb640204591b01a6c326b97c&profile_id=174',heading:"Skydiving",text:"The thrilling experience with sky.A parachute works by forcing air into the front of it and creating a structured 'wing' under which the canopy pilot can fly.",},
    {src: 'https://player.vimeo.com/progressive_redirect/playback/689925384/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=5a819f11298d53cc1ed85837342f47ea61c8f95b9aeeb0c38edab72a80e0db78',heading:"Forest",text:"Life in forest - Learn and experience with me",},
    {src: 'https://player.vimeo.com/progressive_redirect/playback/688648666/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=070a16d4b244bc11c2bd17b03e04e50460be3d2726ed554959a49fc05dbd0281',heading:"Wakeskating",text:"Wakeskating is a water sport and an adaptation of wakeboarding that employs a similar design of board manufactured from maple or fibreglass.",},
    {src: 'https://player.vimeo.com/progressive_redirect/playback/690770660/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=3a048039957fd878fc72b809b9a0e5f2102eded879a83e00784ecd3ba5123614',heading:"Waves",text:"Water waves are a combination of longitudinal and transverse waves and are surface waves.",},
  ];

  const [videoIndex, setVideoIndex] = useState(0);
  const {src,heading,text} = videosArr[videoIndex];

  return (
    <Stack direction={['column','row']} h={'100vh'} pt={'10'}>
       <VStack w={'full'} >
         <video controls controlsList='nodownload' src={src} style={{width
         :'80%',}}>
         </video>
         
         <VStack pl={"115"} alignItems={'flex-start'}  pt={'8'} w={'full'} overflowY={'auto'}>
         <Heading>{heading} </Heading>
             <Text>{text}</Text>
         </VStack>
          </VStack>

         <VStack w={['full','xl']} alignItems={'stretch'} p={'8'} spacing={'8'} overflowY={'auto'}>
         {videosArr.map((item, index) => (
          <Button
            key={index}
            variant={'ghost'}
            colorScheme={index === videoIndex ? 'purple' : 'gray'}
            onClick={() => setVideoIndex(index)}
          >
            Lecture {index + 1}
          </Button>
        ))}
         </VStack>
       
    </Stack>
  )
}

export default Videos

