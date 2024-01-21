function findLongestWordLength(inputString) {
    const words = inputString.split(" ");

    let longestWord = "";
    let longestWordLength = 0;

    for (const word of words) {
        const cleanedWord = word.replace(/[^a-zA-Z]/g, "");

        if (cleanedWord.length > longestWordLength) {
            longestWord = cleanedWord;
            longestWordLength = cleanedWord.length;
        }
    }
    return [longestWord, longestWordLength];
}

const inputString = "The quick brown fox jumped over the lazy dog";
const result = findLongestWordLength(inputString);
console.log(result);
