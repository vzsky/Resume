import React from 'react'
import { Box, Flex, Heading, Text, Link } from '@chakra-ui/core'
import { IResearch, research } from '../constants/research'
import { Card } from './Card'
import { Title } from './Title'

export const Research = () => {
  return (
    <>
      <Title title="Research" size="lg" />
      <Flex
        direction="column"
        mt={6}
        width={[23 / 24, 23 / 24, 22 / 24, 21 / 24]}
        mx="auto"
      >
        <Flex flexWrap="wrap" alignItems="center">
          {research.map((item: IResearch) => (
            <Box width={['100%', 1 / 2, 1 / 2, 1 / 3]} px={5} py={3}>
              <Card {...research}>
                <Heading size="md">{item.name}</Heading>
                <a href={item.href} target="_blank">
                  <Link color="gray.500" target="_blank">
                    arxiv
                  </Link>
                </a>
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
