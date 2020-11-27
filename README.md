# Dynamic Portfolio | A Next.js Project

## Introduction

This readme.md file gives a description of the Dynamic Porfolio project built using **Next.js**. You'll find within this file : steps taken to create the project, a description of how the platforms and services used in this project communicate with each other and finally how to deploy the project on **Vercel**.

**The Dynamic Portfolio Idea** : The idea for this project was to create a portfolio website (static website) whose data is dynamically updated without the need for manual updates to the site's content. The content for the website can be sourced from the user's preferred social media platform profile and as well as from blog platforms. The end goal is to have a central place (a portfolio website) to share links, showcase the user's work and other forms of content. 

With the traditional way of creating a portfolio website one would have to manually update content that is served on their portfolio website, what this project offers is an automated way to manage content updates to a deployed portfolio website. There are several possibilities for content integration with the portfolio website, but for this project we'll limit it to one.

The main content of the portfolio website will be sourced from **LinkedIn**. LinkedIn as a platform offers it's users a great way to document and present their achievements. We'll be making use of this structured content by sourcing it and making use of it in the portfolio website.   

## Platforms and services

This section of the readme.md file will list the platforms and services used in the creation of this project as well as their interaction with each other. Below is a list of the platforms and services: 

- **Next.js:** Next.js is an open-source React front-end development web framework. The main of feature of Next.js will be making use of is **Server Side Generation (SSG) with data**, which allows us to retrieve data and render it at build time. What does this mean? For most portfolio websites the data needed to render content on the website is available before the user requests the website. So in this case we'll fetch data only at build time (At each redeployment of the web app). The other such method for data retrieval before rendering available through Next.js is the use of **Server Side Rendering (SSR)**, this method on the other hand makes calls for data on a per user request basis. The data we'll be serving on the website does not change so frequently that we need to provide the user requesting the data, content at the moment of opening the website.

- **MongoDB:** MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program. We'll be making use of MongoDB Atlas a global cloud database service. The data to be served as content for the portfolio website will be stored in the MongoDB database and updated autonomously through the use of scheduled REST API requests.

- **Rapid API:** Rapid API is a platform that offers several useful public APIs. For this project we'll be making use of the **linkedin-public-profiles** api. This API allows us to retrieve a JSON object containing a user's LinkedIn profile information, provided that we include the **profile id** in the request to this API. 

    **Note:** This API is currently in **beta**. Certain LinkedIn fields are yet to be added to the API. The fields used in this project were the ones available at the time of editing this readme.md file.

- **Vercel:** Vercel is a cloud platform for static sites and Serverless Functions. We'll be making use of vercel for the ease of deployment of Next.js applications. The use of vercel will also allow us to view analytics for the deployed portfolio website and as well as manage redeployment when changes are made to the **production branch** on github. Deployment of the portfolio website is made possible by importing the project's github repository to vercel and setting the **master branch** of the repository as a **production branch** to handle automatic redeployment when changes are detected.

- **EasyCron:** EasyCron is an online cron service that allows us to create **cron jobs** (time-based job scheduler). Vercel provides an EasyCron integration, which we'll making use of this project. Our Cron jobs will make API requests to trigger data updates to the database and also to trigger redeployment of the portfolio website (This is done to reflect changes to data on the deployed portfolio website). 

## Build flow

Below is a list of actions, essential to this project. Within this readme.md file we'll get into the details of each action to really understand the interactions of the platforms and services listed above. Details of the listed actions will follow the order in which the actions appear. 

1. Retrieve RapidAPI's linkedin-public-profiles **api key** 

2. Setup a MongoDB database and retrieve the **database URL string**

3. Setup a **REST API endpoint** for creating a new user as well as updating an existing user's information

4. Extend the bounds of the linkedin-public-profiles api by adding a second REST API endpoint (This endpoint will be used to **add and update fields** to a user's document in the MongoDB database for fields absent in the linkedin-public-profiles api)

5. Configure **Server-Side Generation (SSG)** to allow content updates to the portfolio website at build-time

6. Deploy the portfolio web site to **Vercel**

7. Setup **EasyCron cron jobs** for scheduled API calls to the **linkedin-public-profiles api** and **Vercel's redeployment api**
