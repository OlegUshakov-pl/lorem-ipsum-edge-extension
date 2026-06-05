![image](Image.png)
# Lorem Ipsum Generator - Edge Extension

A simple and elegant browser extension for generating Lorem Ipsum placeholder text directly from your browser.

## 📋 Features

- **Generate Paragraphs or Words** - Choose between generating Lorem Ipsum paragraphs or individual words
- **Adjustable Count** - Use a smooth horizontal slider to select from 1 to 200 items
- **Real-time Counter** - Displays live word and character count
- **One-click Copy** - Easily copy generated text to clipboard
- **Modern UI** - Clean and minimal interface with a professional design
- **Instant Feedback** - Copy button shows confirmation when text is copied

## 🚀 Installation

1. Download or clone this repository
2. Open Microsoft Edge browser
3. Navigate to `edge://extensions/`
4. Enable **Developer mode** (toggle in the top-right corner)
5. Click **Load unpacked**
6. Select the extension folder

## 📖 Usage

1. Click the extension icon in your toolbar
2. Select **Type**: Choose between "Paragraphs" or "Words"
3. Adjust the **Count** slider (1-200)
4. Click **Generate** button to create the text
5. View the word and character count at the bottom
6. Click **Copy** to copy the generated text to your clipboard

## 🎨 Customization

The extension includes:
- `manifest.json` - Extension configuration
- `popup.html` - User interface markup
- `popup.js` - Core functionality and logic
- `style.css` - Modern styling with no rounded corners
- Icon files (16x48x128px)

## 📐 Technical Details

- **Width**: 350px popup window
- **Font Size**: 16px headers, 13-14px controls, 12px version info
- **Theme**: Light gray background (#ccc) with clean white controls
- **Slider**: Horizontal range input with real-time value display
- **Counter**: Dynamic word and character calculation

## ✨ Keyboard Shortcuts & Controls

- **Type Selector**: Choose between Paragraphs (1-20) or Words (1-200)
- **Count Slider**: Drag to adjust count value
- **Generate Button**: Click to generate Lorem Ipsum text
- **Copy Button**: Click to copy generated text with visual feedback

## 📦 Version

**Version 1.00** - Initial release

## 🛠️ Browser Compatibility

- Microsoft Edge (Chromium-based)
- Modern browsers with Manifest V3 support

## 📝 Notes

- Generated text is authentic Lorem Ipsum placeholder text
- Text is not stored anywhere - only displayed in the popup
- Copy functionality uses the browser's native Clipboard API

---

**Created**: 05/06/2026  
**Author**: Oleg Ushakov
