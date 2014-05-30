/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 * Jeffrey Namenye 5/29/14
 */

(function(){


    //my variables
    var numOfPeople = 3;
    var people = [];
    var names = ["Jeff","Jenna","Anthony","Gussie","Nick" ];
    var interval;

    //my loop for the objects

    for (var i = 0; i < numOfPeople; i++) {

        var personIndex = Math.floor(Math.random() * names.length);

        var person = new Person(names [personIndex], i+1);

        populateHTML(person.name,"r" + (i+1) + "c1");
        populateHTML(person.job, "r" + (i+1) + "c2");

        people.push(person);
        names.splice(personIndex,1);



     }

    //this is to make sure only one interval is running at a time

    clearInterval(interval);

    interval = setInterval(runUpdate, 1000 / 30);

    function populateHTML(data,feild){
        var id = document.getElementById(feild);
        id.innerHTML = data;

    }

    function runUpdate(){
        people.forEach(function(element){
            console.log(element);

            element.update();
        });

    }
})();