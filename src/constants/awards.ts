export interface IAward {
  name: string
  award: string
  year: string
  img?: string
}

export const awards: IAward[] = [
  {
    name: 'Thailand Olympaid in Informatics (TOI)',
    year: '2019',
    award: 'Silver Medal',
  },
]
