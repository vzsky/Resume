import { IDisplay } from '../interface'

export const experience: IDisplay[] = [
  {
    name: 'KVIS Student Committee',
    year: '2019',
    desc: 'Hosting multiple events and improving life quality of students',
    modalDesc:
      "I was elected as a vice presendent of the committee. Together with the team, we host a sport festival, Thai traditional Loi Kratong event, Students' concert, Valentine's day, Prom, and many more. Concerning about life quality, we propose an adjustment of the dormitory and school regulations and successfully pushed forward some.",
    role: 'Vice President',
  },
  {
    name: 'PiRSquare',
    year: '2020',
    desc:
      '1-month internship as a full stack developer using NodeJs, ReactJS, TS, and Laravel. Assigned to a few projects and worked with several senior developers.',
    role: 'Developer Intern',
    href: 'http://pirsquare.net',
  },
  {
    name: 'SIMPIC 2024', 
    year: '2023', 
    desc: 'On a contract to develop a platform for the SIMPIC 2024 competition held by the Faculty of Medicine, Siriraj, Thailand.',
    role: 'Full Stack', 
    href: 'www.simpic2024.com',
    modalDesc: "SIMPIC, or Siriraj International Medical Microbiology, Parasitology, and Immunology Competition is the annually held event. I got to devlop the website in a short span of time to facilitate the registration of the event."
  },
  {
    name: 'Siriraj Med Camp',
    year: '2022',
    desc: "Built a web application on a contract with Siriraj medical students to set up a registration service for the medical camp.",
    role: 'Full Stack',
    modalDesc: "The camp was for high school students aiming to get in a medical school or interested in being a medical doctor. Turned out there are a lot of students in this group such that there are more than 6000 registered users during the first 10 days of registration. The system involves offering an online timed quiz, and for security purposes, I decided to use email authentication, which add a little complication."
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
    name: 'IELTS by Classmates',
    desc: 'Built an E-learning platform for the group named Classmates',
    role: 'Back End',
    href: 'https://ieltsbyclassmates.com'
  },
  {
    name: "TMLCC",
    year: "2021",
    desc: "Ranked 9th in the Thailand Machine Learning for Chemistry Competition",
    modalDesc: "Using various tools for regression on python, we managed to predict certain property of the MOFs and ranked in the 9th place."
  },
  {
    name: "HackUST",
    year: "2022",
    desc: "Joined HackUST hackathon and developed a blockchain-based platform to improve work enrollment",
    modalDesc: "In a team of 5 students, we idealized a platform to create a network of labor union in order to keep people in the same work area connected and gain power to negotiate to the high-capital authorities using blockchain."
  }
]
