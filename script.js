var g_mercurio=3.7;
var g_venus=8.9;
var g_tierra=9.8;
var g_marte=3.7;
var g_jupiter=24.8;
var g_saturno=10.4;
var g_urano=8.8;
var g_neptuno=11.1;
var mensaje;
var peso_final;
var planeta_escogido;
var peso_escogido;

function capturaDatos(){
     planeta_escogido=document.getElementById("planeta").value;
     peso_escogido=document.getElementById("peso").value;
     planeta_escogido=parseInt(planeta_escogido);
     peso_escogido=parseInt(peso_escogido);
     mateMagia();
}

function mateMagia(){
    if(planeta_escogido==1){
        peso_final=peso_escogido*g_mercurio/g_tierra;
        mensaje=("mercurio");
    } else if(planeta_escogido==2){
        peso_final=peso_escogido*g_venus/g_tierra;
        mensaje=("venus");
    } else if(planeta_escogido==3){
        peso_final=peso_escogido*g_tierra/g_tierra;
        mensaje=("la tierra");
    } else if(planeta_escogido==4){
        peso_final=peso_escogido*g_marte/g_tierra;
        mensaje=("marte");
    } else if(planeta_escogido==5){
        peso_final=peso_escogido*g_jupiter/g_tierra;
        mensaje=("jupiter");
    } else if(planeta_escogido==6){
        peso_final=peso_escogido*g_saturno/g_tierra;
        mensaje=("saturno");
    } else if(planeta_escogido==7){
        peso_final=peso_escogido*g_urano/g_tierra;
        mensaje=("urano");
    } else if(planeta_escogido==8){
        peso_final=peso_escogido*g_neptuno/g_tierra;
        mensaje=("neptuno");
    }
    peso_final=parseInt(peso_final);
    document.getElementById("textofinal").innerHTML = "Tu peso en " + mensaje + " es de " + peso_final + " kilos";
}









