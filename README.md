# react-photolabs
The PhotoLabs project for the Web Development React course programming. Started code was forked from LightHouse Labs.
<img width="1680" alt="Screen Shot 2023-08-25 at 9 03 54 AM" src="https://github.com/williamkemeny/photolabs-LH/assets/83621324/33e5c526-7535-449f-ab43-adc0fed481e8">

## Front-End Project Structure

```
.
├── public
├── src
│   ├── assets├── closesymbol.svg
│   │   │
│   │   ├── components
│   │   │   ├── FavBadge.jsx
│   │   │   ├── FavIcon.jsx
│   │   │   ├── HomeRoute.jsx
│   │   │   ├── PhotoDetailsModal.jsx
│   │   │   ├── PhotoFavButton.jsx
│   │   │   ├── PhotoList.jsx
│   │   │   ├── PhotoListItem.jsx
│   │   │   ├── TopicList.jsx
│   │   │   ├── TopicListItem.jsx
│   │   │   └── TopNavigationBar.jsx
│   │   ├── helper├── removeArrWithId.js
│   │   ├── hooks ├── useApplicationData.js
│   ├── styles
│   │   ├── FavBadge.scss
│   │   ├── HomeRoute.scss
│   │   ├── PhotoDetailsModal.scss
│   │   ├── PhotoFavButton.scss
│   │   ├── PhotoList.scss
│   │   ├── PhotoListItem.scss
│   │   ├── TopicList.scss
│   │   ├── TopicListItem.scss
│   │   └── TopNavigationBar.scss
│   ├── index.js
│   ├── index.css
│   ├── App.jsx
│   └── App.scss
├── .eslintrc.json
├── package.json
└──README.md

```

* `db` contains all the database interaction code.
  * `json` is a directory that contains a bunch of dummy data in `.json` files.
  * `database.js` is responsible for all queries to the database. It doesn't currently connect to any database, all it does is return data from `.json` files.
* `public` contains all of the HTML, CSS, and client side JavaScript. 
  * `index.html` is the entry point to the application. It's the only html page because this is a single page application.
  * `javascript` contains all of the client side javascript files.
    * `index.js` starts up the application by rendering the listings.
    * `network.js` manages all ajax requests to the server.
    * `views_manager.js` manages which components appear on screen.
    * `components` contains all of the individual html components. They are all created using jQuery.
* `routes` contains the router files which are responsible for any HTTP requests to `/users/something` or `/api/something`. 
* `styles` contains all of the sass files. 
* `server.js` is the entry point to the application. This connects the routes to the database.

## Setup

Install dependencies with `npm install` in each respective `/frontend` and `/backend`.

## [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```

## [Backend] Running Backend Servier

Read `backend/readme` for further setup details.

```sh
cd backend
npm start
```
