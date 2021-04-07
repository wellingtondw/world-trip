import { Flex, FlexProps, Text } from '@chakra-ui/react'

type LocationInfoProps = {
  text: string;
} & FlexProps

export function LocationInfo({ text, ...rest }: LocationInfoProps) {
  return (
    <Flex alignItems='center' {...rest}>
      <Text 
        fontSize='18px'
        fontWeight='500'
        color='gray.100'
        _before={{
          content: '""',
          display: 'inline-block',
          width: '8px',
          height: '8px',
          background: 'yellow.100',
          borderRadius: '50%',
          mr: '8px'
        }}
      >
        {text}
      </Text>
    </Flex>
  )
}