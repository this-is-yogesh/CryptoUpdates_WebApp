import { Box,Image,Text } from '@chakra-ui/react'
import React from 'react'
import img from '../assests/img5.png'
import { motion } from "framer-motion";
const Home = () => {
  return (

    <Box bgColor={'blackAlpha.900'} w={'full'} h={'70vh'} >

<motion.div
        style={{
          height: "70vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
<Image src={img} w={'full'} h={'full'} filter={"grayscale(1)"} objectFit={'contain'} />
</motion.div>
{/* <Text textAlign={'center'}
letterSpacing={'wider'} 
fontSize={'6xl'}
fontWeight={'thin'}
color={'whiteAlpha.600'}
textTransform={'uppercase'} 
my={'2'}
>
    Xcrypto
</Text> */}
    </Box>
  )
}

export default Home