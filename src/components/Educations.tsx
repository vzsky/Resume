import React from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/core'
import { IEducations, educations } from '../constants/educations'
import { Card } from './Card'
import { Title } from './Title'

export const Educations = () => {
  return (
    <>
      <Title title="Education" />
      <Flex
        direction="column"
        mt={6}
        width={[23 / 24, 23 / 24, 22 / 24, 16 / 24]}
        mx="auto"
      >
        <Flex flexWrap="wrap" alignItems="center">
          {educations.map((education: IEducations) => (
            <Box width={['100%', '100%', 1 / 2, 1 / 2]} px={5} py={3}>
              <Card {...education}>
                <Heading size="md">{education.name}</Heading>
                <Text color="gray.500">{education.year}</Text>
                {/* <Text color="gray.800" mt={2}>
                  {education.desc}
                </Text> */}
              </Card>
            </Box>
          ))}
        </Flex>
      </Flex>
    </>
  )
}
