import React from 'react'
import { Title } from './Title'
import { Organizer } from './Organizer'
import { Research } from './Research'
import { Projects } from './Projects'
import { Initiatives } from './Initiatives'

export const Activity = () => {
  return (
    <>
      <Title title="Activities" size="xl" />
      {/* <Research />
      <Projects /> */}
      <Organizer />
      <Initiatives />
    </>
  )
}
