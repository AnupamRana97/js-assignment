function reverseWords(sentence) {
    return sentence.replace(/\S+/g, match => match.split('').reverse().join(''));
  }
  
  const inputSentence = "This is a sunny day";
  const reversedSentence = reverseWords(inputSentence);
  console.log(reversedSentence); 
  