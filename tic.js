var cnt =0;

function click(val)
{
 if(val==="1"|| '5' ||'9')
 {
    cnt +=1;
 }
 else
 {
 	cnt =0;
 }
 
}
var display = document.getElementById("display");
 if (cnt===3)
 {
 	display.innerText = "O is winner";
 }
 else
 {
 	display.innerText = "Tap Please";
 }