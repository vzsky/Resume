import React from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/core'
import { IAward, awards } from '../constants/awards'
import { Card } from './Card'
import { Title } from './Title'

export const Award = () => {
  return (
    <>
      <Title title="Awards" size="xl" />
      <Flex
        direction="column"
        mt={6}
        width={[23 / 24, 23 / 24, 21 / 24, 21 / 24]}
        mx="auto"
      >
        <Flex flexWrap="wrap" alignItems="center">
          {awards.map((award: IAward) => (
            <Box width={['100%', 1 / 2, 1 / 3, 1 / 4]} px={5} py={3}>
              <Card {...award}>
                <Heading size="md" fontWeight="bold">
                  {award.name}
                </Heading>
                <Text color="gray.500">{award.year}</Text>
                <Text color="gray.800" mt={2}>
                  {award.award}
                </Text>
              </Card>
            </Box>
          ))}
        </Flex>
      </Flex>
    </>
  )
}
