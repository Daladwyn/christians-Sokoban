alert("hello Warehouse managers!");

console.log("now has the game started.")
var player = {
	row : 0,
	col : 0,
	newrow : 0,
	newcol : 0,
}
var whichMap=tileMap;
var position ="r0c0";
var mapBegins = document.getElementById("Map");
var keyRelease;
var goalPositionArray = [];

//print the base on which the map is printed.
for (var y=0;y<whichMap.height;y++){
		
	for(var x=0;x<whichMap.width;x++){
		position="r"+y+"c"+x;
		var cell= document.createElement("span");
		cell.setAttribute("id", position);
		mapBegins.appendChild(cell);
		if(whichMap.mapGrid[y][x]=="G"){
			goalPositionArray.push(position);
		}
		if(x==18){
			lineBreak=document.createElement("br");
			lineBreak.setAttribute("class","linebreak");
			
			var item = document.getElementById(position);
			mapBegins.appendChild(lineBreak);
		}
	}
}

console.log("målpositioner är: "+goalPositionArray);
printMap();
var exitGame = "n";


document.getElementById("bodyId").onkeydown = function(event){
	event.preventDefault();
	event=event || window.event;
	keyReleased= event.key;
	console.log("pressed key is: "+keyReleased);

	switch(keyReleased){
	case "ArrowUp":
		player.newrow=player.row;
		player.newrow=player.newrow-1;
		console.log("gamal rad: "+player.row+ " ny rad :"+player.newrow);;
	
		if(whichMap.mapGrid[player.newrow][player.col] == " "){
			
			whichMap.mapGrid[player.newrow][player.col]= "P";
			whichMap.mapGrid[player.row][player.col]= " ";
			player.row=player.newrow;
			printMap();
		}
		else if(whichMap.mapGrid[player.newrow][player.col]== "W"){
			console.log("Oh, a wall!!!!");
		}
		else if(whichMap.mapGrid[player.newrow][player.col]== "B"){
			var blockPosition = player.newrow -1;
			if(whichMap.mapGrid[blockPosition][player.col]==" "){
				verticalBlockMovement(blockPosition);
			}else if(whichMap.mapGrid[blockPosition][player.col]=="W"){
				console.log("Oh, a wall behind the block!!!!");
				printMap();
			}else if(whichMap.mapGrid[blockPosition][player.col]=="B"){
				console.log("Oh, a block behind the block!!!");
				printMap();
			}else if(whichMap.mapGrid[blockPosition][player.col]=="G"){
				verticalBlockMovement(blockPosition);
			}
			
		}
		else if(whichMap.mapGrid[player.newrow][player.col]=="G"){
			for(var i=0; i<(goalPositionArray.length/2);i=i+2){
				if(player.row==goalPositionArray[i]){
					if(player.col==goalPositionArray[i+1]){
						whichMap.mapGrid[player.newrow][player.col]="P";
						whichMap.mapGrid[player.row][player.com]="G";
					}
				}
			}
			player.row=player.newrow;
			printMap();
		}
	
	break;
	case "ArrowDown":
		player.newrow=player.row;
		player.newrow=player.newrow+1;
		
		if((whichMap.mapGrid[player.newrow][player.col] == " ")||(whichMap.mapGrid[player.newrow][player.col] == "G")){
			
			whichMap.mapGrid[player.newrow][player.col]= "P";
			whichMap.mapGrid[player.row][player.col]= " ";
			player.row=player.newrow;
			printMap();
		}
		else if(whichMap.mapGrid[player.newrow][player.col]== "W"){
			console.log("Oh, a wall!!!!");
		}
		else if(whichMap.mapGrid[player.newrow][player.col]== "B"){
			var blockPosition = player.newrow +1;
			if(whichMap.mapGrid[blockPosition][player.col]==" "){
				verticalBlockMovement(blockPosition);
			}else if(whichMap.mapGrid[blockPosition][player.col]=="W"){
				console.log("Oh, a wall behind the block!!!!");
				printMap();
			}else if(whichMap.mapGrid[blockPosition][player.col]=="B"){
				console.log("Oh, a block behind the block!!!");
				printMap();
			}else if(whichMap.mapGrid[blockPosition][player.col]=="G"){
				verticalBlockMovement(blockPosition);
			}
		}
	break;
	case "ArrowLeft":
		player.newcol=player.col;
		player.newcol=player.newcol-1;
		
		if((whichMap.mapGrid[player.row][player.newcol] == " ")||(whichMap.mapGrid[player.row][player.newcol] == "G")){
			
			whichMap.mapGrid[player.row][player.newcol]= "P";
			whichMap.mapGrid[player.row][player.col]= " ";
			player.row=player.newrow;
			printMap();
		}
		else if(whichMap.mapGrid[player.row][player.newcol]== "W"){
			console.log("Oh, a wall!!!!");
		}
		else if(whichMap.mapGrid[player.row][player.newcol]== "B"){
			var blockPosition = player.newcol -1;
			if(whichMap.mapGrid[player.row][blockPosition]==" "){
				horisontalBlockMovement(blockPosition);
			}else if(whichMap.mapGrid[player.row][blockPosition]=="W"){
				console.log("Oh, a wall behind the block!!!!");
				printMap();
			}else if(whichMap.mapGrid[player.row][blockPosition]=="B"){
				console.log("Oh, a block behind the block!!!");
				printMap();
			}else if(whichMap.mapGrid[player.row][blockPosition]=="G"){
				horisontalBlockMovement(blockPosition)
			}
			
		}
		
		break;
	case "ArrowRight":
		player.newcol=player.col;
		player.newcol=player.newcol+1;
		
		if((whichMap.mapGrid[player.row][player.newcol] == " ")||(whichMap.mapGrid[player.row][player.newcol] == "G")){
			
			whichMap.mapGrid[player.row][player.newcol]= "P";
			whichMap.mapGrid[player.row][player.col]= " ";
			player.row=player.newrow;
			printMap();
		}
		else if(whichMap.mapGrid[player.newrow][player.col]== "W"){
			console.log("Oh, a wall!!!!");
		}
		else if(whichMap.mapGrid[player.row][player.newcol]== "B"){
			var blockPosition = player.newcol +1;
			if(whichMap.mapGrid[player.row][blockPosition]==" "){
				horisontalBlockMovement(blockPosition)
			}else if(whichMap.mapGrid[player.row][blockPosition]=="W"){
				console.log("Oh, a wall behind the block!!!!");
				printMap();
			}else if(whichMap.mapGrid[player.row][blockPosition]=="B"){
				console.log("Oh, a block behind the block!!!");
				printMap();
			}else if(whichMap.mapGrid[player.row][blockPosition]=="G"){
				horisontalBlockMovement(blockPosition)
			}
			
		}
		
		break;
	case "q":
		exitGame="y";
		break;
	default:
		break;
	}
	printMap();
}

