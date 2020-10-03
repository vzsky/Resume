import { openModal } from 'react-stateless-modal'
import { Heading } from '@chakra-ui/core'

export const MakeModal = (head: any, body: any) => () =>
  openModal({
    head,
    body,
    animation: { name: 'zoom-in', duration: '700ms' },
  })

export const MakeTextModal = (head: string, body: string) =>
  MakeModal(
    () => <Heading fontFamily="Helvetica">{head}</Heading>,
    () => <p>{body}</p>
  )
