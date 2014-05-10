/***** Jeff Namenye 05/08/14 Duel 1****/
 
//self-executing function
	(function(){

console.log("Fight!!!");

//player name

	var playerName = "Kabal";
	var playerName = "Kratos";

//player damage

	var playerOneDamage = 20;
	var playerTwoDamage = 20;

//player health

	var playerOneHealth = 100; 
	var playerTwoHealth = 100; 

	var round = 0;

//fight function

	function fight () {

	console.log ("in the fight function");

alert(playerOneName + ":" + playerOneHealth + "**Start**" + playerTwoName + ":" + 
playerTwoHealth);

	for (var i = 0; i < 10; i++)
	{

//random formula is - Math.floor(Math.random()*(max-min)+min);

	var minDamage1 = playerOneDamage * .5;
	var minDamage2 = playerTwoDamage * .5;
	
	var f1 = Math.floor(Math.random()*(playerOneDamage-minDamage1)+minDamage1);
	var f1 = Math.floor(Math.random()*(playerTwoDamage-minDamage2)+minDamage2);

//console.log(f1);
//console.log(f2);
//console.log(i);

//inflict damage

	playetOneHealth -=f1;
	playerTwoHealth -=f2;
	
//console.log(playerOneHealth);
//console.log(playerTwoHealth);

console.log(playerOneName+":"+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth);
	var result = winnerCheck();
	console.log(result);
	
	if(result ==="no winner"){ 
	round++;
        alert(playerOneName+":"+playerOneHealth+"  **ROUND "+round+" OVER"+"**  "+playerTwoName+":"+playerTwoHealth);
	}else{
			alert(result);
			break:
			}

};
};
	


















