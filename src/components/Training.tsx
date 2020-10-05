import React from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/core'
import { trainings } from '../constants/training'
import { Card } from './Card'
import { IEdu } from '../interface'
import { Title } from './Title'

export const Schools = () => (
  <>
    <Title title="Training" size="lg" />
    <Flex
      direction="column"
      mt={6}
      width={[23 / 24, 23 / 24, 22 / 24, 16 / 24]}
      mx="auto"
    >
      <Flex flexWrap="wrap" alignItems="center">
        {trainings.map((training: IEdu, i: number) => (
          <Box key={i} width={['100%', '100%', 1 / 2, 1 / 2]} px={5} py={3}>
            <Card {...training}>
              <Heading size="md">{training.name}</Heading>
              <Text color="gray.500">{training.year}</Text>
              {training.gpa && (
                <Heading size="sm"> GPA : {training.gpa}</Heading>
              )}
              <Text color="gray.800" mt={2}>
                {training.desc}
              </Text>
            </Card>
          </Box>
        ))}
      </Flex>
    </Flex>
  </>
)
