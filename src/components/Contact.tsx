import React from 'react'
import { Box, Flex } from '@chakra-ui/core'
import { contact } from '../constants/contact'
import { IContact } from '../interface'

export const Contact = () => {
  return (
    <>
      <Box mx="auto" width={[21 / 24, 21 / 24, 20 / 24, 20 / 24]} mt={6}>
        <Flex direction="row">
          {contact.map((cont: IContact, i: number) => (
            <Box key={i} pr={[5, 10]}>
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
