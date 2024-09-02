let gameSeq=[];
let userSeq=[];

let btns=["yellow", "red" ,"purple", "green"];
let gameStart= false;
let lavel=0;

let h2=document.querySelector("h2");

let highscore=document.querySelector("h4");
let finalScore=3;
highscore.innerText=`HighScore : ${finalScore}`;

// starting game ---> by click anywhere at whole document. 

document.addEventListener("keypress",function(){
    if(gameStart== false){
     console.log("game started ");
     gameStart= true;

     lavelUp();             // when game starts it automatically at lavel 1.
    }
  
});






function ComputerFlash(btn){              // argument is a element from html.
    btn.classList.add("ComputerFlash");     // flash means when clicked it changed their background color for a millisecond.
   setTimeout(function(){
       btn.classList.remove("ComputerFlash");  // now it get normal after 0.7 sec.
   },300);
   }

   function userFlash(btn){             
    btn.classList.add("userFlash");      // to view this is a user flashed button and nothing more.
   setTimeout(function(){
       btn.classList.remove("userFlash"); 
   },300);
   }









  //sequence of flashing button by computer (and now we have to repeat from starting same flashing of button).
function lavelUp(){
    userSeq=[];      // now at each lavel user sequence is emplty.
    lavel++;
    h2.innerText=`lavel ${lavel}`;

    let randomIdx=Math.floor(Math.random()*3);
    let randomColor=btns[randomIdx];
    let randomBtn=document.querySelector(`.${randomColor}`);  // basically we are accessing that div whoose class is same as randomColor.
   
                                                                              //    console.log(" random index= ",randomIdx);    // for us
                                                                              //    console.log(" random color= ",randomColor);  // for us 
                                                                              //    console.log(" selected element= ",randomBtn);   //  for us

       //now adding coluredButtons in sequence by computer
   gameSeq.push(randomColor);
   console.log(gameSeq);        // checking addition or not

       
   ComputerFlash(randomBtn);  // flashing to user can see.
}

   // this above function is for computer generating flash on each lavel after completing that lavel.

 










  function checkSeqMatched(idx){
    // console.log("curr lavel : ",lavel);        // at this time it must that gameSeq and userSeq length is equals to lavel value. (coz on each lavel computer generate a new flash)
  
    

    if(gameSeq[idx] === userSeq[idx]){      // we have to check for each index value in both matching or not coz, user have to flash multiple value at different lavel.
         if(userSeq.length == gameSeq.length){
           setTimeout(lavelUp,1000); //if till last index all values are matching in both then goes to a new lavel. and generate a new flash by computer. (after a sec)
         
           if((finalScore>lavel)){
            
           }
         else{
            finalScore++;
            highscore.innerText=`Congrat's You Created A new HighScore : ${finalScore}`;
           
         }
        
        }

         

        
    }
    else{
        h2.innerHTML=`Game Over! your score was <b> "${lavel}" </b> </br> Press Any Key To ReStart`;
        
          document.querySelector("body").style.backgroundColor="red";
          setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";  // on game over it will show danger.
          },150);

        reset();  //if any value mismatched in the sequence the whole game is going to restart.
    }



}




































// now generating Sequence of user.

 function btnPress(){
    // console.log("button was pressed");
    let btn=this;                         // accessing that button which is clicked.
    userFlash(btn);
//now adding coluredButtons in sequence by user. (and refresh each time).
      let userColor =btn.getAttribute("id");
      userSeq.push(userColor);                // accessing id but using as a value of array sequence so that id class color name is taking same.
    //  console.log(userSeq); ------------------> current time values in userseq array.
   

     checkSeqMatched(userSeq.length-1);   // passing the last index to check
 }


 let allBtns = document.querySelectorAll(".btn");
   for(let btn of allBtns){
    btn.addEventListener("click", btnPress);
   }














   function reset(){
    
      userSeq=[];
      gameSeq=[];
      gameStart= false;
      lavel=0;

      highscore.innerText=`HighScore : ${finalScore}`;
   }