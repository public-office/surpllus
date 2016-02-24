#!/usr/bin/env sh
PORT=3001

webpack-dev-server --content-base public/ --port 3000 --inline --hot & RENDERER_ACCESS_KEY=sekret PORT=3001 electron-render-service & open "http://0.0.0.0:3001/pdf?url=http://localhost:3000&access_key=sekret&marginsType=1&pageSize=A5"
