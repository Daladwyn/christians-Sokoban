alert("hello Warehouse managers!");

console.log("now has the game started.")
var player = {
	row : 0,
	col : 0,
	newrow : 0,
	newcol : 0,
}
var whichMap=tileMap;
//var whichMap=mapsArray[0];

var position ="r0c0";
var mapBegins = document.getElementById("Map");
var keyRelease;
var goalPositionArray = [];
var numberOfBlocksInGoalArea=0;
var numberOfSteps=0;
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
printMap();
document.getElementById("bodyId").onkeydown = function(event){
	event.preventDefault();
	event=event || window.event;
	keyReleased= event.key;
	//console.log("pressed key is: "+keyReleased);
	switch(keyReleased){
	case "ArrowUp":
		numberOfSteps++;
		player.newrow=player.row;
		player.newrow=player.newrow-1;
		//console.log("gamal rad: "+player.row+ " ny rad :"+player.newrow);;
		if((whichMap.mapGrid[player.newrow][player.col] == " ")||(whichMap.mapGrid[player.newrow][player.col] == "G")){
			whichMap.mapGrid[player.newrow][player.col]= "P";
			whichMap.mapGrid[player.row][player.col]= " ";
			player.row=player.newrow;
			printMap();
		}
		else if(whichMap.mapGrid[player.newrow][player.col]== "W"){
			console.log("Oh, a wall!!!!");
		}
		else if(whichMap.mapGrid[player.newrow][player.col]== "B"){//If player starts to push a block
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
				verticalBlockMovementInGoalArea(blockPosition);
			}
		}else if(whichMap.mapGrid[player.newrow][player.col]=="D"){ //if player starts to push a block done
			var blockPosition = player.newrow -1;
			if(whichMap.mapGrid[blockPosition][player.col]=="G"){
				verticalBlockMovementInGoalArea(blockPosition);
			}else if(whichMap.mapGrid[blockPosition][player.col]=="W"){
				console.log("Oh, a wall behind the block!!!!");
				printMap();
			}else if(whichMap.mapGrid[blockPosition][player.col]==" "){
				horisontalBlockMovementInGoalArea(blockPosition);
			}else if(whichMap.mapGrid[blockPosition][player.col]=="D"){
				console.log("Oh, a block behind the block!!!");
				printMap();
			}
		}
	break;
	case "ArrowDown":
		numberOfSteps++;
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
		else if(whichMap.mapGrid[player.newrow][player.col]== "B"){//If player starts to push a block
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
				verticalBlockMovementInGoalArea(blockPosition);
			}
		}else if(whichMap.mapGrid[player.newrow][player.col]=="D"){//if player starts to push a block done
			var blockPosition = player.newrow +1;
			if(whichMap.mapGrid[blockPosition][player.col]=="G"){
				verticalBlockMovementInGoalArea(blockPosition);
			}else if(whichMap.mapGrid[blockPosition][player.col]=="W"){
				console.log("Oh, a wall behind the block!!!!");
				printMap();
			}else if(whichMap.mapGrid[blockPosition][player.col]==" "){
				horisontalBlockMovementInGoalArea(blockPosition);
			}else if(whichMap.mapGrid[blockPosition][player.col]=="D"){
				console.log("Oh, a block behind the block!!!");
				printMap();
			}
		}
	break;
	case "ArrowLeft":
		numberOfSteps++;
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
		else if(whichMap.mapGrid[player.row][player.newcol]== "B"){//If player starts to push a block
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
				horisontalBlockMovementInGoalArea(blockPosition);
			}
		}else if(whichMap.mapGrid[player.row][player.newcol]=="D"){//if player starts to push a block done
			var blockPosition = player.newcol -1;
			if(whichMap.mapGrid[player.row][blockPosition]=="G"){
				horisontalBlockMovementInGoalArea(blockPosition);
			}else if(whichMap.mapGrid[player.row][blockPosition]=="W"){
				console.log("Oh, a wall behind the block!!!!");
				printMap();
			}else if(whichMap.mapGrid[player.row][blockPosition]==" "){
				horisontalBlockMovementInGoalArea(blockPosition);
			}else if(whichMap.mapGrid[player.row][blockPosition]=="D"){
				console.log("Oh, a block behind the block!!!");
				printMap();
			}
		}
	break;
	case "ArrowRight":
		numberOfSteps++;
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
		else if(whichMap.mapGrid[player.row][player.newcol]== "B"){//If player starts to push a block
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
				horisontalBlockMovementInGoalArea(blockPosition)
			}
		}else if(whichMap.mapGrid[player.row][player.newcol]=="D"){//if player starts to push a block done
			var blockPosition = player.newcol +1;
			if(whichMap.mapGrid[player.row][blockPosition]=="G"){
				horisontalBlockMovementInGoalArea(blockPosition)
			}else if(whichMap.mapGrid[player.row][blockPosition]=="W"){
				console.log("Oh, a wall behind the block!!!!");
				printMap();
			}else if(whichMap.mapGrid[player.row][blockPosition]==" "){
				horisontalBlockMovementInGoalArea(blockPosition);
			}else if(whichMap.mapGrid[player.row][blockPosition]=="D"){
				console.log("Oh, a block behind the block!!!");
				printMap();
			}
		}
	break;
	default:
	break;
	}
	//Check if all blocks are in the goal area
	numberOfBlocksInGoalArea=0;	
	for (var y=0;y<whichMap.height;y++){
		for(var x=0;x<whichMap.width+1;x++){		
			if(whichMap.mapGrid[y][x]=="D"){
				numberOfBlocksInGoalArea=numberOfBlocksInGoalArea+1;
				//console.log("Number of blocks in goalArea: "+numberOfBlocksInGoalArea);
			}
		}				
	}
	if(numberOfBlocksInGoalArea==goalPositionArray.length){
				alert("YEEEEAH!!! All blocks are in place!!");
				alert("You took: "+numberOfSteps+" steps. ");	
	}
}
//Moving player and block into goal area
function verticalBlockMovementInGoalArea(blockPosition){
	whichMap.mapGrid[blockPosition][player.col]= "D";
	whichMap.mapGrid[player.newrow][player.col]="P";
	whichMap.mapGrid[player.row][player.col]="G";
	player.row=player.newrow;
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
//Moving player and block into goal area
function horisontalBlockMovementInGoalArea(blockPosition){ 
	whichMap.mapGrid[player.row][blockPosition]= "D";
	whichMap.mapGrid[player.row][player.newcol]="P";
	whichMap.mapGrid[player.row][player.col]=" ";
	player.col=player.newcol;
	printMap();
}
//Moving player and block into empty space
function horisontalBlockMovement(blockPosition){ 
	whichMap.mapGrid[player.row][blockPosition]= "B";
	whichMap.mapGrid[player.row][player.newcol]="P";
	whichMap.mapGrid[player.row][player.col]=" ";
	player.col=player.newcol;
	printMap();
}
//print out the map
function printMap(){
	var position ="r0c0";
	numberOfBlocksInGoalArea=0;
	var mapBegins = document.getElementById("Map");
	for (var y=0;y<whichMap.height;y++){
		for(var x=0;x<whichMap.width+1;x++){
			position="r"+y+"c"+x;
			//if element is outside the game or empty space
			if(whichMap.mapGrid[y][x] == " "){ displayPicture(Tiles.Space)}
			//if element is a wall
			else if (whichMap.mapGrid[y][x] == "W"){displayPicture(Tiles.Wall)}	
			//if element is a crate
			else if (whichMap.mapGrid[y][x] =="B"){displayPicture(Entities.Block)}
			//if the space is a final positions for a crate
			else if (whichMap.mapGrid[y][x] =="G"){displayPicture(Tiles.Goal);}
			//this is where the player is
			else if (whichMap.mapGrid[y][x] =="P"){displayPicture(Entities.Character);
				player.row= y;
				player.col= x;
			}
			//this is when crates are in the goal area
			else if (whichMap.mapGrid[y][x]=="D"){displayPicture(Entities.BlockDone)};
			//update the goal area 
			for(var i =0;i<goalPositionArray.length;i++){
				if(goalPositionArray[i]==position){
					if(whichMap.mapGrid[y][x]==" "){
						whichMap.mapGrid[y][x]="G";
						displayPicture(Tiles.Goal);}
					else if(whichMap.mapGrid[y][x]=="B"){
						whichMap.mapGrid[y][x]="D";
						displayPicture(Entities.BlockDone);}
					else if(whichMap.mapGrid[y][x]=="P"){displayPicture(Entities.Character);}
				}
			}
		}
	}
//function that puts the supplied class id to a span-element and the replaces the current span.
function displayPicture(typeOfClass){
	var output = document.createElement("span");
	output.setAttribute("id", position);
	output.setAttribute("class",typeOfClass);
	var itemToBeRemoved = document.getElementById(position);
	mapBegins.replaceChild(output,itemToBeRemoved);
}
}
