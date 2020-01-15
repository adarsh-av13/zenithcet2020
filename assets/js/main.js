function myMove() {
    var elem = document.getElementById("cenlogo");
    var post = elem.style.top;
    var posl = elem.style.left;
    console.log(post, posl);
    var id = setInterval(frame, 10);

    function frame() {
        console.log("ed");
        if (post == 0) {
            clearInterval(id);
        } else {
            post--;
            posl--;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}