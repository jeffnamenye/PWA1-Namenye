/**
 * Created by the JavaScript Development Team
 * Class: PWA1
 * Goal: Goal7
 * Jeffrey Namenye 5/29/14
 */
(function(){

     window.Person=Person;

     //shows my job choices and action that they will do
    Person.jobs =("Chef","Electronic Tech","Student","Artist");
    Person.actions = ("Cooking","Fixing","Studying","Painting");

    function Person(name,row){
        console.log("Person Created: ",name);

        this.name = name;

        //sets up for a random person
        this.action = Person.actions[Math.floor((Math.floor() * Person.actions.length)];

        //Set up for random job
        this.job = Person.jobs[Math.floor(Math.floor() * Person.jobs.length)];

        this.row =row;

        var id = document.getElementById("r" + this.row +"c3");
        id.innerHTML = this.action;
    }

      //this will randomly choose action for each person
    Person.prototype.update = function(){
        if(Math.floor(Math.random() <.01)){
            var i = Math.floor(Math.random() * Person.action.length);
            this.action = Person.action[i];
            var id = document.getElementById("r" + this.row + "c3");
            id.innerHTML = this.action;
        }
    }

})();