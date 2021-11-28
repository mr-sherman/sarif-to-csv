#!/bin/sh -l
echo $1
echo $2
cp -r /app/* /github/workspace/
node /github/workspace/main.js $1 $2
