import emoji from 'react-easy-emoji';
import googlelogo from './assets/img/icons/common/google.svg'
import github from './assets/img/icons/common/github.svg'
export const greetings = {
    "name": "Sandile Maphosa",
    "title": "Hi all, I'm Sandile",
    "description": "A passionate Full Stack Web Developer and Mobile App Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Python / Django / Flask and some other cool libraries and frameworks and Cross Platform Mobile Apps With Flutter.",
    "resumeLink": "https://linkedin.com/in/sandile-maphosa-a81a78107"
}

export const openSource = {
  githubUserName: 'sandile263',
};

export const contact = {
  
}

export const socialLinks = {
    "facebook": "https://www.facebook.com/sandile263",
    "instagram": "https://www.instagram.com/thatndebeleguy",
    "twitter": "https://twitter.com/zimanalytica",
    "github": "https://github.com/sandile263",
    "linkedin": "https://linkedin.com/in/sandile-maphosa-a81a78107/"
}

export const skillsSection = {
    title: 'What I do',
    subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
    skills: [
      emoji(
        '⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications'
      ),
      emoji('⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks'),
      emoji(
        '⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean'
      ),
    ],
    
    softwareSkills: [
      {
        skillName: 'html-5',
        fontAwesomeClassname: 'vscode-icons:file-type-html',
      },
      {
        skillName: 'css3',
        fontAwesomeClassname: 'vscode-icons:file-type-css',
      },
      {
        skillName: 'sass',
        fontAwesomeClassname: 'logos:sass',
      },
      {
        skillName: 'JavaScript',
        fontAwesomeClassname: 'logos:javascript',
      },
      {
        skillName: 'TypeScript',
        fontAwesomeClassname: 'logos:typescript-icon',
      },
      {
        skillName: 'reactjs',
        fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
      },
      {
        skillName: 'nodejs',
        fontAwesomeClassname: 'logos:nodejs-icon',
      },
      {
        skillName: 'flutter',
        fontAwesomeClassname: 'logos:flutter',
      },
      {
        skillName: 'swift',
        fontAwesomeClassname: 'vscode-icons:file-type-swift',
      },
      {
        skillName: 'npm',
        fontAwesomeClassname: 'vscode-icons:file-type-npm',
      },
      {
        skillName: 'sql-database',
        fontAwesomeClassname: 'vscode-icons:file-type-sql',
      },
      {
        skillName: 'mongoDB',
        fontAwesomeClassname: 'vscode-icons:file-type-mongo',
      },
      {
        skillName: 'aws',
        fontAwesomeClassname: 'logos:aws',
      },
      {
        skillName: 'firebase',
        fontAwesomeClassname: 'logos:firebase',
      },
      {
        skillName: 'python',
        fontAwesomeClassname: 'logos:python',
      },
      {
        skillName: 'git',
        fontAwesomeClassname: 'logos:git-icon',
      },
      {
        skillName: 'docker',
        fontAwesomeClassname: 'logos:docker-icon',
      },
    ],
}


export const SkillBars = [
    {
      Stack: 'Frontend/Design', //Insert stack or technology you have experience in
      progressPercentage: '70', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Backend',
      progressPercentage: '75',
    },
    {
      Stack: 'Programming',
      progressPercentage: '80',
    },
  ]

export const educationInfo = [
    {
      schoolName: 'Mutare Polytechnic',
      subHeader: 'Diploma in Information Technology',
      duration: 'January 2015 - April 2019',
      desc: 'Obtained a Diploma in ICT',
     
    },
    {
      schoolName: 'Udacity(Facebook Scholarship)',
      subHeader: 'Deep Learning Nanodegree',
      duration: 'January 2020 - July 2020',
      desc: 'Participated in the research of Deep Learning.',
     
    },
    
]

export const experience = [
  {
    role: 'IT Intern',
    company: 'Njere Microfinance',
    companylogo: googlelogo,
    date: 'January 2017 – December 2017',
    desc:
      'IT Intern',
  },
  {
    role: 'Business Development Manager',
    company: 'Cumulus1',
    companylogo: github,
    date: 'January 2019 – October 2021',
    desc:
      'Business Development Manager',
  },
  
{
    role: 'Operations Technician',
    company: 'Zimbabwe Shared Services',
    companylogo: github,
    date: 'January 2022 – February 2022',
    desc:
      'Operations Technician',
  },
    
    {
    role: 'Mechatronics Engineer',
    company: 'XYZ',
    companylogo: ZSS, 
    date: 'February 2022 – Present',
    desc:
      'Mechatronics Engineer',
  },

]

export const projects = [
  {
    name: "Teaching A Quadcopter How To Fly",
    desc: "Its goal is to teach a quadcopter how to fly thanks to reinforcement learning.",
    link: {
      name: "Teaching A Quadcopter How To Fly",
      url: "https://github.com/sandile263/Teaching-A-Quadcopter-How-To-Fly-master"
    }
  },
  {
    name: "Face generation with dlnd",
    desc: "In this project, i used generative adversarial networks to generate new images of faces.",
    link: {
      name: "Face generation with dlnd",
      url: "https://github.com/sandile263/Face-generation-with-dlnd"
    }
  },
  {
    name: "Dog Breed Classification",
    desc: "A Web Application I developed using Flask through which a user can check if an uploaded image is that of a dog or human",
    link: {
      name: "Dog Breed Classification",
      url: "https://github.com/sandile263/Dog-Breed-Classification-Project"
    }
  },
    {
    name: "Predicting Bike Sharing Patterns",
    desc: "In this project, I built a neural network from scratch to carry out a prediction problem on a real dataset! I implemented the neural network from scratch by implementing the gradient descent step and backpropagation through the network.",
    link: {
      name: "Predicting Bike Sharing Patterns",
      url: "https://github.com/sandile263/Predicting-Bike-Sharing-Patterns"
    }
  }
]
