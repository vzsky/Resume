import React from 'react'
import { Box, Flex } from '@chakra-ui/core'
import { init } from '../constants/initiatives'
import { Display } from './Card'
import { Title } from './Title'
import { IDisplay } from '../interface'

export const Initiatives = () => {
  return (
    <>
      <Title title="Initiatives" size="lg" />
      <Flex
        direction="column"
        mt={6}
        width={[23 / 24, 23 / 24, 22 / 24, 21 / 24]}
        mx="auto"
      >
        <Flex flexWrap="wrap" alignItems="center">
          {init.map((item: IDisplay, i: number) => (
            <Box key={i} width={['100%', 1 / 2, 1 / 3, 1 / 3]} px={5} py={3}>
              <Display {...item} />
            </Box>
          ))}
        </Flex>
      </Flex>
    </>
  )
}
