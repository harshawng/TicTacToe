
 currentPlayer = prompt("Enter 1 for happy  or 2 for sad");

var grid=new Array(3);
grid[0]=new Array(3);
grid[1]=new Array(3);
grid[2]=new Array(3);
var resultx=0;
var resulto=0;



//give each box a value
for (var i=0; i<=2; i++) {
  for (var j=0; j<=2; j++) {
    grid[i][j]=0;
  }
}


function clickBox(x,y) {
// Checks If Grid Is Already Clicked
  if (grid[x][y]>0) {
    alert("Spot is already clicked");
  } 
 // Clicking Of Boxes
  else {
    if (currentPlayer==1) {
      document.getElementById(""+x+y).innerHTML="<img src=\"happy.png\"width=\"80px\">"
;  
      grid[x][y]=1;
      currentPlayer=2;
         
    } else {     
       document.getElementById(""+x+y).innerHTML="<img src=\"sad.png\"width=\"80px\">"
; 
      grid[x][y]=2;
      currentPlayer=1;
        
       
         
}
        
    }
    whoseWinner();
   
  }
    //check for winner//
 function whoseWinner(){
      for (var i =0; i <=2; i++) {
       
         if (grid[i][0]===1 && grid[i][1]===1 && grid[i][2]===1){
            document.getElementById("output1").value = (+resultx+ +1);
           resultx= document.getElementById("output1").value;
           alert ("winner is happy");
             reset();
             } // all rows for X//
             
        else if (grid[i][0]===2 && grid[i][1]===2 && grid[i][2]===2){ 
            document.getElementById("output2").value = (+resulto+ +1);
           resulto= document.getElementById("output2").value;
            alert ("winner is sad");
            reset();
            
             } //all rows for O//
          
       else if (grid[0][i]===1 && grid[1][i]===1 && grid[2][i]===1){  
           document.getElementById("output1").value = (+resultx+ +1);
           resultx= document.getElementById("output1").value;
           alert ("winner is happy");
           reset();
           
           
             } //all columns for x//
             
        else if (grid[0][i]==2 && grid[1][i]===2 && grid[2][i]===2){ 
            document.getElementById("output2").value = (+resulto+ +1);
           resulto= document.getElementById("output2").value;
            alert ("winner is sad");
            reset();
            
             }  //all columns for O// 
             
       }
     
       if (grid[0][2]==1 && grid[1][1]===1 && grid[2][0]===1) {
           document.getElementById("output1").value = (+resulto+ +1);
           resulto= document.getElementById("output1").value;
            alert ("winner is happy"); // cross for happy
           reset();
           }

        if (grid[0][2]==2 && grid[1][1]===2 && grid[2][0]===2) {
           document.getElementById("output2").value = (+resulto+ +1);
           resulto= document.getElementById("output2").value;
            alert ("winner is sad"); //cross for sad//
            reset();
           }
     
    else if (grid[0][0]===1 && grid[1][1]===1 && grid[2][2]===1){  
           document.getElementById("output1").value = (+resultx+ +1);
           resultx= document.getElementById("output1").value;
           alert ("winner is happy");
           reset();
           
             } //other cross for happy//
             
        else if (grid[0][0]==2 && grid[1][1]===2 && grid[2][2]===2){ 
            document.getElementById("output2").value = (+resulto+ +1);
           resulto= document.getElementById("output2").value;
            alert ("winner is sad");
            reset();
             }  //other cross for sad//
     
 }
   
//clear score//
function clear() {
       document.getElementById("output1").value="0" ;
         document.getElementById("output2").value="0";
    
        
  }



// Reset Game
function reset() {
for (var i=0; i<=2; i++) {
  for (var j=0; j<=2; j++) {
    grid[i][j]=0;
    document.getElementById(""+i+j).innerHTML="&nbsp;";
  }
}
    
  
     if (resulto==3){
       resulto=0;
       alert ("Congratulations! sad has won the best of 3");
         clear();
   }
      if (resultx==3){
       resultx=0;
             alert ("Congratulations! happy has won the best of 3");
           clear();
          
   }
   
}
    
    
        //responsive menu//
 function myFunction() {
        var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
                 x.className += " responsive";
    } else {
                x.className = "topnav";
                }
            }
   
