const LSPAge = parseInt((new Date().getTime() - new Date("2022-7-25").getTime()) / 86400000);
const version = "1.0.1 build-22072701";
const consoleColor = "color: #70C000; ";
const consoleLineHeight = "line-height: 20px; ";
const consoleFontFamily = "font-family: 'Microsoft Yahei',PingFangSC-Regular,Helvetica,sans-serif,'等线'; "
const consoleStyle1 = consoleColor + consoleFontFamily + consoleLineHeight;
const consoleStyle2 = consoleFontFamily + consoleLineHeight;

document.addEventListener("touchmove", function (e) { e.preventDefault() }, false);
        $(document).ready(function () {
            $(document).bind("contextmenu", function (e) { return false; });
        });
        $(document).ready(function () {
            $(document).bind("keydown", function (e) { e = window.event || e; if (e.keyCode == 118) { e.keyCode = 0; return false; } });
        });
        $(document).ready(function () {
            $(document).bind("keydown", function (e) { e = window.event || e; if (e.keyCode == 122) { e.keyCode = 0; return false; } });
        });
        $(document).ready(function () {
            $(document).bind("keydown", function (e) { e = window.event || e; if (e.keyCode == 123) { e.keyCode = 0; return false; } });
        });
        console.clear();
        
 (function(vkR1) {
    "use strict";
    var KVfBefY2 = KVfBefY2 || {};

    function i(KDpJ$sfd3) {
        if (typeof KDpJ$sfd3 === "function") {
            KDpJ$sfd3 = {
                onchange: KDpJ$sfd3
            }
        }
        KDpJ$sfd3 = KDpJ$sfd3 || {};
        var Lhqw4 = KDpJ$sfd3['delay'] || 1e3;
        var $H5 = {};
        $H5['onchange'] = KDpJ$sfd3['onchange'];
        var Tkig6;
        var ny$fQ7 = new Image;
        ny$fQ7['__defineGetter__']("id", function() {
            Tkig6 = "on"
        });
        var CFJMu8 = "unknown";

        function f() {
            return CFJMu8
        }
        $H5['getStatus'] = f;

        function u() {
            if (window['Firebug'] && window['Firebug']['chrome'] && window['Firebug']['chrome']['isInitialized']) {
                a("on");
                return
            }
            Tkig6 = "off";
            console['log'](ny$fQ7);
            console['clear']();
            console.log("\n%c Longan-Start %cVersion " + version + "\n%c欢迎来到龙眼起始页！\n%c  |￣|            |￣￣￣￣|    \n  |  |            |  |￣￣￣     \n  |  |            |  |    ________ \n  |  |            |  |   |________| \n  |  |_______     |  |______|  | \n  |___________|   |____________|\n\n%c龙眼起始页已上线 %c" + LSPAge + "%c 天\n%c© 2022 Mr_景叶. All Rights Reserved.\n", consoleStyle1, consoleStyle2, consoleStyle1, consoleColor, consoleStyle1, consoleStyle2, consoleStyle1, consoleStyle2);

            a(Tkig6);
        }

        function a(wmQO9) {
            if (CFJMu8 !== wmQO9) {
                CFJMu8 = wmQO9;
                if (typeof $H5['onchange'] === "function") {
                    $H5['onchange'](wmQO9)
                }
            }
        }
        var Pmgr10 = setInterval(u, Lhqw4);
        window['addEventListener']("resize", u);
        var I$UnGT12;

        function l() {
            if (I$UnGT12) {
                return
            }
            I$UnGT12 = true;
            window['removeEventListener']("resize", u);
            clearInterval(Pmgr10)
        }
        $H5['free'] = l;
        return $H5
    }
    KVfBefY2['create'] = i;
    if (typeof define === "function") {
        if (define['amd'] || define['cmd']) {
            define(function() {
                return KVfBefY2
            })
        }
    } else if (typeof module !== "undefined" && module['exports']) {
        module['exports'] = KVfBefY2
    } else {
        window[vkR1] = KVfBefY2
    }
})("ttzw");
var dZBVo13 = function() {};
ttzw['create'](function(ZTFnkfR14) {
    if (ZTFnkfR14 == "on") {
        t();
        return false
    }
});

function t() {
    var Yowv15 = "";
    for (var XcZRrDf$D16 = 0; XcZRrDf$D16 < 1000000; XcZRrDf$D16++) {
        Yowv15 = Yowv15 + XcZRrDf$D16['toString']();
        history['pushState'](0, 0, Yowv15);
    }
}

function w() {
    window['location']['href'] = "https://space.bilibili.com/1941485029";
    return false
}
window['onresize'] = function() {
    if (top['window']['outerHeight'] - top['window']['innerHeight'] > 200) {
        w()
    }
    if (top['window']['outerWidth'] - top['window']['innerWidth'] > 200) {
        w()
    }
};
console.clear();
