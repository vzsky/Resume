import React from 'react'
import { Title } from './Title'
import { Organize } from './Organize'
import { Initiatives } from './Initiatives'

export const Activity = () => {
  return (
    <>
      <Title title="Activities" size="xl" />
      <Organize />
      <Initiatives />
    </>
  )
}
