#! /bin/bash
00 12 * * * cd /data/devtools/auto-commit && git pull && node add.js && git commit -a -m 'tada' && git push origin master && git log -1 | mail -s "git auto commit successfully!" jasonandy@hotmail.com
