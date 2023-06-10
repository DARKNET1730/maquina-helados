const helados={
    ptaUva:15,
    ptaFresa:15,
    cremas:25,
    botYogur:45,
    botFresa:45,
    botNapoli:50,
    leyenda:"Tiene derecho a comprar: ",
    huva:"Uva",
    hFresa:"Fresa",
    crema:"Crema",
    boteyogur:"Yogur",
    botefresa:"fresa",
    botenapo:"Napolitano",
    ley:"Total de cambio",
    frase:"Elija su paleta Luis",
    frase2:"Elija su paleta Blanca",
    frase3:"Elija su paleta Valeska",
    frase4:"Elija su bote de helado Luis",
    frase5:"Elija su bote de helado Blanca",
    frase6:"Elija su bote de helado Valeska",
    frase7:"Elije su crema Luis",
    frase8:"Elije su crema Blanca",
    frase9:"Elije su crema Valeska",
   
    
    
}
let ptaUva=helados.ptaUva;
let ptaFresa=helados.ptaFresa;
let cremas=helados.cremas;
let botYogur=helados.botYogur;
let botFresa=helados.botFresa;
let crema=helados.crema;
let botNapoli=helados.botNapoli;
let leyenda=helados.leyenda;
let huva=helados.huva;
let hFresa=helados.hFresa;
let boteyogur=helados.boteyogur;
let botefresa=helados.botefresa;
let botenapo=helados.botenapo;
let cambio;
let cambio2;
let cambio3;
let ley=helados.ley;
let frase=helados.frase;
let frase4=helados.frase4;
let frase2=helados.frase2;
let frase3=helados.frase3;
let frase5=helados.frase5;
let frase6=helados.frase6;
let frase7=helados.frase7;
let frase8=helados.frase8;
let frase9=helados.frase9;



