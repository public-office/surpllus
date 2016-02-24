#!/usr/bin/env sh

PRINT_PORT=3001
WEB_PORT=3000
ACCESS_KEY=sekret
PAGE_SIZE=A5

./node_modules/.bin/webpack-dev-server --content-base public/ --port $WEB_PORT --inline --hot & RENDERER_ACCESS_KEY=$ACCESS_KEY PORT=$PRINT_PORT ./node_modules/.bin/electron-render-service & (sleep 2 && open "http://localhost:$WEB_PORT/") & (sleep 2 && open "http://0.0.0.0:$PRINT_PORT/pdf?url=http://localhost:$WEB_PORT&access_key=$ACCESS_KEY&marginsType=1&pageSize=$PAGE_SIZE")
