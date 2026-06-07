const loremText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const words = loremText.toLowerCase().split(/\s+/).filter(w => w.length > 0);
const loremWords = words.map(w => w.replace(/[^a-z]/g, ''));

const output = document.getElementById("output");
const typeSelect = document.getElementById("type");
const countInput = document.getElementById("count");
const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copy");
const wordCountSpan = document.getElementById("wordCount");
const paragraphCountSpan = document.getElementById("paragraphCount");
const letterCountSpan = document.getElementById("letterCount");

function updateCounter() {
  const text = output.value.trim();
  const charCount = text.length;
  const wordCount = text.length > 0 ? text.split(/\s+/).length : 0;
  const letterCount = text.replace(/[^a-zA-Z]/g, "").length;
  const paragraphCount = text.length > 0 ? text.split(/\n\s*\n/).filter(p => p.trim().length > 0).length : 0;
  
  letterCountSpan.textContent = letterCount;
  wordCountSpan.textContent = wordCount;
  paragraphCountSpan.textContent = paragraphCount;
}

function generateWords(count) {
  let result = [];
  for (let i = 0; i < count; i++) {
    result.push(loremWords[i % loremWords.length]);
  }
  return result.join(' ') + '.';
}

function generateParagraphs(count) {
  let result = [];
  const paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;
  
  for (let i = 0; i < count; i++) {
    result.push(paragraph);
  }
  return result.join('\n\n');
}

function generateLetters(count) {
  const allLetters = loremWords.join('').split('');
  let result = [];
  for (let i = 0; i < count; i++) {
    result.push(allLetters[i % allLetters.length]);
  }
  return result.join('');
}

generateBtn.addEventListener("click", () => {
  const type = typeSelect.value;
  const count = Math.max(1, Math.min(200, parseInt(countInput.value) || 1));
  
  if (type === "words") {
    output.value = generateWords(count);
  } else if (type === "letters") {
    output.value = generateLetters(count);
  } else {
    output.value = generateParagraphs(count);
  }
  
  // Принудительно обновить счетчик
  output.dispatchEvent(new Event("input", { bubbles: true }));
});

copyBtn.addEventListener("click", async () => {
  if (output.value.trim().length === 0) {
    alert("Nothing to copy! Generate text first.");
    return;
  }
  
  try {
    await navigator.clipboard.writeText(output.value);
    const originalText = copyBtn.textContent;
    copyBtn.textContent = "Copied! ✓";
    setTimeout(() => {
      copyBtn.textContent = originalText;
    }, 2000);
  } catch (err) {
    alert("Copy failed.");
  }
});

output.addEventListener("input", updateCounter);

// Update count value display when slider changes
countInput.addEventListener("input", () => {
  document.getElementById("countValue").textContent = countInput.value;
});
