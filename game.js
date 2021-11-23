p1n=localStorage.getItem("n1");
p2n=localStorage.getItem("n2");
p1s=0;
p2s=0;
document.getElementById("player1n").innerHTML=p1n+" :";
document.getElementById("player2n").innerHTML=p2n+" :";
document.getElementById("player1s").innerHTML=p1s;
document.getElementById("player2s").innerHTML=p2s;
document.getElementById("playerq").innerHTML="Question Turn: "+p1n;
document.getElementById("playera").innerHTML="Answer Turn: "+p2n;

function send(){
   get1stno=document.getElementById("no1").value;
   get2ndno=document.getElementById("no2").value;

   ans=parseInt(get1stno)*parseInt(get2ndno)
   
   q1="<h4 id='word_display'>"  +get1stno+"X"+get2ndno+" </h4> ";
   i1="<br> A:<input type='text' id='ibox'>  ";
   b1="<br><br><button class='btn btn-info' onclick='check()'>CHECK</button> ";
   total=q1+i1+b1
   document.getElementById("output").innerHTML=total
}