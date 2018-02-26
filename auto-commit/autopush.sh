#!/bin/bash
echo "---开始自动提交数据-----"
cd /data/git-auto-commit && git pull && /usr/bin/node add.js && git commit -a -m 'git auto commit' && git push origin master 

echo "-----Push完成-------:·"
