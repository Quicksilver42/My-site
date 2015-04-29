var character = {
    id: "player",
    elem: document.getElementById("player"),
    playerX: function (dist) {
        this.elem.style.left = parseInt(this.elem.style.left) + dist + "px";
    },
    playerY: function (dist) {
        this.elem.style.top = parseInt(this.elem.style.top) + dist + "px";
    },
    ball: "red"
};

character.playerX(250);
character.playerY(390);

//variables for the positioning of the player
var player = document.getElementById('player');
var everything = document.getElementById('everything');
var floor = document.getElementById('floor');
var up = false;
var down = false;
var left = false;
var right = false;


function update(){
    if (right === true) {
        player.style.left = parseInt(player.style.left) + 1 + 'px';
    }
    if (left === true) {
        player.style.left = parseInt(player.style.left) - 1 + 'px';
    }
    if (up === true) {
        player.style.top = parseInt(player.style.top) - 1 + 'px';
    }
    if (down === true) {
        player.style.top = parseInt(player.style.top) + 1 + 'px';
    }
window.requestAnimationFrame(update);
}
update();

document.addEventListener("keydown",function(){keyPressed()});
document.addEventListener("keyup",function(){keyReleased()});



//function to move the ball
function keyPressed(e) {
//keycodes that represent different keys.
    e = e || window.event;
    //go right
    if (e.keyCode == 39) {
        right=true;
    }
    //go left
    if (e.keyCode == 37) {
        left=true;
    }
    //go up
    if (e.keyCode == 38) {
        up=true;
    }
    //go down
    if(e.keyCode == 40) {
        down=true;
    }
}

function keyReleased(e) {
//keycodes that represent different keys.
    e = e||window.event;
    //go right
    if (e.keyCode == 39) {
        right=false;
    }
    //go left
    if (e.keyCode == 37) {
        left=false;
    }
    //go up
    if (e.keyCode == 38) {
        up=false;
    }
    //go down
    if(e.keyCode == 40) {
        down=false;
    }
}