echo "--------开始push数据---------"
git pull && /usr/bin/node add.js && git commit -a -m ':tada:' && git push origin master
echo "--------push完成-------------"

