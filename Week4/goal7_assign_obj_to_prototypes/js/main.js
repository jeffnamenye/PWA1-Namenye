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

    for (var i = 0; i <numOfPeople; i++) {

        var personIndex = Math.floor(Math.random() * names.length);

        var person = new Person(names [personIndex], i+1);


    }



)};