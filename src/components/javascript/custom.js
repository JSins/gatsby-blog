let audiotest = document.getElementById("lol");

function test() {
    console.log('jo');
    audiotest.play();
}

document.getElementById("playbutton").addEventListener("click", test);
