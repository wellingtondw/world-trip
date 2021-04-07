import { Flex, Image, Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'
import { ChevronLeftIcon } from '@chakra-ui/icons'

type HeaderProps = {
  previousRouteHref?: string;
}

export function Header({ previousRouteHref = '' }: HeaderProps ) {
  return (
    <Flex h='50px' position='relative' alignItems='center'>
      {!!previousRouteHref && (
        <Link href={previousRouteHref} passHref>
          <ChakraLink ml='4'>
            <ChevronLeftIcon w='4' h='4'/>
          </ChakraLink>
        </Link>
      )}

      <Image src='/images/logo.svg' alt='World Trip' position='absolute' left='50%' transform='translateX(-50%)'/>
    </Flex>
  )
}