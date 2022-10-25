import React from 'react'
import { Box, Flex } from '@chakra-ui/core'
import { Award } from '../components/Award'
import { Activity } from '../components/Activity'
import { Skill } from '../components/Skill'
import { Educations } from '../components/Educations'
import { Experience } from '../components/Experience'
import { Research } from '../components/Research'
import { Identity } from '../components/Identity'
import { Footer } from '../components/Footer'

const BlankSpace = () => <Box height="100px" />

const IndexPage = () => {
  return (
    <Flex direction="column" my={20}>
      <Identity />
      <Educations />
      <Award />
      <Research />
      <Experience />
      <Activity />
      <Skill />
      <BlankSpace />
      <Footer />
    </Flex>
  )
}

export default IndexPage
