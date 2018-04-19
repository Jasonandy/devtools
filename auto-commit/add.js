//日期进行格式化 感谢github大神
Date.prototype.format = function(format) {
    var o = {
        "M+": this.getMonth() + 1, //month 
        "d+": this.getDate(), //day 
        "h+": this.getHours(), //hour 
        "m+": this.getMinutes(), //minute 
        "s+": this.getSeconds(), //second 
        "q+": Math.floor((this.getMonth() + 3) / 3), //quarter 
        "S": this.getMilliseconds() //millisecond 
    }
    if (/(y+)/.test(format)) format = format.replace(RegExp.$1,
        (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(format))
            format = format.replace(RegExp.$1,
                RegExp.$1.length == 1 ? o[k] :
                ("00" + o[k]).substr(("" + o[k]).length));
    return format;
}

var logo = "  | |  | |                                |  \\/  |                            \r\n" + 
          "  | |  | |  ___  __ _  _ __    ___  _ __  | \\  / |  ___   _ __    __ _   ___  \r\n" + 
          "  | |  | | / __|/ _` || '_ \\  / _ \\| '__| | |\\/| | / _ \\ | '_ \\  / _` | / _ \\ \r\n" + 
          "  | |__| || (__| (_| || | | ||  __/| |    | |  | || (_) || | | || (_| || (_) |\r\n" + 
          "   \\____/  \\___|\\__,_||_| |_| \\___||_|    |_|  |_| \\___/ |_| |_| \\__, | \\___/ \r\n" + 
          "                                                                  __/ |       \r\n" + 
          "                                                                 |___/        ";


let fs = require('fs');
let time = (new Date()).format("yyyy年MM月dd日 hh:mm:ss");
fs.appendFileSync('records.txt', `${time}\n`);
fs.appendFileSync('records.txt', 'Made By Jason !  Copyright 1994-2018 JasonInternational All rights reserved.');
