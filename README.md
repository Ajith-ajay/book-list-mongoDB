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
git clone https://github.com/Ajith-ajay/book-list-mongoDB.git

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
![Screenshot (36)](https://github.com/user-attachments/assets/85a5c390-d031-41cf-a913-5754c0a213e0)
The root page
**Book List**

![Screenshot (37)](https://github.com/user-attachments/assets/3358599f-09e5-480d-a7dc-0bd23215a340)
After adding som books with list of books in table

**Edit Books**
![Screenshot (38)](https://github.com/user-attachments/assets/74f4612d-624c-435f-87e0-1ac570715654)
Editing the book name

## Usage
*This is a student level project to understanding the basic of node.js framework as a backend to make a complete library management web application using the html ,css, javascript with mongoDB as database* 
