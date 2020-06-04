import React from 'react'
import { Box, Flex } from '@chakra-ui/core'
import { IContact, contact, name } from '../constants/contact'
import { Title } from './Title'

export const Contact = () => {
  return (
    <>
      <Title title={name} />
      <Box mx="auto" width={[21 / 24, 21 / 24, 20 / 24, 20 / 24]} mt={6}>
        <Flex direction="row">
          {contact.map((cont: IContact) => (
            <Box pr={[5, 10]}>
              <a href={cont.href} target="_blank">
                <Box as={cont.icon} size={6} />
              </a>
            </Box>
          ))}
        </Flex>
      </Box>
    </>
  )
}
