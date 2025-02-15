// Reverse Words Algorithm
// Depending on the programming language and precise data type used, a variable declared to be a string may either cause storage in memory to be statically allocated for a predetermined maximal length or use dynamic allocation to let it to keep a variable number of components. A string is generally considered as a data type and is often implemented as an array data structure of bytes (or words) that stores a sequence of components, typically characters, use some character encoding.
const reverseWords = (str) => {
  const strArray = str.split(" ");

  for (let index = 0; index < strArray.length / 2; index++) {
    [strArray[index], strArray[strArray.length - 1 - index]] = [
      strArray[strArray.length - 1 - index],
      strArray[index],
    ];
  }

  return strArray.join(" ");
};

module.exports = reverseWords;
