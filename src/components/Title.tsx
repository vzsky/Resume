import React from 'react'

import { Box, Flex, Heading } from '@chakra-ui/core'

export const Title = (props) => {
  return (
    <Flex alignItems="center">
      <Box mx="auto" width={[21 / 24, 21 / 24, 20 / 24, 20 / 24]} mt={50}>
        <Heading size={props.size} mb={4}>
          {props.title}
        </Heading>
      </Box>
    </Flex>
  )
}
