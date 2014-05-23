/***** Jeff Namenye 05/20/14 Duel 3****/
 
//self-executing function
	(function(){

	console.log("Fight!!!");

//player name and start of the array
	//var fighter1 = ["Kabal",20,100];
	//var fighter2 = ["Kratos",20,100];

 //my dom

     var fighter1_txt = document.getElementById("Kabal").querySelector("p");
     var fighter2_txt = document.getElementById("Kratos").querySelector("p");
     var round_txt = document.querySelector("h4");
     var button = document.getElementById("fight_btn");//button starts game

        console.log()

     //click event
      button.addEventListener("click",fight,false);

     var  fighters = [

         {
            name: "Kabal",
            damage:20,
            health:100
         },
         {
             name: "Kratos",
             damage:20,
             health:100
         }];


//player damage

	//var player1Damage = 20;
	//var player2Damage = 20;

//player health

	//var playerOneHealth = 100;
	//var playerTwoHealth = 100;

	var round = 1;


  //This starts the dom for txt on top

   round_txt.innerHTML = "Start by clicking the Fight Button!";
   fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
   fighter2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;





//fight function

	function fight(){

        //make sure that it passed
       // console.log("FIGHT!!!");

        // start of the fight game
        //alert(fighter1[0]+":"+fighter1[2]+" *START* "+fighter2[0]+":"+fighter2[2]);

        fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
        fighter2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;


            //this is to determine damage done
            var f1 =Math.floor(Math.random() * fighters[0].damage +fighters[0].damage *.5);
            var f2 =Math.floor(Math.random() * fighters[1].damage +fighters[1].damage *.5);


        //this inflicts damage
        fighters[0].health -= f1;
        fighters[1].health -= f2;

        console.log(fighters[0].health, fighters[1].health);

	
//check for victor
//changed to work with array
	var result = winnerCheck();
	console.log(result);

        round_txt.innerHTML = "Round #" + round + "Results":
        round++;


	if(result ==="no winner")
    {
	   fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
       fighter1_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;
 	//alert(fighter1[0]+":"+fighter1[2]+"  *ROUND "+round+" OVER"+"*  "+fighter2[0]+":"+fighter2[2]);

    }else{
			fighter1_txt.innerHTML = result;
            fighter2_txt.innerHTML ="";


        //disable the button
        button.removeEventListener("click", fight, false);

        document.querySelector(".buttonblue").innerHTML = "DONE!";
			};

		};

	  //winner check with array
	function winnerCheck(){
        var result="no winner";
        if (fighters[0].health<1 && fighters[1].health<1)
        {
            result = "You Both Die.....Better luck next time!!!";
        } else if(fighters[0].health < 1){

            result =fighters[1].name+" WINS!!!"

        } else if (fighters[1].health < 1)

        {
            result = fighters[0].name +" WINS!!!"
        };
       return result;
    };

    /*******  The program gets started below *******/


})();


















