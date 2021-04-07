import { Box, Flex, VStack, Text, Divider } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { LocationInfo } from "../components/LocationInfo";
import { MainBanner } from "../components/MainBanner";

export default function Home() {
  return (
    <>
      <Header />
      <MainBanner minH='165px'>
        <Box padding='28px 16px'>
          <Text as='h2' maxW='300px' fontSize='20px' color='white.50' fontWeight='500' mb='8px'>
            5 Continentes, infinitas possibilidades.
          </Text>
          <Text maxW='300px' fontSize='14' color='gray.50'>
            Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
          </Text>
        </Box>

        <VStack spacing="28px" padding='0 50px'  maxW='480px' margin='36px auto'>
          <Flex w='100%' align='center' justify='space-between'>
            <LocationInfo text='vida noturna'/>
            <LocationInfo text='praia'/>
          </Flex>

          <Flex w='100%' align='center' justify='space-between'>
            <LocationInfo text='moderno'/>
            <LocationInfo text='clássico'/>
          </Flex>
          <LocationInfo text='e mais...' />
        </VStack>

        <Divider w='60px' borderColor='#47585B' margin='0 auto' mb='24px'/>

        <Text 
          fontSize='20' 
          fontWeight='500' 
          color='gray.100' 
          textAlign='center' 
          padding='0 16px' 
          margin='0 auto 20px' 
          lineHeight='30px'
        >
          Vamos nessa? <br/> Então escolha seu continente
        </Text>
      </MainBanner>
    </>
  )
}
