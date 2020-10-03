import { IconType } from 'react-icons/lib'

export interface IDisplay {
  name: string
  desc: string
  modalDesc: string
  role?: string
  year?: string
  href?: string
  img?: string
}

export interface ITest {
  name: string
  score: string
  year?: string
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
  modalDesc: string
  img?: string
}

export interface ISkill {
  name: string
  modalDesc: string
}

export interface ISkills {
  name: string
  skillset: ISkill[]
}
