var x = new Date();
var y = x.getTime();
var total = y + (24*3600000);
function count(){
    var now = new Date();
    var currentTime = now.getTime();
    var diff = total - currentTime;
    var s = Math.floor(diff/1000);
    var m = Math.floor(s/60);
    var h = Math.floor(m/60);

    h = h % 24;
    m = h % 60;
    s = s % 60;

    h = (h<10)?"0"+h:h;
    m = (m<10)?"0"+m:m;
    s = (s<10)?"0"+s:s;

    document.getElementById("hrs").innerHTML = h;
    document.getElementById("min").innerHTML = m;
    document.getElementById("sec").innerHTML = s;

    setTimeout(count,1000);
}
count();