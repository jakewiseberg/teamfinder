
class Person{
  constructor(numberOfHackathons, favLanguage, interests, numbOfMembers, favFood, sleep){
      this.numbOfHackathons = numberOfHackathons;
      this.favLanguage = favLanguage;
      this.interests = interests;
      this.numbOfMembers = numbOfMembers;
      this.favFood = favFood;
      this.sleep = sleep;

  }
}

function compareTo(a, b) {
  points = 0;
  if(!((a instanceof Person) || (b instanceof Person))){
    return -1;
  }
  for(x in a.numbOfHackathons){
    for(y in b.numberOfHackathons){
      if(x == y){
        points+=2;
      }
    }
  }
  for(x in a.favLanguage){
    for(y in b.favLanguage){
      if(x == y){
        points+=4;
      }
    }
  }
  for(x in a.interests){
    for(y in b.interests){
      if(x == y){
        points+=5;
      }
    }
  }
  for(x in a.numbOfMembers){
    for(y in b.numbOfMembers){
      if(x == y){
        points+=2;
      }
    }
  }
  for(x in a.favFood){
    for(y in b.favFood){
      if(x == y){
        points+=3;
      }
    }
  }
  for(x in a.sleep){
    for(y in b.sleep){
      if(x == y){
        points+=1;
      }
    }
  }


}

function getDataFromTypeForm(){
   var returnvalue;
   var question1 = [document.getElementById("q1answer1").value, document.getElementById("q1answer2").value, document.getElementById("q1answer3").value, document.getElementById("q1answer4").value, document.getElementById("q1answer5").value];
   var question2 = [document.getElementById("q2answer1").value, document.getElementById("q2answer2").value, document.getElementById("q2answer3").value, document.getElementById("q2answer4").value, document.getElementById("q2answer5").value, document.getElementById("q2answer6").value, document.getElementById("q2answer7").value, document.getElementById("q2answer8").value];
   var question3 = [document.getElementById("q3answer1").value, document.getElementById("q3answer2").value, document.getElementById("q3answer3").value, document.getElementById("q3answer4").value, document.getElementById("q3answer5").value];
   var question4 = [document.getElementById("q4answer1").value, document.getElementById("q4answer2").value, document.getElementById("q4answer3").value, document.getElementById("q4answer4").value, document.getElementById("q4answer5").value];
   var question5 = [document.getElementById("q5answer1").value, document.getElementById("q5answer2").value, document.getElementById("q5answer3").value, document.getElementById("q5answer4").value, document.getElementById("q5answer5").value];
   var question6 = [document.getElementById("q6answer1").value, document.getElementById("q6answer2").value, document.getElementById("q6answer3").value, document.getElementById("q6answer4").value, document.getElementById("q6answer5").value];

});

  return returnvalue;
}
getDataFromTypeForm();
