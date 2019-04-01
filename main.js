
	var nameList=["stevejobs","elonmusk","billgates"];
	var index = Math.floor(Math.random() * 3);
	var img="images/"+nameList[index]+".jpg";
    document.getElementById("image").setAttribute("src",img);

function check(){
var a=document.getElementById("input").value;
if (a==nameList[index]){
	
	document.getElementById("result").innerHTML="<center><p>You Gussed it right</p></center>"
	//document.
	setTimeout(reset(),2000);
}
else{
	document.getElementById("result").innerHTML="<center><p>Try Again</p></center>"
}
                    
}
function reset(){
	nameList=["stevejobs","elonmusk","billgates"];
	index = Math.floor(Math.random() * 3);
	img="images/"+nameList[index]+".jpg";
    document.getElementById("image").setAttribute("src",img);

}
