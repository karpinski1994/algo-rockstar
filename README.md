## Algo Rockstar ![Latest release](https://badgen.net/badge/Release%20Date/January%202022/blue)

---

## Table of contents[![](./docs/img/pin.svg)](#table-of-contents)
1. [Introduction](#introduction)
1. [Tech stack](#tech-stack)
1. [Motivation](#motivation)
1. [Features](#features)
1. [Setting up](#setting-up)
1. [Starting project](#starting-project)
1. [Project structure](#project-structure)
   - [Folders](#folders-structure)
   - [Files within component](#component-files)
---

## Introduction[![](./docs/img/pin.svg)](#introduction)

Introducing Algorockstar, an innovative app that makes understanding and working with data structures and algorithms a breeze. Our app has three key features to help users of all levels, from beginners to experts, to gain a deeper understanding and mastery of these complex concepts.
  
---

## Tech stack[![](./docs/img/pin.svg)](#tech-stack)
<table class="no-border">
  <tr>
    <td style="background-color: grey"><a href="https://nextjs.org/docs/getting-started"><img height="50px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1200px-Nextjs-logo.svg.png" alt="Next.js"/></a></td>
    <td style="background-color: grey"><a href="https://en.wikipedia.org/wiki/TypeScript"><img height="50px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/1280px-Typescript.svg.png" alt="Type Script"/></a></td>
    <td style="background: grey"><a href="https://styled-components.com/"><img src="https://styled-components.com/nav-logo.png" height="30px" width="180px" atl="Styled components"/></a></td>
  </tr>
</table>
We chose to use Next.js for our project because of its excellent SEO capabilities, Server-Side Rendering (SSR) capabilities, and Static Site Generation (SSG) capabilities. These features allow us to optimize our website for search engines, improve the load time and performance of our website, and generate a static version of our website for faster delivery.

In addition, we chose to use TypeScript for our project. Its strong typing and safety features make our code more reliable and maintainable, and its educational value helps developers understand the underlying concepts of software development.

Lastly, for styling, we chose styled-components as it is the most popular and stable solution. We considered other libraries like JSS, but chose styled-components due to its popularity and the fact that it is easy to find solutions to any problems we may encounter online. It is also compatible with React Native Web, which is an added bonus."

In addition to our web application, we also plan to introduce a mobile app that will be built using React Native. This will allow us to provide a seamless experience for our users across all platforms and devices, while also taking advantage of the performance and capabilities of native mobile apps. Additionally, by using React Native, we will be able to share a significant portion of our codebase between the web and mobile app, reducing development time and costs. Overall, we believe that this will greatly enhance the user experience and allow us to reach a wider audience.

The project also includes plans for a mobile app, which will be developed using React Native. While we considered using React Native for Web, we ultimately decided against it because of the current limitations in sharing code between React Native for Web and React Native, as well as the need for SEO. In 2023, the process of sharing code between the two is not as smooth as we would like, and it was important for us to prioritize SEO in the development of our mobile app.

---

## Motivation[![](./docs/img/pin.svg)](#motivation)

At AlgoRockstar, we believe in the importance of understanding algorithms and data structures in software engineering. That's why we're creating an app that makes learning these concepts fun and easy. Our app features three key components: an interactive summary that guides users through essential resources such as videos and articles, a visualization tool that brings data structures to life, and ready-to-use code examples in multiple programming languages. Join us on this journey to master the building blocks of software development.

---
## Features[![](./docs/img/pin.svg)](#features)
The first feature is a comprehensive description of data structures and algorithms, complete with useful resources such as explanations, articles, and videos. This feature is perfect for users who are new to the subject and need a solid foundation of knowledge to build upon.

The second feature is a dynamic visualization feature that allows users to interact with data structures and algorithms in a visual and intuitive way. This feature is perfect for users who learn best through visualization and interaction, as it provides an interactive and engaging way to understand the underlying concepts.

The third feature is a collection of ready-to-use code examples in various programming languages. This feature is ideal for users who are looking to implement the data structures and algorithms they have learned into their own projects. With this feature, users can easily copy and paste code examples into their own projects, saving them time and effort.

---

## Setting up[![](./docs/img/pin.svg)](#setting-up)

##### NPM packages
Install all necessary dependencies by running
`
yarn
`
in your terminal (in project's root directory).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


---

## Project structure[![](./docs/img/pin.svg)](#project-structure)
We decided to choose the so-called ducked folders and files structure. More about the concept you can find [here](https://medium.com/building-crowdriff/react-redux-file-architecture-ducks-it-up-6b32eaaba341). We want everything that relates to a component to exist within its own folder. This way of organising files is very scalable and intuitive.
#### Folders structure[![](./docs/img/pin.svg)](#folders-structure) [To be updated]
1. **SRC**
   1. **Assets** - images, graphics and other external media
   2. **Components** - react components
      1. **ExampleComponent** - component directiories, holding component and relating tests, stories, styles
         1. **Native** - directory holding react component and relating tests, stories, styles
   3. **Styles** - global styling variables, utils etc.
   4. **Utils** - additional helper functions and variables

#### Component files[![](./docs/img/pin.svg)](#component-files) [To be discussed and updated]
Each component folder at the ExampleComponent level should consist of the following component's files:
1. **ExampleComponent.jsx** - implementation
2. **ExampleComponent.stories.mdx** - stories
3. **ExampleComponent.test.js** - test
4. **ExampleComponentStyles.js [optional]** - styles

Please follow the system design guidelines. If everyone makes every effort to comply with common rules, our code will be in order, that is easy to maintain, repair and develop.


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
