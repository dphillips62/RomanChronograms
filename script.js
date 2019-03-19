//Roman Chronogram with strings
document.getElementById('button1').onclick = function() {
    var userinput = document.getElementById('romancalc').value; //get the phrase from the textbox
    var myText = document.getElementById('theField'); //this sets a variable to be the textarea object
    var stringArray = []; //declare a blank array
  
  finalNum = getChronogram(userinput)
  
    if (finalNum == 0) { //call function - if it is 0 then there are no chorongram values
      myText.value = userinput + " - No chronogram value"
    } else {
      myText.value = userinput + " - " + finalNum;
    }
  };
  
  function getChronogram(theString) { //here is the function. The phrase is passed to it
    var addnum = 0;
    stringArray = theString.split("") //split the string into separate characters
  
    for (i = 0; i < stringArray.length; i++) { //loop through each character

      switch (stringArray[i]) { //if it is any of these characters, get the value
        case "M":
          addnum = addnum + 1000;
          break;
        case "D":
          addnum = addnum + 500;
          break;
        case "C":
          addnum = addnum + 100;
          break;
        case "L":
          addnum = addnum + 50;
          break;
        case "X":
          addnum = addnum + 10;
          break;
        case "V":
          addnum = addnum + 5;
          break;
        case "I":
          addnum = addnum + 1;
          break;
      }
    }
    return addnum //return the total of all the roman numerals
  }
  