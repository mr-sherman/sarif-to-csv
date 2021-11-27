#!/bin/sh -l
echo $1
echo $2
cp -r /app/* /github/workspace/
node /github/workshpace/main.js $1 $2
