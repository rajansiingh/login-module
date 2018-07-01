# login-module

This module consists of two parts - Backend & Frontend

First We will install dependencies of Project :

Install NodeJS and NPM from  https://nodejs.org/en/download/.
Install MongoDB Community Server from  https://www.mongodb.com/download-center.

After Installing Dependencies ,  We will run backend first :
1) Run MongoDB, instructions are available on the install page for each OS at https://docs.mongodb.com/manual/administration/install-community/
   If you have successfully installed mongo, just use command on terminal
   $ >  mongod 
  
2) Open Backend folder inside terminal
   $ > npm install
   $>  npm start
   
   This will start you node server.You should see the message Server listening on port 4000.
   
   
 Now we will run frontend at another terminal : 
 
 1) Open Frontend folder inside terminal
     $ > npm install
     $>  npm start
     
     This will run a webserver at port 8080 and now can enjoy the app.
     
     
     
     Problems that you can face :
 1) While npm install you can get EACCESS error : use - sudo npm install (for linux ) or open command terminal as administrator in Windows
 2) While installing node-sass you can get error : use command - sudo npm install --unsafe-perm node-sass
 3) After you run frontend it may happen that you get error exports is not defined in console of browser 
    Please check that you have .bablerc file in Frontend folder.





