#!/bin/bash
#
# Turns off the server
 
pid=`cat pid`;
kill $pid;
