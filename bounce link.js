javascript:document.write("<h1 style=\"position: absolute; left: 50%; font-size: 250%; transform: translate(-50%,0%); margin: 0 auto;\" id=\"txt\">XD You got BEANED!!!!</h1>
<script>
var css = \"margin:0;position:absolute;transform:translate(-50%,0%);width:20%;height:20%;\";
var s = 0.075;
var vids = [new idiot()];
window.setInterval(idiotmove, 5);
window.setInterval(idiotmake, 3000);
window.setInterval(idiotannoy, 5000);
var msgs = [\"Still using your computer?\", \"You are an Idiot!\", \":)\", \"(:\", \"XD You got BEANED!!!!\", \"Yeetus feetus you computer has been deletused!\", \"Have a cookie! :)\", \"DEL C:\\Windows\\System32\\ -y\", \"rm -rf /\"];
function idiotannoy() {
var x = Math.floor(Math.random() * msgs.length);
if (x == 6) {
document.cookie = msgs[Math.floor(Math.random() * msgs.length)].padEnd(Math.floor(Math.random() * 10), \' \') + \"=\" + \"LOL\";
}
document.getElementById(\"txt\").innerHTML = msgs[x];
}
function idiotmake() {
vids.push(new idiot());
}
function idiot() {
this.x1 = Math.floor(Math.random() * 100);
this.y1 = Math.floor(Math.random() * 100);
this.right1 = true;
this.up1 = true;
this.vid1 = document.createElement(\"video\");
this.vid1.autoplay = true;
this.vid1.loop = true;
this.vid1.innerHTML = \"<source src=\'https://github.com/Techcraft7/YouAreAnIdiot-Fake-Virus/blob/idiot-assets/u r idiot.mp4?raw=true\' type=\'video/mp4\'>\";
this.vid1.style = \"left:\" + this.x1 + \"%;top:\" + this.y1 + \"%;\" + css;
document.body.appendChild(this.vid1);
}
function idiotmove() {
for (var i = 0; i < vids.length; i++) {
if (vids[i].y1 < 80 && vids[i].up1) {
vids[i].y1 += s;
} else {
vids[i].up1 = false;
vids[i].y1 -= (s * 2);
}
if (vids[i].y1 > 0 && !vids[i].up1) {
vids[i].y1 -= s;
} else {
vids[i].up1 = true;
vids[i].y1 += (s * 2);
}
if (vids[i].x1 < 95 && vids[i].right1) {
vids[i].x1 += s;
} else {
vids[i].right1 = false;
vids[i].x1 -= (s * 2);
}
if (vids[i].x1 > 5 && !vids[i].right1) {
vids[i].x1 -= s;
} else {
vids[i].right1 = true;
vids[i].x1 += (s * 2);
}
vids[i].vid1.style = \"left:\" + vids[i].x1 + \"%;top:\" + vids[i].y1 + \"%;\" + css;
}
}
</script>");
