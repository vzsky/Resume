export interface ILink {
  name: string
  href: string
}
export interface IProjects {
  name: string
  link: ILink[]
  desc: string
  highlight?: string
}

export const projects: IProjects[] = []
