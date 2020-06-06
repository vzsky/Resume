import React from 'react'
import { Box, Flex, Heading } from '@chakra-ui/core'
import { skills } from '../constants/skills'
import { Title } from './Title'
import { Card } from './Card'
import { ISkills } from '../interface'

const TypedSkill = (props) => (
  <>
    <Title title={props.skillType} size="lg" />
    <Flex
      direction="column"
      mt={6}
      width={[22 / 24, 23 / 24, 20 / 24, 18 / 24]}
      mx="auto"
    >
      <Flex flexWrap="wrap" alignItems="center">
        {props.skills.map((skill: string) => (
          <Box width={[1 / 2, 1 / 3, 1 / 4, 1 / 6]} px={[1, 1, 3, 3]} py={2}>
            <Card>
              <Heading size="md">{skill}</Heading>
            </Card>
          </Box>
        ))}
      </Flex>
    </Flex>
  </>
)

export const Skill = () => {
  return (
    <>
      <Title title="Skills" />
      {skills.map((val: ISkills) => (
        <TypedSkill skills={val.skillset} skillType={val.name} />
      ))}
    </>
  )
}
