alert("hello Warehouse managers!");

console.log("now has the game started.")
var player = {
	row : 0,
	col : 0,
	newrow : 0,
	newcol : 0,
}
var position ="r0c0";
var mapBegins = document.getElementById("Map");
var keypressed;
for (var y=0;y<mapsArray[0].height;y++){
	
	
	for(var x=0;x<mapsArray[0].width;x++){
		position="r"+y+"c"+x;
		var cell= document.createElement("span");
		cell.setAttribute("id", position);
		mapBegins.appendChild(cell);
		if(x==18){
			lineBreak=document.createElement("div");
			lineBreak.setAttribute("class","linebreak");
			
			var item = document.getElementById(position);
			mapBegins.appendChild(lineBreak);
		}
	}
}
alert("grundutskrift klar");
printMap();
var exitGame = "n";
//window.addEventListener("keydown", function(e) {
    // arrow keys:
//    if([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
//        e.preventDefault();
//    }
//}, false);


function whichKeyIsPressed(event){
	event=event || window.event;
	event.preventDefault();
	keyRelease= event.key;
	switch(keyRelease){
	case "ArrowUp":
		player.newrow=player.row;
		player.newrow=player.newrow-1;
		console.log("gamal rad: "+player.row+ " ny rad :"+player.newrow);;
	
		console.log("gamal karta: "+mapsArray[0].mapGrid[player.row][player.col]);
		mapsArray[0].mapGrid[player.row][player.col]= " ";
		console.log("gamal karta efter flytt: "+mapsArray[0].mapGrid[player.row][player.col]);
	
		console.log("ny karta: "+mapsArray[0].mapGrid[player.newrow][player.col]);
		mapsArray[0].mapGrid[player.newrow][player.col]= "P";
		console.log("ny karta: "+mapsArray[0].mapGrid[player.newrow][player.col]);
	
		player.row=player.newrow;
		break;
	case "ArrowDown":
		player.newrow=player.row;
		player.newrow=player.newrow++;
		mapsArray[0].mapGrid[player.row][player.col]= " ";
		mapsArray[0].mapGrid[player.newrow][player.col]= "P";
		player.row=player.newrow;
		break;
	case "ArrowLeft":
		player.newcol=player.col;
		player.newcol=player.newcol--;
		mapsArray[0].mapGrid[player.row][player.col]= " ";
		mapsArray[0].mapGrid[player.row][player.newcol]= "P";
		player.col=player.newcol;
		break;
	case "ArrowRight":
		player.newcol=player.col;
		player.newcol=player.newcol++;
		mapsArray[0].mapGrid[player.row][player.col]= " ";
		mapsArray[0].mapGrid[player.row][player.newcol]= "P";
		player.col=player.newcol;
		break;
	case "q":
		exitGame="y";
		break;
	default:
		break;
	}




printMap();

	
//print out the map
function printMap(){
	var position ="r0c0";
	console.log("start position "+position);
	var mapBegins = document.getElementById("Map");
	
//console.log("mapsarray har "+mapsArray.length+" element");
//console.log("mapsarray[0].mapGrid har "+mapsArray[0].mapGrid.length+" element");
//console.log("mapsarray[0].mapGrid[0] har "+mapsArray[0].mapGrid[0].length+" element");
//console.log("mapsarray[0].mapGrid[0][0] har "+mapsArray[0].mapGrid[0][0].length+" element som är: "+mapsArray[0].mapGrid[11][11]);

for (var y=0;y<mapsArray[0].height;y++){
	for(var x=0;x<mapsArray[0].width+1;x++){
		position="r"+y+"c"+x;
		console.log("nuvarande position "+position);
		if(mapsArray[0].mapGrid[y][x] == " "){   //if element is a outside the game or a pass throu
			displayPicture(Tiles.Space);
		}
		else if (mapsArray[0].mapGrid[y][x] == "W"){ //if element is a wall
			displayPicture(Tiles.Wall);
		}
		else if (mapsArray[0].mapGrid[y][x] =="B"){  //if element is a crate
			displayPicture(Entities.Block);
		}
		else if (mapsArray[0].mapGrid[y][x] =="G"){   //if the space is a final positions for a crate
			displayPicture(Tiles.Goal);
		}
		else if (mapsArray[0].mapGrid[y][x] =="P"){   //this is where the player is
			displayPicture(Entities.Character);
			player.row= y;
			player.col= x;
		}
		
	}
}

	function displayPicture(typeOfClass){
		var output = document.createElement("span");
		output.setAttribute("id", position);
		output.setAttribute("class",typeOfClass);
		console.log("output blev "+output);
		var itemToBeRemoved = document.getElementById(position);
		mapBegins.replaceChild(output,itemToBeRemoved);
	}
	alert("Map is printed");
}
//keypressed key eventhandeler
function startGame(){
	console.log("now has the game started.")
	printMap();
	var keypressed = document.body.onkeyup();
	console.log("key pressed is: "+keypressed);
	
}

