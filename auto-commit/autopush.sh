#!/bin/bash
echo "************---开始自动提交数据-----********"

File_Dir=`pwd`

echo "当前的目录的位置为" ${File_Dir}

cd ${File_Dir} && git pull && node add.js && git commit -a -m ':tada:' && git push origin master 

echo "***********-----Push完成-------*************"
