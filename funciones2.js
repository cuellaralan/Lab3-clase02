var sumatoria;
function cargar()
{
    var btnsum = document.getElementById("suma");
    var btnsyg = document.getElementById("syg");
    // boton.onclick = log;
    btnsum.addEventListener("click",sumar);
    btnsyg.addEventListener("click",sumayguarda)
}
window.addEventListener("load",cargar );
function sumar()
{
    var n1 = document.getElementById("num1");
    var n2 = document.getElementById("num2");
    var resultado = document.getElementById("result");
    sumatoria = parseInt(n1.value)+ parseInt(n2.value);
    alert(sumatoria);
    console.log(resultado)
    resultado.value = sumatoria ;
}

function sumayguarda()
{
    var n1 = document.getElementById("num1");
    var n2 = document.getElementById("num2");
    var resultado = document.getElementById("result");
    sumatoria = parseInt(n1.value)+ parseInt(n2.value);
    resultado.value = sumatoria ;
    // var tabla = document.getElementById("tablaprueba");
    // var row = tabla.insertRow(0);
    // var cell1 = row.insertcell;
    // var cell2 = row.insertcell;
    // var cell3 = row.insertcell;
    // cell1.innerHTML = n1.value;
    // cell2.innerHTML = n2.value;
    // cell3.innerHTML = sumatoria;

    var tabla = document.getElementById("tablaprueba").insertRow(-1).innerHTML = '<td>'+n1.value+'</td><td>'+n2.value+'</td><td>'+sumatoria+'</td>';
}