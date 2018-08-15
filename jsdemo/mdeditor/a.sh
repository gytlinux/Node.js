#!/bin/bash


ls /opt/git/NodeJS/jsdemo/mdeditor/*.js |awk -F'/' '{print $7}'|tail -1

aa=`ls /opt/git/NodeJS/jsdemo/mdeditor/*.js | awk -F'/' '{print $7}'|tail -1`
echo $aa
