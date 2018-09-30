#!/bin/bash
echo "Starting installation..."
npm install
cd client
npm install
npm i redux
npm install --save react-redux
cd ..
npm i nodemon -g
npm i yarn -g
npm i concurrently -g
echo "Installation successful"