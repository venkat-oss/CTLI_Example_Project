
var proObj= {"prof":[
{"title":"Some Neam", "branch": "Distinguished Professor of Electrical Engineering and Computer Science", "email": "email@email.com", "phone":"(000) 909-191922-805", "img":"img/prof1.jpg"},
{"title":"Some Neam", "branch": "Distinguished Professor of Electronics Engineering", "email": "email@email.com", "phone":"(101) 909-191922-805",
"img":"img/prof2.jpg"},
{"title":"Some Neam", "branch": "Distinguished Professor of Computer Science", "email": "email@email.com", "phone":"(101) 909-191922-805",
"img":"img/prof3.jpg"},
{"title":"Some Neam", "branch": "Distinguished Professor of Mechanical Engineering and Material Science", "email": "email@email.com", "phone":"(101) 909-191922-805",
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
	for(i=0;i<proObj.prof.length;i++){
	var tempprof = new Prof(proObj.prof[i].title,proObj.prof[i].branch,proObj.prof[i].email,proObj.prof[i].phone,proObj.prof[i].img);
	createHTML(tempprof,i);
	}
};


function createHTML(Prof,i){

	var k = 'pro'+i;
	var k1 = 'pro'+i+9;
	 
	
	var image= $("<div></div>").addClass(k).append('<img src="' + Prof.img + '" height="100" width="150" />').attr('onclick', 'showme(this)');
    var txt1 = $("<p></p>").text(Prof.title).css("font-weight", "bold");              
    var txt2 = $("<p></p>").text(Prof.branch);              
	var txt3 = $("<p></p>").text(Prof.email).css("color", "white"); 
	var txt4 = $("<p></p>").text(Prof.phone).css("color", "white"); 
	var txt0 = $("<div></div>").addClass(k1).append(image,txt1, txt2, txt3, txt4).css({"height":"300px","width":"300px"}).hide();
    $("#kk").append(txt0);
	$("#k").append(image);
	};


function showme(el){
	var clas=  $(el).attr('class');
	var temp= clas+9;
	console.log(temp);
	for(var i=0;i<4;i++){
	var att= 'pro'+i+9;
	$('.'+att).hide();
	} 
 
  $('.'+temp).css("display","block")

}	

$(function(){
			getJSONData();
		});