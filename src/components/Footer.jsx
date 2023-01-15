import React from 'react'
import { Box,Stack,VStack,Button,HStack,Text,Heading } from '@chakra-ui/react'



const Footer = () => {
  return (
    <Box   bgColor={"blackAlpha.900"}
    color={"whiteAlpha.700"}
    minH={"48"}
    px={"16"}
    py={["16", "8"]}>
<Stack  direction={['column','row']} h="full" alignItems={'center'}>
    <VStack   w="full" alignItems={['center','flex-start']} p="3">
<Text fontWeight={'bold'}>About Us : </Text>
<Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the best crypto trading app in India, we provide our guidance
            at a very cheap price.
          </Text>

</VStack>


</Stack>
    </Box>
  )
}

export default Footer