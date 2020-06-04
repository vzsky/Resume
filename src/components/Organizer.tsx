import React from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/core'
import { IOrganizer, organizer } from '../constants/organizer'
import { Card } from './Card'
import { Title } from './Title'

export const Organizer = () => {
  return (
    <>
      <Title title="Contest Organizer" size="lg" />
      <Flex
        direction="column"
        mt={6}
        width={[23 / 24, 23 / 24, 22 / 24, 21 / 24]}
        mx="auto"
      >
        <Flex flexWrap="wrap" alignItems="center">
          {organizer.map((organize: IOrganizer) => (
            <Box width={['100%', 1 / 2, 1 / 3, 1 / 4]} px={5} py={3}>
              <Card {...organize}>
                <Heading size="md">{organize.name}</Heading>
                <Text color="gray.500">{organize.year}</Text>
                <Text color="gray.800" mt={2}>
                  {organize.desc}
                </Text>
              </Card>
            </Box>
          ))}
        </Flex>
      </Flex>
    </>
  )
}
