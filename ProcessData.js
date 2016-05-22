
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
    console.error("Parameter not instance of person.");
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
  return points;

}

function getDataFromTypeForm(){
  var opts = [], opt;
  sel = document.getElementById("q1");
  var question1 = [sel.options.length];
  for(i = 0; i<sel.options.length; i++){
     sel = document.getElementById("q1");
     opt = sel.options[i];
     if(opt.selected){
       opts.push(opt);
     }
   }
   for(i = 0; i<opts.length; i++){
     question1[i] = opts[i].value;
   }
   console.log(question1);

   var question2 = [];
   var q2child = $("#q2").children();
   $.each(q2child, function(index, value){
     if(value.checked){
       question2.push(value.value);
     }
   });
   console.log(question2);

   var question3 = [];
   var q3child = $("#q3").children();
   $.each(q3child, function(index, value){
     if(value.checked){
       question3.push(value.value);
     }
   });
   console.log(question3);

   var opts = [], opt;
   sel = document.getElementById("q4");
   var question4 = [sel.options.length];
   for(i = 0; i<sel.options.length; i++){
      sel = document.getElementById("q4");
      opt = sel.options[i];
      if(opt.selected){
        opts.push(opt);
      }
    }
    for(i = 0; i<opts.length; i++){
      question4[i] = opts[i].value;
    }
   console.log(question4);
   var question5 = [];
   var q5child = $("#q5").children();
   $.each(q5child, function(index, value){
     if(value.checked){
       question5.push(value.value);
     }
   });
   console.log(question5);
   var opts = [], opt;
   sel = document.getElementById("q6");
   var question6 = [sel.options.length];
   for(i = 0; i<sel.options.length; i++){
      sel = document.getElementById("q6");
      opt = sel.options[i];
      if(opt.selected){
        opts.push(opt);
      }
    }
    for(i = 0; i<opts.length; i++){
      question6[i] = opts[i].value;
    }
   console.log(question6);
   var returnvalue = [question1, question2, question3, question4, question5, question6];

   return returnvalue;
};

function savePerson(a){
  if(!(a instanceof Person)){
    console.error("savePerson called, a is not a Person.");
  }

}
