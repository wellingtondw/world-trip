import { extendTheme } from '@chakra-ui/react'

const colors = {
  gray: {
    '50': '#dadada',
    '100': '#47585B',
  },
  white: {
    '50': '#F5F8FA' 
  },
  yellow: {
    '100': '#FFBA08'
  }
}

export const theme  = extendTheme({
  colors,
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Poppins, sans-serif'
  },
  styles: {
    global: {
      body: {
        bg: 'white.50',
        color: 'gray.100'
      }
    }
  }
})

