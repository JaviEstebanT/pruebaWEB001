// JavaScript source code
window.onload = function() {
    var coordPunto = {top:0,left:0};
    var caja = document.getElementById("caja");
    caja.insertAdjacentHTML("beforeend", "<p id=punto></p>");
    var punto = document.getElementById('punto');
    punto.style.top = coordPunto.top+'px';
    punto.style.left = coordPunto.left+'px';
    var t = setInterval(move, 1);
    var pn = 1;
    function move() {
        if(coordPunto.left >= 140) {
            if(coordPunto.top >= 60) {
                clearInterval;
                punto.style.display = 'none';
            }
            else {
                coordPunto.top += 10;
                coordPunto.left = 0;
                punto.style.top = coordPunto.top+'px';
            }
        }
        else {
            if(coordPunto.left >= 10) {
                if(coordPunto.top >= 10) {
                    caja.insertAdjacentHTML("beforeend", "<p id=parteNumero"+pn+"></p>");
                    pn = pn+1;
                }
                else {
                coordPunto.left += 1;
                punto.style.left = coordPunto.left+'px';
                }
            }
            else {
                coordPunto.left += 1;
                punto.style.left = coordPunto.left+'px';
            }
        }            
    }
};