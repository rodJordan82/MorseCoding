import englishToMorse from "./morseCode.js";
//above import is to get the object used as the key for translation
//future improvements could be added there without changing anything other than the regex below.

//main working function 
export const decoder = (stringToDecode) => {

if(stringToDecode === '' || stringToDecode[0] === " "){
  return "ERROR! :Please see instructions for correct use";
};

  console.log(stringToDecode);
//checks if argument passed to function is a string, anything else will throw error
if (typeof(stringToDecode) === 'string'){

console.log(stringToDecode);
//checks if Latin letters, Arabic numbers as the first character, thus translating from English to Morse
  if(stringToDecode.match(/(^[a-zA-Z0-9])/)){
    //split the string into array to allow easier working.
    const workingArr = stringToDecode.toLowerCase().split("");

    //parses the array into Morse using the key/value pairs in englishToMorse object
    const secondWorkingArr = workingArr.map(char => englishToMorse[char]);

    //removes characters that could not be converted, this is explained in the How To Use section.
    const returningString = secondWorkingArr.map( char => char !== undefined ? char : "#" ).join("/");

    //returns string to dom.js to be displayed
    return returningString;

    //below is the check for Morse to English
  }else if (stringToDecode.match(/(^[\.\-\/])/)){

    //as per the HowTo Use, / must be used to seperate characters, characters are split here for parsing
    const workingArr = stringToDecode.split("/");

    //this is one heck of a sting of code!
    //The stages are that the characters in workingArr are mapped through, and for each of these characters
    //the englishToMorse object is transversed to find the key that matches the value of the Morse of the current char.
    //This could be simplified with a reverse of the englishToMorse object, but that would be the easy way out.
  const secondWorkingArr = workingArr.map(char => Object.keys(englishToMorse).find(key => englishToMorse[key] === char));

  //the characters are joined together and the characters not allowed are replaced with # for the output
  const returningString = secondWorkingArr.map( char => char !== undefined ? char : "#" ).join("");

//the string is sent back to dom.js to be handled in the HTML.
 return returningString;

  }
  else{
    return "ERROR! :Please see instructions for correct use";
  };
  }else {

   
    //simple return for simple issue, shouldn't occur outside of testing, as input is via HTML call
    return "ERROR! :Please see instructions for correct use";

  
  };
};

export default decoder;   

