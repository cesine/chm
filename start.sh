#!/bin/bash
#
# Turns on (restarts) the server

echo " Starting server";
ls databases || mkdir databases;
cd databases;
../lib/index.js &
echo $! > ../pid;
sleep 2;
echo "Opening local chm at http://127.0.0.1:5984/_utils"
open http://127.0.0.1:5984/_utils;
