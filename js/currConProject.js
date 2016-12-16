

var rupeesArray = ["₹ 5000", "₹ 10000", "₹ 15000", "₹ 8000", "₹ 9000" ];
var usdArray = ["$ 74.67", "$ 149.2", "$ 222.8", "$ 119.47", "$ 127.47"];
var yuanArray = ["￥ 500", "￥ 1000", "￥ 1500", "￥ 800", "￥ 900", ];
var poundArray = ["€ 57.35", "€ 114.7", "€ 172.05", "€ 91.76", "€ 103.22" ];

function mainMsg(e)
{
  switch(e.data)
  {
    case "Rupees":
     self.postMessage(rupeesArray);
     break;
    case "USD":
      self.postMessage(usdArray);
      break;
	  
	  case "Yuan":
      self.postMessage(yuanArray);
      break;
	  
	  case "Pound":
      self.postMessage(poundArray);
      break;
  }  

}

function errorHandler(e)
{
  console.log(e.message,e);
}

self.addEventListener("message",mainMsg,true);
self.addEventListener("error",errorHandler,true);