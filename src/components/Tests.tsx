import React from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/core'
import { tests } from '../constants/tests'
import { Card } from './Card'
import { ITest } from '../interface'
import { Title } from './Title'

export const Tests = () => (
  <>
    <Title title="Standardized Tests" size="lg" />
    <Flex
      direction="column"
      mt={6}
      width={[23 / 24, 23 / 24, 22 / 24, 16 / 24]}
      mx="auto"
    >
      <Flex flexWrap="wrap" alignItems="center">
        {tests.map((test: ITest, i: number) => (
          <Box key={i} width={['100%', 1 / 2, 1 / 3, 1 / 3]} px={5} py={3}>
            <Card {...test}>
              <Heading size="sm">{test.name}</Heading>
              <Text color="gray.500">{test.year}</Text>
              <Heading size="md">{test.score}</Heading>
            </Card>
          </Box>
        ))}
      </Flex>
    </Flex>
  </>
)
