var katzDeliLine = [];

function takeANumber(numbers) {
  line.push(numbers)
  return "you are number, " + numbers + ". You are number " + line.length + " in line."
}






function nowServing(line) {
  if(!line.length) {
    return "There is nobody waiting to  be served!"
  }else {
    return "Currently serving " + line.shift();
  }
}

function currentLine(line){
  if(!line.length) {
    return "The line is currently empty.";
  }
  var nameAndNumbers = [];
  for(var i=0; i < line.length; i++) {
    nameAndNumbers.push(i+1 + ". "+line[i]);
  }
  return "The line is currently: " +nameAndNumbers.join(', ')
}
takeANumber(katzDeliLine, ""); // "Welcome, Ada. You are number 1 in line."
takeANumber(katzDeliLine, "Grace"); // "Welcome, Grace. You are number 2 in line."
takeANumber(katzDeliLine, "Kent"); // "Welcome, Kent. You are number 3 in line."

currentLine(katzDeliLine); // "The line is currently: 1. Ada, 2. Grace, 3. Kent"

nowServing(katzDeliLine); // "Currently serving Ada."

currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent"

takeANumber(katzDeliLine, "Matz"); // "Welcome, Matz. You are number 1 in line."

currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent, 3. Matz"

nowServing(katzDeliLine); // "Currently serving Grace."

currentLine(katzDeliLine); // "The line is currently: 1. Kent, 2. Matz"