//Moving player and block into empty space
function verticalBlockMovement(blockPosition){
	whichMap.mapGrid[blockPosition][player.col]= "B";
	whichMap.mapGrid[player.newrow][player.col]="P";
	whichMap.mapGrid[player.row][player.col]=" ";
	player.row=player.newrow;
	printMap();
}
//Moving player and block into empty space
function horisontalBlockMovement(blockPosition){ 
	whichMap.mapGrid[player.row][blockPosition]= "B";
	whichMap.mapGrid[player.row][player.newcol]="P";
	whichMap.mapGrid[player.row][player.col]=" ";
	player.row=player.newrow;
	printMap();
}





	
//print out the map
function printMap(){
	var position ="r0c0";
	var numberOfBlocksInGoalArea=0;
	console.log("start position "+position);
	var mapBegins = document.getElementById("Map");
	for (var y=0;y<whichMap.height;y++){
		for(var x=0;x<whichMap.width+1;x++){
			position="r"+y+"c"+x;
			//console.log("nuvarande position "+position);
			if(whichMap.mapGrid[y][x] == " "){   //if element is a outside the game or a pass throu
				displayPicture(Tiles.Space);
			}
			else if (whichMap.mapGrid[y][x] == "W"){ //if element is a wall
				displayPicture(Tiles.Wall);
			}
			else if (whichMap.mapGrid[y][x] =="B"){  //if element is a crate
				displayPicture(Entities.Block);
			}
			else if (whichMap.mapGrid[y][x] =="G"){   //if the space is a final positions for a crate
				displayPicture(Tiles.Goal);
			}
			else if (whichMap.mapGrid[y][x] =="P"){   //this is where the player is
				displayPicture(Entities.Character);
				player.row= y;
				player.col= x;
			}
			
			for(var i =0;i<goalPositionArray.length;i++){
				if(goalPositionArray[i]==position){
					console.log("goalposition och position är samma");
					if(whichMap.mapGrid[y][x]==" "){
						console.log("här finns en space i målområdet");
						displayPicture(Tiles.Goal);
					}else if(whichMap.mapGrid[y][x]=="B"){
						displayPicture(Entities.BlockDone);
						numberOfBlocksInGoalArea++;
					}else if(whichMap.mapGrid[y][x]=="P"){
						displayPicture(Entities.Character);
					}
				}
				
			}
		}
	}
	if(numberOfBlocksInGoalArea==goalPositionArray.length){
		alert("YEEEEAH!!! All blocks are in place!!");
	}

	function displayPicture(typeOfClass){
		var output = document.createElement("span");
		output.setAttribute("id", position);
		output.setAttribute("class",typeOfClass);
		//console.log("output blev "+output);
		var itemToBeRemoved = document.getElementById(position);
		mapBegins.replaceChild(output,itemToBeRemoved);
	}
	//alert("Map is printed");
}
