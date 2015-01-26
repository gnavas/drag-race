(function () {
window.addEventListener("load",function(){

	var Box = function(){
		this.blueBox = document.getElementsByClassName("go");
		this.blueBox[0].style.left = "0px";
	};

	
	var Racer = function() {
		console.log("Made it to Racer");
		this.engine = "off";
	};
	var Lights = function() {
		console.log("Made it to lights");
		this.lights = "off";
		this.firstLights = document.getElementsByClassName("lights");
		this.secondLights=document.getElementsByClassName("circleA");
		this.thirdLights= document.getElementsByClassName("circleB");
		this.fourthLights= document.getElementsByClassName("circleC");
		this.green= document.getElementsByClassName("greenOn");
		console.log(this.green);
		console.log(this.green.length);
	};
	var Game = function() {
		this.box = new Box();
		this.racer = new Racer();
		this.lights = new Lights();
		this.addListener();
		//this.timer();//
	};
	Lights.prototype.timeout = function(){
		console.log("Made it to timeout");
		this.firstLights[0].setAttribute("class","lightsOn");
		var me = this;
		var intervalId=window.setInterval(function() {
			me.secondLights[position+1].className += " yellowOn";
			console.log(me.green.length);
			position++;
			if((counter>23)&&(me.green.length<1)){
				clear();
				red();
			}
			if (position >1){
				clear();
				green();
			}
			console.log(position);
	},
	500);
		function clear(){
			console.log("made it to clear");
			window.clearInterval(intervalId);
		}
		function green(){
		console.log("made it to green");
		var yo = me;
		var timeoutNo = window.setTimeout(function(){
			yo.thirdLights[0].className += " greenOn";
	},
	500);
	} 
	function red(){
		console.log("Made it to red");
		me.fourthLights[0].className += " redOn";
		alert("False Start - Game Over!!");
		location.reload();
	}
	};
	
	Racer.prototype.activate = function(){
		console.log("I made it to racer function");
		this.engine ="on";
	};
	Racer.prototype.deactivate = function(){
		this.engine="off";
	};
	Box.prototype.move = function(x){
		console.log("here");
		this.blueBox[0].style.left = parseInt(this.blueBox[0].style.left, 10) + x + "px";
		if(counter>=195){
				alert("You've crossed the finish line - Winner!!");
				location.reload();
			}
		
};
	/*Game.prototype.timer = function(){
		console.log(this.lights.green);
		var start = new Date();
		var finish = start - new Date();
		console.log(finish);
	};*/
	Game.prototype.addListener = function(){
		var me = this;
		window.addEventListener("keydown", function(event){
			if(event.keyCode===13){
				console.log("engine listener works"); //91 equals command//
				me.racer.activate();
			} 
			if(event.keyCode ===39){
				if ((me.racer.engine==="on") && (counter<203)) {
				console.log("listener works"); //39 equals right arrow//
				me.box.move((5));
				counter = counter + 1;
				console.log(counter);
				if(counter===10){
					me.lights.timeout();
				}
			}
			else if(counter>=203){
				alert("You've gone off the track! Hit Enter to reactiate your engine!");
				me.racer.deactivate();
			}
			else{
				alert("You're engine is off! Hit enter to to turn your engine on!");
				}
			}
			if(event.keyCode ===37){
				if ((me.racer.engine==="on") && (counter> -5)) {
				console.log("listener works"); //39 equals right arrow//
				me.box.move((-5));
				counter = counter - 1;
				console.log(counter);
			} else if(counter<= -5){
				alert("You've gone off the track! Hit Enter to reactiate your engine!");
				me.racer.deactivate();
				
			} 
			else{
				alert("You're engine is off! Hit enter to to turn your engine on!");
				}
			}
			
		});
	}; 
	var g = new Game();
	function check(){
		document.getElementById("reset").reset();
}
	var counter=0;
	var position = -1;
});
})();
/*
	var blueBox = document.getElementsByClassName("go");
	blueBox[0].style.left = "0px";
	
	window.addEventListener("keyup", function(event){
		if(event.keyCode ===39){
			console.log("here");
	blueBox[0].style.left = parseInt(this.blueBox[0].style.left, 10) + 1 + "px";
		}
	})*/

/*(function() {
  var ChristmasTree = function() {
    // this class manages the xmas tree
    // get a reference to the pre stage lights html element
    this.$preStageLights = document.getElementById('pre-stage');
    // reset the christmas tree every time it's initialized
    this.reset();
  },
  RaceTrack         = function() {
    // this class manages the race track
  },
  Dragster          = function() {
    // grab the car element
    this.$el = document.getElementById('dragster');
    // set the starting position of the dragster
    this.$el.style.left = "0px";
  },
  Game              = function() {
    // this class manages game state
    // initialize a christmas tree
    this.tree = new ChristmasTree();
    // initialize the race track
    this.track = new RaceTrack();
    // initialize the player dragster
    this.dragster = new Dragster();

    this.attachListeners();
  };

  ChristmasTree.prototype.reset = function() {
    // append the css on class to the pre stage lights
    // so that they show up as yellow
    this.$preStageLights.className += " on";
  };

  Game.prototype.attachListeners = function() {
    var self = this;
    // listen for user input, specifically
    // for the user pressing the right arrow key
    window.addEventListener('keyup', function(event) {
      if (event.keyCode === 39) {
        self.dragster.advance();
      }
    });
  };

  Dragster.prototype.advance = function() {
    // this should move the car across the screen 1px at a time
    this.$el.style.left = parseInt(this.$el.style.left, 10) + 1 + "px";
  };

  var g = new Game();
})();*/