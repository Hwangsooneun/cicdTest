#!/bin/bash
#디렉토리권한
sudo chmod -R 777 /home/ubuntu/server

#깃허브에서 받은 파일로 이동
cd /home/ubuntu/server

#install node modules
npm install
npm install pm2 -g
npm run build

#start our node app in the background(pm2)

cd /home/ubuntu/server
npm run start:prod