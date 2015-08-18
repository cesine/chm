#!/bin/bash
#
# Turns on (restarts) the server

echo " Starting server"

node_modules/pouchdb-server/bin/pouchdb-server &
echo $! > pid
