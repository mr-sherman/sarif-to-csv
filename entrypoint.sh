#!/bin/sh -l
echo $1
echo $2
cp -r /app/* /github/workspace/
echo $(ls -al)
node /github/workspace/main.js $1 $2
