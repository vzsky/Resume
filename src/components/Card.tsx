import React from 'react'
import { Box, PseudoBox } from '@chakra-ui/core'

const boxConfig = {
  boxShadow: 'md',
  rounded: 'md',
  _hover: { boxShadow: 'xl' },
  transition: '0.2s',
}

const padding = {
  p: 6,
}

export const Card = (props) => {
  return (
    <>
      {props.img ? (
        <PseudoBox {...boxConfig}>
          <picture>
            <source type="image/webp" srcSet={`/${props.img}.webp`} />
            <source type="image/jpeg" srcSet={`/${props.img}.jpg`} />
            <img src={`/${props.img}.jpg`} alt="" />
          </picture>
          <Box {...padding}>{props.children}</Box>
        </PseudoBox>
      ) : (
        <PseudoBox {...padding} {...boxConfig}>
          {props.children}
        </PseudoBox>
      )}
    </>
  )
}
