import { projectInfo } from './interfaces'

export const projects:projectInfo[] = [
    {
        title: "PLU Learn",
        date: "March 2022",
        technologies: "Javascript, CSS, HTML, React, Weather API, Netlify",
        quickBio: "A web application for chemistry students at PLU. Letting them hone the skills taught in second semester chemistry.",
        img_link:  "plulearn.png",
        link: "https://stuartgavidia.github.io/pluscience/",
        info: {
            description1: "At the time I was taking Chemistry. I utilized my skills in React to develop a user friendly web application for undergrad students taking Gen Chem. The app displayed the weather at PLU and had a dataset of almost 180 multiple choice questions across 8 units. The web app would tell the user whether they got the answer correct, and displayed links related to the question for extra help."
        }
    },
    {
        title: "Notedle",
        date: "May 2022",
        technologies: "Typescript, CSS, HTML, React, Tone.js, Snowpack, Firebase",
        quickBio: "Inspired by wordle, a music based game where the user has to figure out the beats to the song!",
        img_link:  "notedle.png",
        link: "https://notedle.com",
        info: {
            description1: "What started as a point and shoot musical videogame, the Programming Party club and I decided to replicate the popular game wordle. However, there was a twist, instead of guesing a word, the user has to guess the beat! We used Tone.js to create sounds in our React Application, which we deployed to firebase."
        }
    },
    {
        title: "Solar System",
        date: "July 2022",
        technologies: "Typescript, HTML, CSS, Three.js",
        quickBio: "Replicating our solar system by emulating gravity and the orbits of planets.",
        img_link:  "solarsystem.png",
        link: "https://plu-programming-party.github.io/solar-system/",
        info: {
            description1: "This was a summer project where our aim was to replicate our entire solar system onto the web browser using Three.js. I learned a lot about computer graphics such as rendering and using vectors to position spacial bodies. I was very fortunate to be a part of this group and to enter another sphere of software."
        }
    },
    {
        title: "Jammming",
        date: "April 2022",
        technologies: "Javascript, HTML, CSS, React, Spotify API",
        quickBio: "Want to save a playlist onto your Spotify account? Jammming does just that (Codecademy Project).",
        img_link:  "jammming.png",
        link: "https://stuartgavidia.github.io/jammming/",
        info: {
            description1: "I enjoyed this project because it was my first time interacting with a Web API. I learned about how APIs can be used effectively to improve a web application. I learned about REST and authorization while building this React App."
        }
    },
    {
        title: "Star Wars App",
        date: "December 2022",
        technologies: "Typescript, HTML, CSS, React, Flask, postgreSQL, Docker, OpenAI API",
        quickBio: "Star Wars Full Stack Application allowing users to generate an AI built image",
        img_link: "starwarsapp.png",
        link: "https://github.com/arcosea/StarWarsApp",
        info: {
            description1: "I worked alongside three CS majors to build a Star Wars version of DALL-E. I built out the frontend using React and created HTTP requests to our Flask backend and OpenAI API to generate images."
        }
    },
    {
        title: "Business Management App",
        date: "August 2023",
        technologies: "Typescript, HTML, CSS, React, Flask, Nginx, MySQL, Docker, Cypress, Pytest",
        quickBio: "Business management app saving time for business owners",
        img_link: "businessapp.png",
        link: "",
        info: {
            description1: "If you would like to access a demo or link to codebase reach out through contact form",
            description2: "I pursued a microservices architecture to prepare the app for easy deployment, scaling, and maintainability. The frontend is built using React and Typescript. Every unique feature such as Analytics, Calendar, Communication, Login/Registration, Payroll, and more, has a unique service built with custom technologies such as Flask, Express to support the feature. All connections and requests are managed by our API Gateway which is an Nginx server. We are using MySQL databases to persist data. Our testing frameworks include Cypress, and Pytest, which are set up with automated testing in our CI/CD pipeline set up with Github Actions. Finally, all of our components are dockerized in individual containers."
        }
    }
]
