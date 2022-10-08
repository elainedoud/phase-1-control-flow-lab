function scuberGreetingForFeet(distance){
  let result;
  if ( distance <= 400) {
    result = 'This one is on me!';
  }
  
  else if (distance > 400) {
       if (distance <= 2000){
        result = 'That will be twenty bucks.';
      }
      else if (distance > 2500) {
        result = 'No can do.';
      }
      else if (distance > 2000) {
        result = 'I will gladly take your thirty bucks.';
      }
      
  } 
    return result;
}


function ternaryCheckCity(nameCity){
  return nameCity === 'NYC'? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(tip){
  switch(tip) {
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
  }
}