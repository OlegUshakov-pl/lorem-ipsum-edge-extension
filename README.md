![lorem ipsum](Image.png)
# Lorem Ipsum Generator - Edge Extension

A simple browser extension for generating Lorem Ipsum placeholder text directly from your browser.

## Features

- **Words, Paragraphs or Letters** — choose between generating Lorem Ipsum paragraphs, individual words, or single letters
- **Adjustable Count** — horizontal slider from 1 to 200
- **Real-time Counter** — displays live letter, word and paragraph count
- **One-click Copy** — copy generated text to clipboard
- **Clear** — clear the generated text with one click
- **Modern UI** — clean minimal interface

## Installation

1. Download or clone this repository
2. Open Microsoft Edge browser
3. Navigate to `edge://extensions/`
4. Enable **Developer mode**
5. Click **Load unpacked**
6. Select the extension folder

## Usage

1. Click the extension icon in your toolbar
2. Select **Type**: Words, Paragraphs or Letters
3. Adjust the **Count** slider (1–200)
4. Click **Generate** to create text
5. View letter, word and paragraph count at the bottom
6. Click **Copy** to copy text, or **Clear** to reset

## Project Files

- `manifest.json` — Extension configuration (Manifest V3)
- `popup.html` — User interface markup
- `popup.js` — Core logic
- `style.css` — Styling
- Icon files (16×48×128px)

## Technical Details

- Popup width: 350px
- Font: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
- Copy button: green (#25da4f), Clear button: lab(63.3038 -18.433 -51.0407)
- Both buttons have matching font, shadow, and border-radius (18px)
- Counter shows Letters, Words, and Paragraphs in real time

## Version

**Version 1.30**

## Browser Compatibility

- Microsoft Edge (Chromium-based)
- Any browser with Manifest V3 support

---

**Created**: 05/06/2026  
**Author**: Oleg Ushakov
