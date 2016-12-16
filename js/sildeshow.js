var local = 0;
var filename = 1;

	$(function(){
	changebg();
	});
		
	var changebg = function(){			
		if(filename==8){filename=1;}
		if(local==1){$('#slider').css('background-image', 'url(' +filename+'.jpg'+ ')').fadeIn(2500, function(){local=0;changebg();});}
		else{$('#slider').css('background-image', 'url(' +filename+'.jpg'+ ')').fadeOut(1500, function(){filename+=1;local=1;changebg();});}
	}