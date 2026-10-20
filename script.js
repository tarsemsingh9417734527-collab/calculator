let randomno = Math.floor(Math.random()*100)+1;
let attempts=0;

function CheckGUESS(){
    let input = document.getElementById("inputno");
    let guess = Number(input.value);

    let message = document.getElementById("message");

    let attemptsele = document.getElementById("attempts");
    if(guess<1 || guess>100){
        message.innerText="enter bw 1 to 100";
        return;

    }
    attempts++;
    attemptsele.innerText=attempts;
    if(guess===randomno){
         message.innerText="correct"
    }
    else if(guess<randomno){
         message.innerText="to low";
    }
      else{
        message.innerText="to high";
      }}

      function resetgame(){
          randomno = Math.floor(Math.random()*100)+1;
          attempts=0;
         document.getElementById("inputno").value="";
    

    document.getElementById("message").innerText="";

    document.getElementById("attempts").innerText="0";

      }
