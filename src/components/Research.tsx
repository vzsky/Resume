import React from 'react'
import { Box, Flex } from '@chakra-ui/core'
import { research } from '../constants/research'
import { Display } from './Card'
import { Title } from './Title'
import { IDisplay } from '../interface'

export const Research = () => {
  return (
    <>
      <Title title="Research" size="xl" />
      <Flex
        direction="column"
        mt={6}
        width={[23 / 24, 23 / 24, 22 / 24, 21 / 24]}
        mx="auto"
      >
        <Flex flexWrap="wrap" alignItems="center">
          {research.map((exp: IDisplay, i: number) => (
            <Box key={i} width={['100%', 1 / 2, 1 / 2, 1 / 3]} px={5} py={3}>
              <Display {...exp} />
            </Box>
          ))}
        </Flex>
      </Flex>
    </>
  )
}
