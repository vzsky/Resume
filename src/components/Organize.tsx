import React from 'react'
import { Box, Flex } from '@chakra-ui/core'
import { organize } from '../constants/organize'
import { Display } from './Card'
import { Title } from './Title'
import { IDisplay } from '../interface'

export const Organize = () => {
  return (
    <>
      <Title title="Activities" size="xl" />
      <Flex
        direction="column"
        mt={6}
        width={[23 / 24, 23 / 24, 22 / 24, 21 / 24]}
        mx="auto"
      >
        <Flex flexWrap="wrap" alignItems="center">
          {organize.map((organize: IDisplay, i: number) => (
            <Box key={i} width={['100%', 1 / 2, 1 / 3, 1 / 4]} px={5} py={3}>
              <Display {...organize} />
            </Box>
          ))}
        </Flex>
      </Flex>
    </>
  )
}
