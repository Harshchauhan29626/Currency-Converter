function convert() {
    var num1 = document.getElementById("num1").value;

    var KWDvalue = num1 / 268.97;
    var BHDvalue = num1 / 220.69;
    var OMRvalue = num1 / 216.12;
    var JODvalue = num1 / 117.29;
    var GIPvalue = num1 / 101.46;
    var GBPvalue = num1 / 100.46;
    var KYDvalue = num1 / 99.25;
    var CHFvalue = num1 / 90.32;
    var EURvalue = num1 / 87.24;
    var USDvalue = num1 / 83.20;

    document.getElementById("p1").innerHTML = "KWD: " + KWDvalue.toFixed(2);
    document.getElementById("p1").innerHTML += "<br>" + "BHD:" + BHDvalue.toFixed(2);
    document.getElementById("p1").innerHTML += "<br>" + "OMR: " + OMRvalue.toFixed(2);
    document.getElementById("p1").innerHTML += "<br>" + "JOD: " + JODvalue.toFixed(2);
    document.getElementById("p1").innerHTML += "<br>" + "GIP: " + GIPvalue.toFixed(2);
    document.getElementById("p1").innerHTML += "<br>" + "GBP: " + GBPvalue.toFixed(2);
    document.getElementById("p1").innerHTML += "<br>" + "KYD: " + KYDvalue.toFixed(2);
    document.getElementById("p1").innerHTML += "<br>" + "CHF: " + CHFvalue.toFixed(2);
    document.getElementById("p1").innerHTML += "<br>" + "EUR: " + EURvalue.toFixed(2);
    document.getElementById("p1").innerHTML += "<br>" + "USD: " + USDvalue.toFixed(2);

}