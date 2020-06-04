import React from 'react'
import { Box, Flex, Heading, Text, Link } from '@chakra-ui/core'
import { ILink, IProjects, projects } from '../constants/projects'
import { Card } from './Card'
import { Title } from './Title'

export const Projects = () => {
  return (
    <>
      <Title title="Projects" size="lg" />
      <Flex
        direction="column"
        mt={6}
        width={[23 / 24, 23 / 24, 22 / 24, 21 / 24]}
        mx="auto"
      >
        <Flex flexWrap="wrap" alignItems="center">
          {projects.map((project: IProjects) => (
            <Box width={['100%', 1 / 2, 1 / 3, 1 / 4]} px={5} py={3}>
              <Card {...project}>
                {project.highlight && (
                  <Text color="red.500" fontSize="sm">
                    {project.highlight}
                  </Text>
                )}
                <Heading size="md">{project.name}</Heading>
                {project.link.map((link: ILink) => (
                  <a href={link.href} target="_blank">
                    <Link color="gray.500" mr={3}>
                      {link.name}
                    </Link>
                  </a>
                ))}
                <Text color="gray.800" mt={2}>
                  {project.desc}
                </Text>
              </Card>
            </Box>
          ))}
        </Flex>
      </Flex>
    </>
  )
}
