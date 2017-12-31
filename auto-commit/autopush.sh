#!/bin/bash
echo "---开始自动提交数据-----"
cd /data/devtools/auto-commit && git pull && /usr/bin/node add.js && git commit -a -m ':tada:' && git push origin master 
echo "-----Push完成-------:·"
