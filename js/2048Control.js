function Solver(size,game){
	this.size = size;
	this.game = game;
	this.cells = game.grid.cells;
	this.count = 0;

}
Solver.prototype.start = function(){
	this.strategy2();	

};

Solver.prototype.strategy1 = function(){
	while(!this.game.isGameTerminated()){
		var pre = this.copyState(this.cells);
		this.move(1);
		this.move(2);
		var cur = this.updateState();
		if(this.checkEqual(pre,cur)){
			var pre = this.copyState(this.cells);
			this.move(3);
			var cur = this.updateState();
			if(this.checkEqual(pre,cur)){
				this.move(0);
			}
		}	
	}	
};

Solver.prototype.strategy2 = function(){
	this.count = 0;
	while(!this.game.isGameTerminated()){
		var pre = this.copyState(this.cells);
		this.move(1);
		this.move(2);
		var cur = this.updateState();
		if(this.checkLeft4Stra2()){
			pre = this.copyState(this.cells);
			this.move(3);
			this.move(2);
			this.move(1);
			cur = this.updateState();
		}else if(this.checkEqual(pre,cur)){
			var pre = this.copyState(this.cells);
			this.move(3);
			var cur = this.updateState();
			if(this.checkEqual(pre,cur)){
				this.move(0);
			}
		}	
	}
	console.log(this.count);	
};




Solver.prototype.checkLeft4Stra2 = function(){
	if(this.checkLength(this.size -1 ) != this.size){
		return false;
	}
	for(var y = this.size -2; y>=0; y--){
		if(this.checkLength(y) == this.size){
			continue;
		}
		if(this.checkLength(y) == this.size -1){
			return true;
		}
	}
	return false;
};

Solver.prototype.updateState = function(){
	this.cells = this.game.grid.cells;
	return this.cells;
};
Solver.prototype.move = function(dir){
	this.game.move(dir);
	this.count++;
};
Solver.prototype.checkEqual = function(previous,current){
	for (var i = 0; i < this.size; i++) {
		for(var j = 0; j< this.size;j++){
			if(previous[i][j] != current[i][j]){
				return false;
			}	
		}	
	}
	return true;
};
Solver.prototype.copyState = function(){
	var preCells = [];

  for (var x = 0; x < this.size; x++) {
    var row = preCells[x] = [];

    for (var y = 0; y < this.size; y++) {
      row.push(this.cells[x][y]);
    }
  }

  return preCells;
};

Solver.prototype.checkLength = function(num){
	//this.updateState();
	var number = 0;
	for (var i = this.size - 1; i >= 0; i--) {
		if(this.cells[i][num] != null){
			number++;
		}	
	};
	return number;
};