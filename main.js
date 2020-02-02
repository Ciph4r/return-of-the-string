/*******************
 * YOUR CODE HERE! *
 *******************/
capitalize =(cap) => {
  let captial = cap.toUpperCase();
  return captial;
};


exclaim = (word) => {
let newWord = word + '!';
return newWord;
};

firstCharacter = (first) => {
let fI = first.charAt(0);
return fI;
};

lastCharacter = (last) => {
  let lI = last.charAt(last.length-1);
  return lI;
};

oneCharacter = (word,num) => {
let newChar = word.charAt(num);
return newChar;
}
 
twoCharacters = (word,num,para) => {
let newWord = word.charAt(num) + word.charAt(para);
return newWord;
};

yeller = (word) => {
  let newWord = word.toUpperCase() +'!!!';
  return newWord;
};

initials = (name) => {
  let newName = name.charAt(0) + '.' + name.charAt(name.indexOf(' ')+1) + '.'
  return newName
}



/********************************************************************
 * THIS CODE IS FOR INTERNAL USE ONLY. DON'T CHANGE ANYTHING BELOW! *
 ********************************************************************/

if (typeof capitalize === 'undefined') {
  capitalize = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof firstCharacter === 'undefined') {
  firstCharacter = undefined;
}

if (typeof lastCharacter === 'undefined') {
  lastCharacter = undefined;
}

if (typeof oneCharacter === 'undefined') {
  oneCharacter = undefined;
}

if (typeof twoCharacters === 'undefined') {
  twoCharacters = undefined;
}

if (typeof initials === 'undefined') {
  initials = undefined;
}

if (typeof yeller === 'undefined') {
  yeller = undefined;
}


module.exports = {
  capitalize,
  exclaim,
  firstCharacter,
  lastCharacter,
  oneCharacter,
  twoCharacters,
  initials,
  yeller,
};