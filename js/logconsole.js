console.clear();
const LSPAge = parseInt((new Date().getTime() - new Date("2022-7-25").getTime()) / 86400000);
const version = "1.0.1 build-22072701";
const consoleColor = "color: #70C000; ";
const consoleLineHeight = "line-height: 20px; ";
const consoleFontFamily = "font-family: 'Microsoft Yahei',PingFangSC-Regular,Helvetica,sans-serif,'等线'; "
const consoleStyle1 = consoleColor + consoleFontFamily + consoleLineHeight;
const consoleStyle2 = consoleFontFamily + consoleLineHeight;
console.log("\n%c Longan-Start %cVersion " + version + "\n%c欢迎来到龙眼起始页！\n%c  |￣|            |￣￣￣￣|    \n  |  |            |  |￣￣￣     \n  |  |            |  |    ________ \n  |  |            |  |   |________| \n  |  |_______     |  |______|  | \n  |___________|   |____________|\n\n%c龙眼起始页已上线 %c" + LSPAge + "%c 天\n%c© 2022 Mr_景叶. All Rights Reserved.\n", consoleStyle1, consoleStyle2, consoleStyle1, consoleColor, consoleStyle1, consoleStyle2, consoleStyle1, consoleStyle2);
