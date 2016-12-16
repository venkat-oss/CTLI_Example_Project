
var proObj= {"prof":[
{"title":"Some Name", "branch": "Professor of Electrical Engineering", "email": "email@rockford.com", "phone":"(000) 909-191922-805", 
"img":"img/prof1.jpg"},
{"title":"Other Name", "branch": "Professor of Electronics Engineering", "email": "email@rockford.com", "phone":"(101) 919-191922-815",
"img":"img/prof2.jpg"},
{"title":"Some Name", "branch": "Professor of Computer Science", "email": "email@rockford.com", "phone":"(102) 929-191922-825",
"img":"img/prof3.jpg"},
{"title":"Other Name", "branch": "Professor of Mechanical Engineering", "email": "email@rockford.com", "phone":"(103) 939-191922-835",
"img":"img/prof4.jpg"}
		]};

						
function Prof(title, branch, email,phone,img)  {
    this.title = title;
    this.branch = branch;
    this.email = email;
	this.phone = phone;
	this.img = img;
};


function getJSONData(){
	addimages();
	for(i=0;i<proObj.prof.length;i++){
	var tempprof = new Prof(proObj.prof[i].title,proObj.prof[i].branch,proObj.prof[i].email,proObj.prof[i].phone,proObj.prof[i].img);
	createHTML(tempprof,i);
	}
	
};


function createHTML(Prof,i){

	var k = 'pro'+i;
	var k1 = 'pro'+i+9;
	 
	
	var image= $("<div></div>").addClass(k).append('<img src="' + Prof.img + '"/>').attr('onclick', 'showme(this)');
    var txt1 = $("<p></p>").text(Prof.title).css("font-weight", "bold");              
    var txt2 = $("<p></p>").text(Prof.branch);              
	var txt3 = $("<p></p>").text(Prof.email); 
	var txt4 = $("<p></p>").text(Prof.phone); 
	var txt0 = $('.'+k1).append(image,txt1, txt2, txt3, txt4).hide();
	
    $("#kk").append(txt0);
	$("#k").append(image);
	};

	
	
function addimages(){
	for(i=0;i<proObj.prof.length;i++){
	var att = 'pro'+i+9;
	var tempprof = new Prof(proObj.prof[i].title,proObj.prof[i].branch,proObj.prof[i].email,proObj.prof[i].phone,proObj.prof[i].img);
	var txt0 = $("<div></div>").addClass(att).append('<div class="bigimg"><img id="bigimg" src="' + tempprof.img + '"/></div>');
	$("#kk").append(txt0);
	}
}

function showme(el){
	var clas=$(el).attr('class');
	var temp= clas+9;
	console.log(temp);
	for(var i=0;i<4;i++){
	var att= 'pro'+i+9;
	$('.'+att).hide();
	} 
 
  $('.'+temp).css("display","inline-block")

}	

$(function(){
			getJSONData();
		});