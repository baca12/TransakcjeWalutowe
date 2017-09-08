function pokarzPrzelicznik() {
var x = document.getElementById('wpiszPrzelicznik');
 
    if (x.style.display === 'inline') {
        x.style.display = 'block';
    } else {
        x.style.display = 'inline';
    }
    
}


function pokaz(){
	
var x = parseFloat(document.getElementById("stawka").value);
document.getElementById("wynik").innerHTML="stawka została zmieniona i wynosi: 1 \u20AC = " + x + "  PLN\"";   
document.getElementById("stawkaAktualna").innerHTML=x;   

        
//---------------------podmiana wartosci w tabeli     

var table = document.getElementById("tg");
var arr=[] ;
var i, z ;
	
   for (i = 2; i < table.rows.length; i++) {
    arr.push(table.rows[i].cells.item(2).innerHTML); 
	   z = arr[i] * x;
 arr[i] = table.rows[i].cells.item(3).innerHTML =z.toFixed(2);
   }
     
 //-------------------------       
}

function wykonaj(){
  if(document.getElementById("tytulT").value=='' || document.getElementById("kwotaE").value==''){
   alert("uzupełnij tytuł oraz kwote transakcji");
	return 0;
   } 
	
var x = parseFloat(document.getElementById("stawka").value);
var kwotaE = parseFloat(document.getElementById("kwotaE").value);
 kwotaP = kwotaE*x;
document.getElementById("kwotaExP").innerHTML = kwotaP.toFixed(2);
 
	
	
    }


function dodajWiersz()
{
	
if(document.getElementById("tytulT").value=='' || document.getElementById("kwotaE").value==''){
   alert("uzupełnij tytuł oraz kwote transakcji");
	return 0;
   }	
	
wykonaj();
	
var table = document.getElementById('tg');
var rowCount = table.rows.length;
var row = table.insertRow(rowCount);

var cell1 = row.insertCell(0);
cell1.innerHTML=table.rows.length-3;;

var cell2 = row.insertCell(1);
cell2.innerHTML = document.getElementById("tytulT").value;

var cell3 = row.insertCell(2);
cell3.innerHTML = document.getElementById("kwotaE").value;

var cell4 = row.insertCell(3);
cell4.innerHTML = kwotaP.toFixed(2);

var cell5 = row.insertCell(4);
var element1 = document.createElement("input");
      
var button = document.createElement("button");
button.textContent="usuń";
cell5.appendChild(button);
 
button.addEventListener('click', function() {
deleteRow(this);   
}, false);
 
   
    
 //-----------------------czysci input   
 document.getElementById("tytulT").value = " ";   
 document.getElementById("kwotaE").value = " ";
 document.getElementById("kwotaExP").innerHTML = " ";  
//------------------------
 
    
}


function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("tg").deleteRow(i);
}

function odswiezanie(){
var table = document.getElementById('tg');
var rowCount = table.rows.length-3;        
document.getElementById("tg22").innerHTML = rowCount;   
    
    setTimeout("odswiezanie()",1000);
}

function minMax(){

     var table = document.getElementById("tg");
    var arrP=[] ;
    var arrE=[] ;
	var arrT=[] ;

    var i;
   for (i = 3; i < table.rows.length; ++i) {
    arrP.push(table.rows[i].cells.item(3).innerHTML);
    arrE.push(table.rows[i].cells.item(2).innerHTML);
	   
   }
    
var maxP = Math.max.apply(Math, arrP);
var maxE = Math.max.apply(Math, arrE);
var sumP = 0; 
var sumE = 0; 
   for(i=0;i<arrP.length;i++){
      sumP += parseFloat(arrP[i]);
     sumE += parseFloat(arrE[i]);
   }
   
    document.getElementById("tg66").innerHTML =maxP;
    document.getElementById("tg44").innerHTML =maxE;
    document.getElementById("tg55").innerHTML =sumP.toFixed(2);
    document.getElementById("tg33").innerHTML =sumE.toFixed(2);
    setTimeout("minMax()",1000);
}
