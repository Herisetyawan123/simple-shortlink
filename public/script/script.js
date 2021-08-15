var input = document.getElementById('link');
var copy = document.getElementsByClassName('copy')[0];
    

copy.addEventListener('click', (e) => {
    // console.log(1);
    e.preventDefault();
    copy.value = "Copied";
    input.select();
    input.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    document.execCommand("copy");

    copy.value = "Copied";
    copy.classList.add('copied');
});
