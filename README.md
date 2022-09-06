## Introduction

A Simple Contact List and Memo App built using the MVC Architecture and Passport.js authorization. This application was developed for #100Devs project week, August 29, 2022.

<tr>
  <td width="100%"  style="align:center;" valign="top">
          <img src="https://github.com/ubemacapuno/images-for-github-readme/blob/main/contact-list-and-memos-app.gif?raw=true" width="100%"  alt="Contact and Memo App Demo .gif"/>
  </td>
</tr>

---


## Objectives

- It's a beginner level app created to understand how MVC concept and logins are added

---

## Who is this for? 

- It's for beginners & intermediates with little more experience, to help understand the various aspects of building a node app with some complex features

---

## Packages/Dependencies used 

bcrypt, connect-mongo, dotenv, ejs, express, express-flash, express-session, mongodb, mongoose, morgan, nodemon, passport, passport-local, validator

---

## Install all the dependencies or node packages used for development via Terminal


Using NPM:

```bash
# Install dependencies
$ npm install

# Start development server
$ npm run dev
```

Using Yarn:

```bash
# Install dependencies
$ yarn

# Start development server
$ yarn dev 

---

## Things to add

- Create a `.env` file and add the following as `key: value` 
  - PORT: 2121 (can be any port example: 3000) 
  - DB_STRING: `your database URI` 
 ---
 

 ## Optimizations:

This application is in a minimal viable product state and is not commercial-ready. 
In the future:
- Include pagination 
- Include a search function, filtering, sorting
- Make memos specific to each contact, as opposed to having a pool with all memos together