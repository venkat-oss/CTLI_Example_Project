function buildCanvas(){
   var canvas = document.getElementById("can1");
   if (canvas.getContext){

      var ctx = canvas.getContext("2d");
      var nature = new Image();
      var course1 = new Image();
      var course2 = new Image();
      var course3 = new Image();
      var course4 = new Image();
      nature.src = "img/prof1.jpg";
      course1.src ="img/prof2.jpg";
      course2.src = "img/prof3.jpg";
      course3.src = "img/prof4.jpg";
      course4.src = "img/prof5.jpg";
      nature.onload = function(){
		  ctx.font = "25px verdana";
			ctx.fillText("CAMPUS COURSES",300,30);
        ctx.moveTo(300,40);
        ctx.lineTo(540,40);
        ctx.stroke();

        ctx.drawImage(nature,0,50,250,150);            
        ctx.font = "20px verdana";
        ctx.fillText("Computer Science Engineering",270,100);
	      ctx.fillText("Course Fee:",270,130);
			  ctx.font = "18px verdana";
			  ctx.fillText("Course Duration: 1 Month",270,160);
            
        ctx.drawImage(course1,0,250,250,150);
        ctx.font = "20px verdana";
        ctx.fillText("Mechanical/Manufacturing Engineering ",270,300);
        ctx.fillText("Course Fee:",270,330);
	
			  ctx.font = "18px verdana";
			  ctx.fillText("Course Duration: 2 Months",270,360);
			 
        ctx.drawImage(course2,0,450,250,150);
        ctx.font = "20px verdana";
        ctx.fillText("Engineering Mathematics 1&2",270,500);
        ctx.fillText("Course Fee:",270,530); 
			  ctx.font = "18px verdana";
			  ctx.fillText("Course Duration: 3 Months",270,560);
            
        ctx.font = "25px verdana";
			  ctx.fillText("ONLINE COURSES",300,650);
			  ctx.moveTo(300,660);
        ctx.lineTo(530,660);
        ctx.stroke();


			  ctx.drawImage(course3,0,700,250,150);
        ctx.font = "20px verdana";
        ctx.fillText("Embedded Systems Engineering",270,750);
			  ctx.fillText("Course Fee:",270,780);
			  ctx.font = "18px verdana";
			  ctx.fillText("Course Duration: 6 Months",270,810);
			
            
        ctx.drawImage(course4,0,900,250,150);}
        ctx.font = "20px verdana";
        ctx.fillText("Electrical Motors and Hardware",270,950);
  			ctx.fillText("Course Fee:",270,980);
  			ctx.font = "18px verdana";
  			ctx.fillText("Course Duration: 3 Months",270,1010);

    }
   }

$(function(){
      buildCanvas();
    });