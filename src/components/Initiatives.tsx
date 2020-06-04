import React from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/core'
import { Ita, ta } from '../constants/ta'
import { Card } from './Card'
import { Title } from './Title'

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
          {ta.map((item: Ita) => (
            <Box width={['100%', 1 / 2, 1 / 3, 1 / 3]} px={5} py={3}>
              <Card {...item}>
                <Heading size="md">{item.name}</Heading>
                <Text color="gray.500">{item.year}</Text>
                <Text color="gray.800" mt={2}>
                  {item.desc}
                </Text>
              </Card>
            </Box>
          ))}
        </Flex>
      </Flex>
    </>
  )
}
