import React from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/core'
import { schools } from '../constants/schools'
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
        {schools.map((school: IEdu, i: number) => (
          <Box key={i} width={['100%', '100%', 1 / 2, 1 / 2]} px={5} py={3}>
            <Card {...school}>
              <Heading size="md">{school.name}</Heading>
              <Text color="gray.500">{school.year}</Text>
              {school.major && <Heading size="sm"> majoring in {school.major} </Heading>}
              {school.gpa && <Heading size="sm"> GPA : {school.gpa}</Heading>}
              <Text color="gray.800" mt={2}>
                {school.desc}
              </Text>
            </Card>
          </Box>
        ))}
      </Flex>
    </Flex>
  </>
)
