#!/bin/sh -l
echo $1
echo $2
cp -r /app/* /github/workspace/
cp -r /app/.cljs_node_repl /github/workspace/
cp -r /app/.clj-kondo /github/workshpace/
echo $(ls -al)
node /github/workspace/main.js $1 $2
