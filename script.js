var currentPlayer = "X";
function checkWin(btn) {
  btn.value = currentPlayer;
  btn.disabled = true;
  if (currentPlayer == "X") {    
    btn.style.color = "#e05200";    
  }
  else {    
    btn.style.color = "#0073e6"
  }

  var a1 = document.getElementById("a1").value;
  var a2 = document.getElementById("a2").value;
  var a3 = document.getElementById("a3").value;
  var b1 = document.getElementById("b1").value;                                                                                                            
  var b2 = document.getElementById("b2").value;
  var b3 = document.getElementById("b3").value;
  var c1 = document.getElementById("c1").value;
  var c2 = document.getElementById("c2").value;
  var c3 = document.getElementById("c3").value;
  
  if (  (a1 == a2 && a2 == a3 && a1== currentPlayer)
       || (b1 == b2 && b2 == b3 && b1== currentPlayer)
      || (c1 == c2 && c2 == c3 && c1== currentPlayer)
      || (a1 == b1 && b1 == c1 && a1== currentPlayer)
      || (a2 == b2 && b2 == c2 && a2== currentPlayer)
      || (a3 == b3 && b3 == c3 && a3== currentPlayer)
      || (a1 == b2 && b2 == c3 && a1== currentPlayer)
      || (c1 == b2 && b2 == a3 && c1== currentPlayer)
     )
    {
      document.getElementById('turn').innerText = ("Player " + currentPlayer + " Wins!");
      document.getElementById("a1").disabled = true; 
      document.getElementById("a2").disabled = true;
      document.getElementById("a3").disabled = true;
      document.getElementById("b1").disabled = true;
      document.getElementById("b2").disabled = true;
      document.getElementById("b3").disabled = true;
      document.getElementById("c1").disabled = true;
      document.getElementById("c2").disabled = true;
      document.getElementById("c3").disabled = true;
      document.getElementById('turn').style.color = "#38a302";
      return;
    }
  else if( a1 && a2 && a3 && b1 && b2 && b3 && c1 && c2 && c3)
    {
       document.getElementById('turn').innerText = ("Tied");
      document.getElementById('turn').style.color = "#4d4d4d";
       return;
    }
    
  
  
  if (currentPlayer == "X") {
    currentPlayer = "O";
    document.getElementById('turn').style.color = "#0073e6";
    document.getElementById('turn').innerText = "Player O's Turn";
    
  }
  else {    
    currentPlayer = "X";  
    document.getElementById('turn').style.color = "#e05200";
    document.getElementById('turn').innerText = "Player X's Turn";
  }
}

function reloadPage(){
  location.reload();
}

