if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', () => {
        alert("don't look!");
        alert("stop");
    });
} else {
    console.log("don't look!");
    console.log("stop");
}
// Node.js script to count characters, words and vowels

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a sentence ending with a period: ', (sentence) => {
    // Character count (includes spaces and punctuation)
    const charCount = sentence.length;

    // Word count (split on whitespace)
    const trimmed = sentence.trim();
    const wordCount = trimmed === '' ? 0 : trimmed.split(/\s+/).length;

    // Vowel count (case-insensitive)
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let vowelCount = 0;
    for (const ch of sentence.toLowerCase()) {
        if (vowels.has(ch)) vowelCount++;
    }

    console.log('Length of the sentence:', charCount);
    console.log('Number of words:', wordCount);
    console.log('Number of vowels:', vowelCount);

    rl.close();
});
