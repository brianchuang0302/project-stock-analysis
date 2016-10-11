function mytimmer() {
    'use strict';
    var mydate, y, z, w, d, h, m, s, all;
    mydate = new Date();
    y = mydate.getFullYear();
    z = mydate.getMonth();
    w = mydate.getDay();
    d = mydate.getDate();
    h = mydate.getHours();
    m = mydate.getMinutes();
    s = mydate.getSeconds();
    all = h + ":" + m + ":" + s;
    document.getElementById("logo").innerHTML = all;
    setTimeout(mytimmer(), 1000);
}

mytimmer();