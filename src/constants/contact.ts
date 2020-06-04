import {
  FaGithub,
  FaRegEnvelope,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa'
import { IconType } from 'react-icons/lib'

export interface IContact {
  href: string
  icon: IconType
}

export const contact: IContact[] = [
  {
    href: 'https://github.com/vzsky',
    icon: FaGithub,
  },
  {
    href: 'mailto:touchsungkawichai@gmail.com',
    icon: FaRegEnvelope,
  },
  {
    href: 'https://www.linkedin.com/in/touchs/',
    icon: FaLinkedin,
  },
  {
    href: 'https://facebook.com/my99n',
    icon: FaFacebook,
  },
  {
    href: 'https://instagram.com/my99.n',
    icon: FaInstagram,
  },
]

export const name: String = 'Touch Sungkawichai'
