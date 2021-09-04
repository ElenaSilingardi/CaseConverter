/* Convert to upper case */
document.getElementById("upper-case").addEventListener("click", function (){
    let text = document.getElementById("inputText").value;
    let upperText = text.toUpperCase();
    document.getElementById("inputText").value = upperText;
})

/* Convert to lower case */
document.getElementById("lower-case").addEventListener("click", function (){
    let text = document.getElementById("inputText").value;
    let lowerText = text.toLowerCase();
    document.getElementById("inputText").value = lowerText;
})

/* Convert to proper case */
document.getElementById("proper-case").addEventListener("click", function (){
    let text = document.getElementById("inputText").value;
    let properText = text.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
    document.getElementById("inputText").value = properText;
})

/* Convert to sentence case */
document.getElementById("sentence-case").addEventListener("click", function (){
    let text = document.getElementById("inputText").value;
    let lowerText = text.toLowerCase();
    let newText = lowerText[0].toUpperCase() + lowerText.substr(1);
    let sentenceText = newText.replace(
        /\u002E\u0020[A-z]/g, /* search for ". [A-z]"*/
        function(txt) {
            return ". " + txt.charAt(2).toUpperCase();
        }
    ).replace(
        /\u0021\u0020[A-z]/g, /* search for "? [A-z]"*/
        function(txt) {
            return "! " + txt.charAt(2).toUpperCase();
        }
        ).replace(
        /\u003F\u0020[A-z]/g, /* search for "! [A-z]"*/
        function(txt) {
            return "? " + txt.charAt(2).toUpperCase();
        }
    );
    document.getElementById("inputText").value = sentenceText;
})

/* Save as .txt file */
function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

document.getElementById("save-text-file").addEventListener("click", function (){
    let filename = "text.txt";
    let text = document.getElementById("inputText").value;
    download(filename, text);
})