function showdata(){
    document.getElementById('he').style.display="block";
    document.getElementById('principal').style.display="none";

    pesos=document.getElementById('peso').value;
    document.formulario.peso.value=pesos;

    pesos2=document.getElementById('peso2').value;
    document.formulario.peso2.value=pesos2;

    pesos3=document.getElementById('peso3').value;
    document.formulario.peso3.value=pesos3;
        if( document.getElementById("frase")==document.getElementById("frase")){
            document.getElementById("cambio").innerHTML=document.formulario.peso.value=pesos;
        }
        if( document.getElementById("frase2")==document.getElementById("frase2")){
            document.getElementById("cambio2").innerHTML=document.formulario.peso2.value=pesos2;
        }
        if( document.getElementById("frase3")==document.getElementById("frase3")){
            document.getElementById("cambio3").innerHTML=document.formulario.peso3.value=pesos3;
        }
        if((pesos==15 || pesos>15) && pesos <25){
            document.getElementById("leyenda").innerHTML=leyenda
            document.getElementById("helado").innerHTML=huva
            document.getElementById("helado2").innerHTML=hFresa
            document.getElementById("frase").innerHTML=frase
    
        }else if((pesos==25 || pesos>25) && pesos <45) {
            document.getElementById("leyenda").innerHTML=leyenda
            document.getElementById("helado").innerHTML=crema
            document.getElementById("frase").innerHTML=frase7
            document.getElementById('helado2').style.display="none";
            
        }else if((pesos==45 || pesos>45) && pesos <50) {
            document.getElementById("leyenda").innerHTML=leyenda
            document.getElementById("helado").innerHTML=boteyogur
            document.getElementById("helado2").innerHTML=botefresa
            document.getElementById("frase").innerHTML=frase4
    
        }else if(pesos==50 || pesos>50) {
            document.getElementById("leyenda").innerHTML=leyenda
            document.getElementById("helado").innerHTML=botenapo
            document.getElementById("frase").innerHTML=frase4
            document.getElementById('helado2').style.display="none";
    
        }

        if((pesos2==15 || pesos2>15) && pesos2 <25){
            document.getElementById("leyenda").innerHTML=leyenda
            document.getElementById("helado1").innerHTML=huva
            document.getElementById("helado3").innerHTML=hFresa
            document.getElementById("frase2").innerHTML=frase2
    
        }else if((pesos2==25 || pesos2>25) && pesos2 <45) {
            document.getElementById("leyenda").innerHTML=leyenda
            document.getElementById("helado1").innerHTML=crema
            document.getElementById("frase2").innerHTML=frase8
            document.getElementById('helado3').style.display="none";
            
        }else if((pesos2==45 || pesos2>45) && pesos2 <50) {
            document.getElementById("leyenda").innerHTML=leyenda
            document.getElementById("helado1").innerHTML=boteyogur
            document.getElementById("helado3").innerHTML=botefresa
            document.getElementById("frase2").innerHTML=frase5
    
        }else if(pesos2==50 || pesos2>50) {
            document.getElementById("leyenda").innerHTML=leyenda
            document.getElementById("helado1").innerHTML=botenapo
            document.getElementById("frase2").innerHTML=frase5
            document.getElementById('helado3').style.display="none";
    
        }

        if((pesos3==15 || pesos3>15) && pesos3 <25){
            document.getElementById("leyenda").innerHTML=leyenda
            document.getElementById("helado4").innerHTML=huva
            document.getElementById("helado5").innerHTML=hFresa
            document.getElementById("frase3").innerHTML=frase3
    
        }else if((pesos3==25 || pesos3>25) && pesos3 <45) {
            document.getElementById("leyenda").innerHTML=leyenda
            document.getElementById("helado4").innerHTML=crema
            document.getElementById("frase3").innerHTML=frase9
            document.getElementById('helado5').style.display="none";
            
        }else if((pesos3==45 || pesos3>45) && pesos3 <50) {
            document.getElementById("leyenda").innerHTML=leyenda
            document.getElementById("helado4").innerHTML=boteyogur
            document.getElementById("helado5").innerHTML=botefresa
            document.getElementById("frase3").innerHTML=frase6
    
        }else if(pesos3==50 || pesos3>50) {
            document.getElementById("leyenda").innerHTML=leyenda
            document.getElementById("helado4").innerHTML=botenapo
            document.getElementById("frase3").innerHTML=frase6
            document.getElementById('helado5').style.display="none";
    
        }
}
function buy(){

    document.getElementById('he').style.display="none";
    document.getElementById('final').style.display="block";
    peso=document.getElementById('peso').value;
    peso2=document.getElementById('peso2').value;
    peso3=document.getElementById('peso3').value;

    
    pay=document.getElementById('data').value;
    document.formulario.data.value=pay;
    pay2=document.getElementById('data2').value;
    document.formulario.data2.value=pay2;
    pay3=document.getElementById('data3').value;
    document.formulario.data3.value=pay3;


    if(pay=='Uva'){
        cambio=peso-ptaUva;
        
        document.getElementById("ley").innerHTML=ley
        document.getElementById("cambio").innerHTML=cambio
        
    }else if(pay=='Fresa'){
        cambio=peso-ptaFresa;
        document.getElementById("ley").innerHTML=ley
        document.getElementById("cambio").innerHTML=cambio
    }else if(pay=='Crema'){
        cambio=peso-cremas;
        document.getElementById("ley").innerHTML=ley
        document.getElementById("cambio").innerHTML=cambio
    }else if(pay=='Yogur'){
        cambio=peso-botYogur;
        document.getElementById("ley").innerHTML=ley
        document.getElementById("cambio").innerHTML=cambio
    }else if(pay=='fresa'){
        cambio=peso-botFresa;
        document.getElementById("ley").innerHTML=ley
        document.getElementById("cambio").innerHTML=cambio
    }else if(pay=='Yogur'){
        cambio=peso-botYogur;
        document.getElementById("ley").innerHTML=ley
        document.getElementById("cambio").innerHTML=cambio
    }else if(pay=='Napolitano'){
        cambio=peso-botNapoli;
        document.getElementById("ley").innerHTML=ley
        document.getElementById("cambio").innerHTML=cambio
    }

    if(pay2=='Uva'){
        cambio2=peso2-ptaUva;
        
        document.getElementById("ley").innerHTML=ley
        document.getElementById("cambio2").innerHTML=cambio2
        
    }else if(pay2=='Fresa'){
        cambio2=peso2-ptaFresa;
        document.getElementById("ley").innerHTML=ley
        document.getElementById("cambio2").innerHTML=cambio2
    }else if(pay2=='Crema'){
        cambio2=peso2-cremas;
        document.getElementById("ley").innerHTML=ley
        document.getElementById("cambio2").innerHTML=cambio2
    }else if(pay2=='Yogur'){
        cambio2=peso2-botYogur;
        document.getElementById("ley").innerHTML=ley
        document.getElementById("cambio2").innerHTML=cambio2
    }else if(pay2=='fresa'){
        cambio2=peso2-botFresa;
        document.getElementById("ley").innerHTML=ley
        document.getElementById("cambio2").innerHTML=cambio2
    }else if(pay2=='Yogur'){
        cambio2=peso2-botYogur;
        document.getElementById("ley").innerHTML=ley
        document.getElementById("cambio2").innerHTML=cambio2
    }else if(pay2=='Napolitano'){
        cambio2=peso2-botNapoli;
        document.getElementById("ley").innerHTML=ley
        document.getElementById("cambio2").innerHTML=cambio2
    }

    if(pay3=='Uva'){
        cambio3=peso3-ptaUva;
        
        document.getElementById("ley").innerHTML=ley
        document.getElementById("cambio3").innerHTML=cambio3
        
    }else if(pay3=='Fresa'){
        cambio3=peso3-ptaFresa;
        document.getElementById("ley").innerHTML=ley
        document.getElementById("cambio3").innerHTML=cambio3
    }else if(pay3=='Crema'){
        cambio3=peso3-cremas;
        document.getElementById("ley").innerHTML=ley
        document.getElementById("cambio3").innerHTML=cambio3
    }else if(pay3=='Yogur'){
        cambio3=peso3-botYogur;
        document.getElementById("ley").innerHTML=ley
        document.getElementById("cambio3").innerHTML=cambio3
    }else if(pay3=='fresa'){
        cambio3=peso3-botFresa;
        document.getElementById("ley").innerHTML=ley
        document.getElementById("cambio3").innerHTML=cambio3
    }else if(pay3=='Yogur'){
        cambio3=peso3-botYogur;
        document.getElementById("ley").innerHTML=ley
        document.getElementById("cambio3").innerHTML=cambio3
    }else if(pay3=='Napolitano'){
        cambio3=peso3-botNapoli;
        document.getElementById("ley").innerHTML=ley
        document.getElementById("cambio3").innerHTML=cambio3
    }
}

function cancel(){
    document.getElementById('he').style.display="none";
    document.getElementById('final').style.display="block";

    document.getElementById("cambio").innerHTML=document.formulario.peso.value=pesos;
    document.getElementById("cambio2").innerHTML=document.formulario.peso2.value=pesos2;
    document.getElementById("cambio3").innerHTML=document.formulario.peso3.value=pesos3;

}