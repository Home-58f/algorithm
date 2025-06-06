/**
 * Analyzes a given sentence to determine its length, word count, and vowel count.
 * The sentence is expected to end with a period (.).
 *
 * @param {string} sentence - The input sentence to analyze.
 * @returns {object} An object containing the calculated length, word count, and vowel count.
 */
function analyzeSentence(sentence) {
  // --- Initialize counters ---
  let sentenceLength = 0; // Counts total characters
  let wordCount = 0;      // Counts words
  let vowelCount = 0;     // Counts vowels

  // Set of vowels for quick lookup (case-insensitive)
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

  // Flag to track if we are currently inside a word
  let inWord = false;

  // --- Iterate through each character of the sentence ---
  // We use a for...of loop to easily access each character
  for (const char of sentence) {
    // Increment total sentence length for every character
    sentenceLength++;

    // Convert character to lowercase for case-insensitive vowel check
    // If the character is a vowel, increment vowelCount
    if (vowels.has(char)) {
      vowelCount++;
    }

    // Check if the character is an alphabetic letter
    const isLetter = (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');

    // --- Word counting logic ---
    if (isLetter) {
      // If we encounter a letter and were NOT previously in a word,
      // it means we've started a new word.
      if (!inWord) {
        wordCount++;
        inWord = true; // Set flag to true as we are now inside a word
      }
    } else {
      // If the character is not a letter (e.g., space, punctuation),
      // it means we are no longer in a word.
      inWord = false;
    }

    // Stop processing if the current character is a period, as it marks the end of the sentence.
    if (char === '.') {
      break;
    }
  }

  // --- Return the results ---
  return {
    sentenceLength: sentenceLength,
    wordCount: wordCount,
    vowelCount: vowelCount
  };
}

// --- Example Usage ---

const mySentence1 = "This is a sample sentence.";
const result1 = analyzeSentence(mySentence1);
console.log(`Analyzing: "${mySentence1}"`);
console.log(`Length: ${result1.sentenceLength}`);
console.log(`Words: ${result1.wordCount}`);
console.log(`Vowels: ${result1.vowelCount}`);
// Expected Output:
// Length: 26 (includes period)
// Words: 5
// Vowels: 9

console.log('---');

const mySentence2 = "Hello world.";
const result2 = analyzeSentence(mySentence2);
console.log(`Analyzing: "${mySentence2}"`);
console.log(`Length: ${result2.sentenceLength}`);
console.log(`Words: ${result2.wordCount}`);
console.log(`Vowels: ${result2.vowelCount}`);
// Expected Output:
// Length: 12
// Words: 2
// Vowels: 3

console.log('---');

const mySentence3 = "A short one.";
const result3 = analyzeSentence(mySentence3);
console.log(`Analyzing: "${mySentence3}"`);
console.log(`Length: ${result3.sentenceLength}`);
console.log(`Words: ${result3.wordCount}`);