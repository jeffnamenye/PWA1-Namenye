/***** Jeff Namenye 05/08/14 Duel 1****/
 
//self-executing function
	(function(){

	console.log("Fight!!!");

//player name

	var playerOneName = "Kabal";
	var playerTwoName = "Kratos";

//player damage

	var player1Damage = 20;
	var player2Damage = 20;

//player health

	var playerOneHealth = 100; 
	var playerTwoHealth = 100; 

	var round = 0;

//fight function

	function fight(){
       
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth);
       
        for (var i = 0; i < 10; i++)
        {


//random formula is - Math.floor(Math.random()*(max-min)+min);

			var minDamage1 = player1Damage * .5;
			var minDamage2 = player2Damage * .5;
   
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);

//console.log(f1);
//console.log(f2);
//console.log(i);

//inflict damage

	playerOneHealth -=f1;
	playerTwoHealth -=f2;
	
//console.log(playerOneHealth);
//console.log(playerTwoHealth);

console.log(playerOneName+":"+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth);
	
//check for victor
	var result = winnerCheck();
	console.log(result);
	
	if(result ==="no winner"){ 
	round++;
 	alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth);
	}else{
			alert(result);
			break;
			};

		};
};
	 
	function winnerCheck(){
        var result="no winner";
        if (playerOneHealth<1 && playerTwoHealth<1)
        {
            result = "You Both Die";
        } else if(playerOneHealth<1){
            result =playerTwoName+" WINS!!!"
        } else if (playerTwoHealth<1)
        {
            result = playerOneName+" WINS!!!"
        };
       return result;
    };

    /*******  The program gets started below *******/
    fight();

})();


















