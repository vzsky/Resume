import { IDisplay } from '../interface'

export const experience: IDisplay[] = [
  {
    name: 'KVIS Student Committee',
    year: '2019',
    desc: 'Hosting multiple events and improving life quality of students',
    modalDesc:
      "I was elected as a vice presendent of the committee. Together with the team, we host a sport festival, Thai traditional Loi Kratong, Students' concert, Valentine's day, Prom, and many more. Concerning about life quality, we negotiate and adjust the dormitory and school regulations to facilitate students.",
    role: 'Vice President',
  },
  {
    name: 'PiRSquare',
    year: '2020',
    desc:
      'I worked on a 1-month internship as a full stack developer using NodeJs, ReactJS, TS, and PHP. I had been assigned to multiple projects to work with other senior developers.',
    role: 'Developer Intern',
    href: 'http://pirsquare.net',
  },
  {
    name: 'APCYS',
    year: '2018',
    desc:
      'Created a web application to facilitate guests of the Asia-Paciffic Conference of Young Scientists',
    modalDesc:
      'Kamnoetvidya Science Academy had a chance to host the 7th Asia-Paciffic Conference of Young Scienctists. To facilitate guests on registration, club activities, and event notification, my colleages and I produced a simple web-application using flask and html.',
    role: 'App developer',
  },
  {
    name: 'Siriraj Med Camp',
    year: '2022',
    desc: "I built a web application on a contract with Siriraj medical students to set up a registration service for the medical camp.",
    role: 'Full Stack',
    modalDesc: "The camp was for high school students aiming to get in a medical school or interested in being a medical doctor. Turned out there are a lot of students in this group such that there are more than 6000 registered users during the first 10 days of registration. The system involves offering an online timed quiz, and for security purposes, I decided to use email authentication, which add a little complication."
  }
]
