import {
  FaGithubAlt,
  FaRegEnvelope,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaMediumM,
} from 'react-icons/fa'
import { IContact } from '../interface'

export const contact: IContact[] = [
  {
    href: 'https://github.com/vzsky',
    icon: FaGithubAlt,
  },
  {
    href: 'mailto:touchsungkawichai@gmail.com',
    icon: FaRegEnvelope,
  },
  {
    href: 'https://www.linkedin.com/in/touchs/',
    icon: FaLinkedinIn,
  },
  {
    href: 'https://facebook.com/my99n',
    icon: FaFacebookF,
  },
  {
    href: 'https://instagram.com/my99.n',
    icon: FaInstagram,
  },
  {
    href: 'https://t.me/my99n',
    icon: FaTelegramPlane,
  },
  {
    href: 'https://medium',
    icon: FaMediumM,
  },
]

export const info = {
  name: 'Touch Sungkawichai',
  phone: '+66802075412',
  email: 'touchsungkawichai@gmail.com',
  address: 'Thailand',
}
