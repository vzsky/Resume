import React from 'react'
import { Flex } from '@chakra-ui/core'
import { Contact } from '../components/Contact'
import { Award } from '../components/Award'
import { Activity } from '../components/Activity'
import { Skill } from '../components/Skill'
import { Educations } from '../components/Educations'

const IndexPage = () => {
  return (
    <Flex direction="column" my={20}>
      <Contact />
      <Educations />
      <Award />
      <Activity />
      <Skill />
    </Flex>
  )
}

export default IndexPage
