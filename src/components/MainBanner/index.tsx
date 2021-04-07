import { Box, BoxProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

type MainBannerProps = {
  children: ReactNode;
} & BoxProps

export function MainBanner({ children, ...rest }: MainBannerProps) {
  return (
    <Box 
      w='100%' h='50px' 
      bgImage='url(/images/banner-background.jpg)'   
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      bgSize='cover'
      {...rest}
    >
      {children}
    </Box>
  ) 
}