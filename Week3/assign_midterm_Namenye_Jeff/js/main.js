/*
	* Mid Terms for PWA-1
*/
  //Jeffrey Namenye Midterm 5/23/14

  // my function
function(){
    // set dom button and track #student objects
    var  button = document.querySelector("buttonred");
    var  i = 0;

    //my arrays
    var  students = [
        {

        name: "Jeff Namenye",
        address: {street: "631 Lovechio Dr", city: "Mishawaka", state: "Indiana"},
        gpa: [3.2, 2.9, 3.5],
        date: new Date()
        },
        {
         name: "Anthony Brodie,",
         address: {street: "2176 Mishawaka Ave", city: "Mishawaka", state: "Indiana"},
         gpa: [3.0, 2.5, 3.9],
         date: new Date()

        }];
      //my console log for student info
    var  consoleDate = function(){

        for (var i = 0, j = students.length; i < j; i++){
            console.log("Name: "+ students[i].name);
            console.log("Address: " + students[i].address.street + " " + students[0].address.city + " " + students[0].address.state);
            console.log("GPA:" + students[i].gpa);
            console.log("Date:" + students[i].date.getMonth() + "/" students[i].date.getData() + "/" students[i].date.getFullYear());

        };
    };
    return false;
};

//function to add new student

var addData = function(newname, newstreet,newcity, newstate, newgpa, newdate){

    students.push({
        name: newname,
        address: {street: newstreet, city: newcity, state: newstate},
        gpa: newgpa,
        date: newdate

    });

 };

//find average of gpa's
var  avgGpa = function(myAry){

    var avgGrade = 0;
    for ( var i = 0, max = myAry.length; i < max; i++){
        avgGrade = avgGrade + myAry[i];
    };

     var num = avgGrade/max
    return num.toFixed(2);

   };

//for html to display
var displayDate = function(){

    //html doms
    var innerName = document.getElementById("name");
    var innerAdress = document.getElementById("address");
    var innerGpa = document.getElementById("gpa");
    var innerDate = document.getElementById("date";
    var innerAvgGpa = document.getElementById("gpaavg");

    if( i !== max + 1){
        innerName.innerHTML = "Name: " + students[i].name;
        innerAdress.innerHTML = "Address:" + students[i].address.street + " " + students[i].address.city + " " +  students[i].address.state;
        innerGpa.innerHTML = "GPA:"  + students[i].gpa;

        innerDate.innerHTML = "Date:" + students[i].date.getMonth() +"/" + students[i].getDate() + "/" students[i].date.getFullYear();

        var avg = gpaAvg(students[i].gpa);

        innerAvgGpa.innerHTML = " Average Gpa: " + avg;
        console.log (students[i].gpa.lenght)


    } else{
        button.onclick = "return false";
        document.getElementById("buttonred").innerHTML = "Finished!";
    };
      i++
    return false;
};

var max = students.length;

button.onclick = displayDate;

console.log("Show the original objects");
consoleData();
addData("Jennifer Seidl", "14033 Crumstown RD", "South Bend", "Indiana",[3.3, 3.4, 3.5] new Date());
console.log(" ");
console.log("Here shows the New Object" );
consoleData();
diaplayData();
};

