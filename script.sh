#!/bin/bash


node back-end/server.js &
node logos/server.js &
cd front-end/ ; npm start

 




