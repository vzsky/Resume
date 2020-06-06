import { Contact } from './Contact'
import { Name } from './Title'
import { info } from '../constants/contact'

export const Identity = (props) => (
  <>
    <Name {...info} />
    <Contact />
  </>
)
