document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
var elems = document.querySelectorAll('.collapsible');
var instances = M.Collapsible.init(elems);
});

var i=0;
var str=["THINK ."," DESIGN ."," CODE ."," DEVELOP"];
var subhead = setInterval(function(){
	document.getElementById("subHeading").innerHTML=document.getElementById("subHeading").innerHTML+str[i];
	if(i===3){
		clearInterval(subhead);
	}
	i++;
},1000);
document.getElementById("landingPage-js").onload=subhead;