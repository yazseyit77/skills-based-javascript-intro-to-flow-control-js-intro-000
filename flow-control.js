function basicTeenager(age) {
  if(13 <= age && age <= 19 ){
  return "You are a teenager!";
}
}

function teenager(age) {
  if(13 <= age && age <= 19 ){
    return "You are a teenager!";
  }
return "You are not a teenager";
}



function ageChecker(age) {
  if(13 <= age && age <= 19 ){
    return "You are a teenager!";
  } else if(age < 13){
    return "You are a kid";
  } else if(age > 19){
    return "You are a grownup";
  }
}

function ternaryTeenager(age) {
  return 13 <= age && age <= 19 ? "You are a teenager" : "You are not a teenager";
}

function switchAge(age) {
  switch(age){
    case(13 <= age && age <= 19):
    console.log("You are a teenager");
    break;
    default:
     console.log("You have an age");
  }
}
