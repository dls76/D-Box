function scroll() {

    var data = new Date()
    var mes = data.getMonth()
    var jan = document.getElementById("janeiro").offsetTop -70;
    var fev = document.getElementById("fevereiro").offsetTop -70;
    var mar = document.getElementById("marco").offsetTop -70;
    var abr = document.getElementById("abril").offsetTop -70;
    var mai = document.getElementById("maio").offsetTop -70;
    var jun = document.getElementById("junho").offsetTop -70;
    var jul = document.getElementById("julho").offsetTop -70;
    var ago = document.getElementById("agosto").offsetTop -70;
    var set = document.getElementById("setembro").offsetTop -70;
    var out = document.getElementById("outubro").offsetTop -70;
    var nov = document.getElementById("novembro").offsetTop -70;
    var dez = document.getElementById("dezembro").offsetTop -70;


    if (mes === 0) {window.scrollTo(0, jan)} 
    else if (mes === 1) {window.scrollTo(0,fev)} 
    else if (mes === 2) {window.scrollTo(0,mar)} 
    else if (mes === 3) {window.scrollTo(0,abr)} 
    else if (mes === 4) {window.scrollTo(0,mai)} 
    else if (mes === 5) {window.scrollTo(0,jun)} 
    else if (mes === 6) {window.scrollTo(0,jul)} 
    else if (mes === 7) {window.scrollTo(0,ago)} 
    else if (mes === 8) {window.scrollTo(0,set)} 
    else if (mes === 9) {window.scrollTo(0,out)} 
    else if (mes === 10){window.scrollTo(0,nov)} 
    else if (mes === 11){window.scrollTo(0,dez)} 
}