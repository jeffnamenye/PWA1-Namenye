/***** Jeff Namenye 05/17/14 Duel 2****/
 
//self-executing function
	(function(){

	console.log("Fight!!!");

//player name and start of the array

	var fighter1 = ["Kabal",20,100];
	var fighter2 = ["Kratos",20,100];

//player damage

	//var player1Damage = 20;
	//var player2Damage = 20;

//player health

	//var playerOneHealth = 100;
	//var playerTwoHealth = 100;

	var round = 1;

//fight function

	function fight(){

        //make sure that it passed
        console.log("FIGHT!!!");

        // start of the fight game
        alert(fighter1[0]+":"+fighter1[2]+" *START* "+fighter2[0]+":"+fighter2[2]);
       
        for (var i = 0; i < 10; i++)
        {


//random formula is - Math.floor(Math.random()*(max-min)+min);

			var minDamage1 = fighter1[1] * .5;
			var minDamage2 = fighter2[1] * .5;
   
            var f1 = Math.floor(Math.random()*(fighter1[1]-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(fighter2[1]-minDamage2)+minDamage2);



//inflict damage

  fighter1[2] -=f1;
  fighter2[2] -=f2;
	
//console.log(playerOneHealth);
//console.log(playerTwoHealth);
   //combined as an array for out put

   console.log(fighter1[2]+""+fighter2[2]);
	
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


















