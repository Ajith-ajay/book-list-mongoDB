# fullstack-login-sign-up

## Table of Contents
- [Overview](#overview)
- [Required Modules](#required-modules)
- [Installation Instructions](#installation-instruction)
  - [Installing Environment](#installing_environment)
  - [Installing Libraries](#installing_libraries)
- [Execution](#execution)
- [Snaps](#snaps)
- [Usage](#usage)
  

## Overview

This the fullstack web application for book list management like library management using mongodb as the database.
Here i use MondoDB as database for saving the boo title and book author name information in a collection name books in my local mongoDB database named library , this collection has the whole information about the book details. If the collection has the doccument then it will display on the table in the web application , if there is no document in the collection then the table of books will empty. 

## Required Modules

    1.mongoose
    2.express
    3.body-parser
    4.express-handlebars

## Installation Instruction

**installing environment**

- *install [node js](https://nodejs.org/en)*
- *install [visual studio code](https://code.visualstudio.com/download)*

**installing libraries**

```bash
npm install express
```
```bash
npm install body-parser
```
```bash
npm install express-handlebars
```
```bash
npm install mongoose
```
**nodemon**: This ia a library used to auto restart your application automatically when you make any changes in the code like live server in vs code extention. But this is a node.js library for auto restart.

```bash
npm install nodemon --save-dev
```

## Execution

```bash
# Clone the repository
git clone [https://github.com/username/repository.git](https://github.com/Ajith-ajay/book-list-mongoDB.git)

# Navigate into the directory
cd repository

# Install dependencies
npm install
```
```bash

# initiate package.json
npm init -y
```
This will create a default package.json file on your project directory. On the json file in the script section add a attribute **start : node app.js**(replace by your main file live server.js)
if youn using nodemon module then replace **start : nodemon app.js** 
```bash
# Start the project
npm start
```

## Snaps
**Index**
![index.html](https://github.com/user-attachments/assets/9d0b1243-e8c8-490c-abe6-df19d04a7d5b)
**Login**
![login.html](https://github.com/user-attachments/assets/b3a194d6-70ef-429e-8b32-a139e32962ff)
**Sign-up**
![sign-up.html](https://github.com/user-attachments/assets/6b5303f2-e150-485e-8bae-7d49920c86e5)
**Profile**
![profile.html](https://github.com/user-attachments/assets/fb211bb0-74fb-45d2-83f8-f05d2194e221)


## Usage

*This is a student level project to understanding the basic of node.js framework as a backend to make a complete login and sign up page using the html ,css, javascript* 
