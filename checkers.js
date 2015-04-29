/* Write JavaScript here */var clickedPiece = false;
var pieceClicked, currentSpot, columnNum, rowNum, pieceColor;

// These nested for loops add the black color to the square//
for(var i = 0; i < 8; i+=2){
    for(var j = 0; j < 8; j+=2){
        document.getElementById("spot" + i + j).className += "black";
    }
}
for(var i = 1; i < 8; i+=2){
    for(var j = 1; j < 8; j+=2){
        document.getElementById("spot" + i + j).className += "black";
    }
}

// Start Game Here ///



// This function should select the reds
function redAction(evt){
 //console.log(currentSpot);
 // var currentID = parseInt(currentSpot);
 // console.log(currentID);
 // console.log(currentID);
 // currentID += 5;
 // console.log(currentID);
 // document.getElementById("spot34").appendChild(this);
  pieceClicked = true;
  clickedPiece = this;
  currentSpot = this.parentNode.id;
  rowNum = parseInt(currentSpot.substring(4,5));
  columnNum = parseInt(currentSpot.substring(5,6));
  rowNum += 1;

  var direction = prompt("PLAYER 1: left or right?");
  if(direction === "left" ){
    columnNum -= 1;
    this.remove();
  document.getElementById("spot" + rowNum + columnNum).appendChild(this);
  }
  else if (direction === " "){
  alert("y u put nothing in the box, stupid");
  }
  else if (direction === "right"){
    columnNum += 1;
    this.remove();
  document.getElementById("spot" + rowNum + columnNum).appendChild(this);
  }
  else{
    alert ("An Error has occured, the current application will be terminated");
  }
  
}

function yellowAction(evt){
  clickedPiece = this;
  currentSpot = this.parentNode.id;
  rowNum = parseInt(currentSpot.substring(4,5));
  columnNum = parseInt(currentSpot.substring(5,6));
  rowNum -= 1;

  var directionTwo = prompt("PLAYER 2: left or right?");
  if(directionTwo === "left" ){
    columnNum -= 1;
      this.remove();
  document.getElementById("spot" + rowNum + columnNum).appendChild(this);
  }
   else if (directionTwo === "") {
      alert("y u put nothing in the box, stupid"); 
   }
  else if (directionTwo === "right"){
    columnNum += 1;
      this.remove();
  document.getElementById("spot" + rowNum + columnNum).appendChild(this);
  }
  
  else{
    alert ("An Error has occured, the current application will be terminated");
  }

}




// // This function should move the pieces
// function movePiece(){
//   if(pieceClicked === false){
//     console.log(pieceClicked);
//     pieceClicked = true;
//     clickedPiece = this.childNodes;
//     currentSpot = this.id;
//     columnNum = parseInt(currentSpot.substring(4,5));
//     rowNum = parseInt(currentSpot.substring(5,6));
//     console.log(clickedPiece);
    
    
//   }
//   else{
//     console.log(clickedPiece);
//     clickedPiece.remove();
//     columnNum +=1;
//     rowNum += 1;
//     document.getElementById("spot" + columnNum + rowNum).appendChild(this);
//   }
  
// }


// Add an event listener to all of the different red pieces//
var redPieces = document.querySelectorAll("div.redPiece");
for(var i = 0; i < redPieces.length; i++){
    redPieces[i].addEventListener("click", redAction);
}


// Add an event listener to all the of the different yellow pieces//
var yellowPieces = document.querySelectorAll("div.yellowPiece");
for(var i = 0; i < yellowPieces.length; i++){
    yellowPieces[i].addEventListener("click", yellowAction);
}


