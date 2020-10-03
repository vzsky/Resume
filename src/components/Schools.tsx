import React from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/core'
import { educations } from '../constants/educations'
import { Card } from './Card'
import { IEdu } from '../interface'
import { Title } from './Title'

export const Schools = () => (
  <>
    <Title title="Schools" size="lg" />
    <Flex
      direction="column"
      mt={6}
      width={[23 / 24, 23 / 24, 22 / 24, 16 / 24]}
      mx="auto"
    >
      <Flex flexWrap="wrap" alignItems="center">
        {educations.map((education: IEdu, i: number) => (
          <Box key={i} width={['100%', '100%', 1 / 2, 1 / 2]} px={5} py={3}>
            <Card {...education}>
              <Heading size="md">{education.name}</Heading>
              <Text color="gray.500">{education.year}</Text>
              {education.gpa && (
                <Heading size="sm"> GPA : {education.gpa}</Heading>
              )}
              <Text color="gray.800" mt={2}>
                {education.desc}
              </Text>
            </Card>
          </Box>
        ))}
      </Flex>
    </Flex>
  </>
)
