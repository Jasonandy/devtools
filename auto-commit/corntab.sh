#!/bin/bash
cd /data/devtools/auto-commit && git pull && /usr/bin/node  node add.js && git commit -a -m 'tada' && git push origin master
