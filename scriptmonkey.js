var i = o;
var txt = 'Hello, my name is Benjamin.';
var speed = 50;

function appearingText() {
    if (i > txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(appearingText, speed);
    }
}