#!/bin/bash
echo "---开始自动提交数据-----"

File_Dir="/data/devtools/auto-commit"

cd ${File_Dir} && git pull && node add.js && git commit -a -m ':tada:' && git push origin master 
echo "-----Push完成-------:·"
