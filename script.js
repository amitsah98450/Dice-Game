

function play(){
    var player1 = Math.floor((Math.random() * 6) + 1);
    var player2 = Math.floor((Math.random() * 6) + 1);

    if(player1 === 1){
        
        document.querySelector(".replace1").innerHTML = document.querySelector(".one").innerHTML

    }
    else if(player1 === 2){
        document.querySelector(".replace1").innerHTML = document.querySelector(".two").innerHTML
    }
    else if(player1 === 3){
        document.querySelector(".replace1").innerHTML = document.querySelector(".three").innerHTML
    }
    else if(player1 === 4){
        document.querySelector(".replace1").innerHTML = document.querySelector(".four").innerHTML
    }
    else if(player1 === 5){
        document.querySelector(".replace1").innerHTML = document.querySelector(".five").innerHTML
    }
    else{
        document.querySelector(".replace1").innerHTML = document.querySelector(".six").innerHTML
    }


    if(player2 === 1){
        document.querySelector(".replace2").innerHTML = document.querySelector(".one").innerHTML
    }
    else if(player2 === 2){
        document.querySelector(".replace2").innerHTML = document.querySelector(".two").innerHTML
    }
    else if(player2 === 3){
        document.querySelector(".replace2").innerHTML = document.querySelector(".three").innerHTML
    }
    else if(player2 === 4){
        document.querySelector(".replace2").innerHTML = document.querySelector(".four").innerHTML
    }
    else if(player2 === 5){
        document.querySelector(".replace2").innerHTML = document.querySelector(".five").innerHTML
    }
    else{
        document.querySelector(".replace2").innerHTML = document.querySelector(".six").innerHTML
    }

    if(player1 > player2){
        document.querySelector(".heading").textContent = "Player 1 won"
    }
    else if(player1 < player2){
        document.querySelector(".heading").textContent = "Player 2 won"
    }
    else{
        document.querySelector(".heading").textContent = "Its Draw"
    }


    
}