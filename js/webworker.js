function workerMsg(e)
 {
   $("#fee1").empty().append(e.data[0]); 
   $("#fee2").empty().append(e.data[1]); 
   $("#fee3").empty().append(e.data[2]);
   $("#fee4").empty().append(e.data[3]);
   $("#fee5").empty().append(e.data[4]);
   console.log("putting values");
   updatecanvas(); 
 }

function convertCurrency(){
 
 if(typeof(Worker) != "undefined")
    {
      // document.getElementById("support").innerHTML = "Great! This browser supports Web Workers";
    myworker = new Worker("js/currConProject.js");
	  myworker.postMessage($("#crrId1").val());
	  myworker.addEventListener("message",workerMsg,true);
    }
    else
    {
      // document.getElementById("support").innerHTML = "Oops! This browser does not support Web Workers";
    }
}