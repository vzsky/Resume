import { IconType } from 'react-icons/lib'

export interface IDisplay {
  name: string
  desc: string
  role?: string
  year?: string
  href?: string
  img?: string
}

export interface IEdu {
  name: string
  desc: string
  gpa?: string
  year?: string
  href?: string
  img?: string
}

export interface IContact {
  href: string
  icon: IconType
}

export interface IAward {
  name: string
  award: string
  year: string
  img?: string
}

export interface ISkills {
  name: string
  skillset: string[]
}
