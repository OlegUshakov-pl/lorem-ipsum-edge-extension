const loremTextLat = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const loremTextEn = `The quick brown fox jumps over the lazy dog near the riverbank. 
A gentle breeze carries the sweet scent of wildflowers across the meadow. 
The old oak tree stands tall against the morning sky, its leaves rustling softly. 
Birds sing their cheerful songs as the sun rises above the distant hills. 
Nature awakens with a promise of a beautiful new day full of wonder.`;

const wordsLat = loremTextLat.toLowerCase().split(/\s+/).filter(w => w.length > 0);
const loremWordsLat = wordsLat.map(w => w.replace(/[^a-z]/g, ''));

const wordsEn = loremTextEn.toLowerCase().split(/\s+/).filter(w => w.length > 0);
const loremWordsEn = wordsEn.map(w => w.replace(/[^a-z]/g, ''));

const enParagraphWords = loremTextEn.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim().split(/\s+/);
const latHalfCount = Math.ceil(enParagraphWords.length / 2);
const latParagraphShort = loremTextLat.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim().split(/\s+/).slice(0, latHalfCount).join(' ');
const enParagraph = enParagraphWords.join(' ');

const output = document.getElementById("output");
const typeSelect = document.getElementById("type");
const languageSelect = document.getElementById("language");
const countInput = document.getElementById("count");
const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copy");
const clearBtn = document.getElementById("clear");
const wordCountSpan = document.getElementById("wordCount");
const paragraphCountSpan = document.getElementById("paragraphCount");
const letterCountSpan = document.getElementById("letterCount");

function updateCounter() {
  const text = output.value.trim();
  const wordCount = text.length > 0 ? text.split(/\s+/).length : 0;
  const letterCount = text.replace(/[^a-zA-Z]/g, "").length;
  const paragraphCount = text.length > 0 ? text.split(/\n\s*\n/).filter(p => p.trim().length > 0).length : 0;
  
  letterCountSpan.textContent = letterCount;
  wordCountSpan.textContent = wordCount;
  paragraphCountSpan.textContent = paragraphCount;
}

function generateWords(count, lang) {
  const wordList = lang === 'en' ? loremWordsEn : loremWordsLat;
  let result = [];
  for (let i = 0; i < count; i++) {
    result.push(wordList[i % wordList.length]);
  }
  return result.join(' ') + '.';
}

function generateParagraphs(count, lang) {
  const paragraph = lang === 'en' ? enParagraph : latParagraphShort;
  let result = [];
  for (let i = 0; i < count; i++) {
    result.push(paragraph);
  }
  return result.join('\n\n');
}

function generateLetters(count, lang) {
  const wordList = lang === 'en' ? loremWordsEn : loremWordsLat;
  const allLetters = wordList.join('').split('');
  let result = [];
  for (let i = 0; i < count; i++) {
    result.push(allLetters[i % allLetters.length]);
  }
  return result.join('');
}

generateBtn.addEventListener("click", () => {
  const type = typeSelect.value;
  const lang = languageSelect.value;
  const count = Math.max(1, Math.min(200, parseInt(countInput.value, 10) || 1));
  
  if (type === "words") {
    output.value = generateWords(count, lang);
  } else if (type === "letters") {
    output.value = generateLetters(count, lang);
  } else {
    output.value = generateParagraphs(count, lang);
  }
  
  // Force counter update
  output.dispatchEvent(new Event("input", { bubbles: true }));
});

copyBtn.addEventListener("click", async () => {
  if (output.value.trim().length === 0) {
    alert("Nothing to copy! Generate text first.");
    return;
  }
  
  try {
    await navigator.clipboard.writeText(output.value);
    copyBtn.textContent = "Copied! ✓";
    setTimeout(() => {
      copyBtn.textContent = "Copy";
    }, 2000);
  } catch (err) {
    alert("Copy failed.");
  }
});

clearBtn.addEventListener("click", () => {
  output.value = "";
  output.dispatchEvent(new Event("input", { bubbles: true }));
});

output.addEventListener("input", updateCounter);

// Update count value display when slider changes
countInput.addEventListener("input", () => {
  document.getElementById("countValue").textContent = countInput.value;
});
