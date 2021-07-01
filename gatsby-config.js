module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://EderBraz.github.io/`,
    // Your Name
    name: 'Eder Braz',
    // Main Site Title
    title: `Eder Braz | Backend Developer`,
    // Description that goes under your name in main bio
    description: `Backend Developer | Data Scientist`,
    // Optional: Twitter account handle
    author: ``,
    // Optional: Github account URL
    github: `https://github.com/EderBraz`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/ederbraz/`,
    // Content of the About Me section
    about: `Software Engineer currently Working on developing REST API with Java spring Boot. Graduated in System Analysis and Development, with specialization in Data Science, Machine learning and Deep learning.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: "Repair Shop",
        description:"REST API using Java Spring Boot, PostgreSQL, Swagger.",
        link:"https://github.com/EderBraz/Sistema-para-controle-de-manuten-o-de-equipamentos",
      },
      {
        name: 'Cat Dog Classifier using Neural Networks',
        description: `For this project i built a Neural network to classify whether images contain either a dog or a cat using a State-of-the-Art CNN model`,
        link: 'https://github.com/EderBraz/Cat_dog_classifier',
      },
      {
        name: 'Codenation Challenge - Predicting Math Grad for Brazilian Enem',
        description: `In Brazil, there is a high school national grading exam called ENEM (Exame Nacional do Ensino Médio) which takes place yearly and sets grades for 
        admission on most universities and colleges. The goal is to predict exam grades by using regression models.`,
        link: 'https://github.com/EderBraz/Codenation_Enem_2016',
      },
      {
        name: 'The Battle of the Neighborhoods',
        description: `In this project, i am creating a hypothetical scenario. My client, a successful restaurant chain in Brazil 
          is looking to expand in New York. They want to create a Brazilian steakhouse restaurant. 
          However, he does not know in which neighborhood the restaurant would gain the most attention from customers and
           face the least competition from other steakhouses.`,
        link: 'https://github.com/EderBraz/Applied-Data-Science-Capstone',
      },
      {
        name: 'Analysis of the stack overflow survey',
        description: `In this project, I analyzed data from an online survey 2019 of software professionals across the world conducted by Stack Overflow to get insights 
        into current technology usage & future technology trend.`,
        link: 'https://github.com/EderBraz/IBM-Data-Analyst-Capstone',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'UnixTech TI',
        description: 'Backend Developer, April 2021 - Present',
        link: '',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Java, Spring, JPA, Hibernate, Python, Node.js, Express.js',
      },
      {
        name: 'Databases',
        description: 'PostgreSQL, MySQL, MongoDB',
      },
      {
        name: 'Data',
        description:
          'Machine learning, Deep learning, NPL, EDA(Exploratory Data Analysis), Data wrangling, Data Visualization',
      },
      {
        name: 'Other',
        description:
          'Git, Docker, Google Cloud Platform(GCP), API design, Agile / Scrum',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
