//#switcher etant une checkbox
var switcher = document.getElementById ("switcher");

switcher.onclick = function() {
    document.body.classList.toggle("darkmode");
    // //changement de couleur ring curseur (js)
    // if (document.body.classList.contains('darkmode')) {
    //      group.strokeColor._canvasStyle = "rgba(17, 17, 17, 0.5)"}
    // //retour a l(état initaile
    // if (document.body.classList.notContains('darkmode')) {
    //     group.strokeColor._canvasStyle = "rgba(255, 255, 255, 0.5)"}
}