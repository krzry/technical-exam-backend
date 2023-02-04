# API Backend Node.js Diagnostic Exam


#### Application pre-requisites:
[XAMPP Control Panel](https://www.apachefriends.org/download.html)
[Visual Studio Code](https://code.visualstudio.com/)
[Node.js](https://nodejs.org/en/download/)

## Installation
1. Install the dependencies and devDependencies
2. Open xampp and start `mysql` server
3. Open this repository with `Visual Studio Code`
5. Then run these scripts below:
```sh
npm i
npm run setup-db
npm start
```

### Features - Routes
1. Add a new user [get] - `/users/create-user`
2. Edit a user [put]- `/users/:id`
3. Delete a user [delete] - `/users/:id`
4. View list of all users in the system [get] - `/users/`
5. View a User [get] - `/users/:id`
5. Delete multiple users [delete] - `/users/delete-multiple-users`, body ex. {
    "userIds": [2, 3]
}


## Technologies used

- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework
- [md5] - a JavaScript function for hashing messages with MD5.
- [knex] - database migration package
- [mysql2] - MYSQL package for nodejs
- [nodemon] - simple monitor script for use during development of a Node.js app.





