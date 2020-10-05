import React from 'react'
import { Title } from './Title'
import { Schools } from './Schools'
import { Tests } from './Tests'
import { Training } from './Training'

export const Educations = () => {
  return (
    <>
      <Title title="Education" />
      <Schools />
      <Tests />
      <Training />
    </>
  )
}
