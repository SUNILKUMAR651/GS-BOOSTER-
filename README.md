# GS Pointer Two-Column PDF Generator Software

A production-ready, automated educational publishing web application designed to format bulk Question-Answer one-liners into authentic, high-density **A4 Two-Column "GS Pointer" (Ghatna Chakra / Samanya Adhyayan Style)** book layouts ready for direct vector PDF export.

---

## 🌟 Key Features

### 1. Strict A4 Millimeter Layout (`210mm × 297mm`)
- **Top Clickable Promo / Join Banner:** Positioned at the top of every page with an active `<a href="...">` hyperlink tag that stays 100% clickable inside exported vector PDFs (ideal for Telegram channels, YouTube links, and websites).
- **3-Part Header with Optional Institute Logo:**
  - Left: Institute Logo image + Series/Institute Name (e.g. `GS प्वाइंटर`).
  - Center: Subject or Topic Name (e.g. `(भारतीय इतिहास)`).
  - Right: Dynamic Page Number that auto-increments for subsequent pages.
  - Divided by a crisp `1.5px solid #000` horizontal border.
- **Two-Column Body Layout:**
  - Standard `7mm` column gap with optional subtle column rule divider.
  - Formatted with Google Font **Noto Sans Devanagari** (`10px`–`15px` adjustable).
  - `break-inside: avoid` prevents questions from breaking awkwardly across columns or page boundaries.
  - Every item begins with the authentic arrow bullet: `➢`.
- **Chapter / Topic Divider Banners (`column-span: all;`):**
  - Group questions under chapter headings like `### सैंधव सभ्यता एवं संस्कृति` or `[ पाषाण काल ]`.
  - Spans across **both columns** with a shaded divider box (`❖ सैंधव सभ्यता एवं संस्कृति ❖`), exactly like Ghatna Chakra books!
- **Color Customization (Red Answer & Black Question):**
  - **Answers in Vibrant RED (`#dc2626`)** and **Questions in crisp Black (`#000000`)**.
  - Includes custom color picker and quick palette buttons.
  - `-webkit-print-color-adjust: exact` guarantees vector-sharp red answers in the exported PDF!
- **Two Answer Placement Modes:**
  - **Mode 1 (Authentic GS Pointer Right-Aligned):** Question flows naturally, followed by a right-aligned bold answer prefixed with an en-dash (`– उत्तर`).
  - **Mode 2 (Inline Bold):** Question followed immediately on the same line with bold answer (` – उत्तर`).
- **Semi-Transparent Floating Watermark:** Configurable bottom-right tilted (`-10°`), center diagonal (`-35°`), or hidden, with adjustable opacity (`5%`–`80%`).
- **Outer Page Frame / Book Border:** Choose between Clean Borderless, Classic Single Box (`1.2px solid`), or Authentic Double Frame.
- **3-Part Footer:** Mirrors the header with a `1.5px solid #000` top border and matching page numbers.

### 2. 🚀 100% Auto-Fit Full Page Packing Engine
- Dynamically measures actual rendered item heights.
- Fills Column 1 completely to the bottom (260mm), then fills Column 2 completely to the bottom.
- Guarantees **ZERO unwanted blank space**—Page 1 is 100% packed before Page 2 begins.
- Also supports optional manual items-per-page slider (20 to 85 items).

### 3. 🌐 1-Click Language Converter (हिन्दी ⇄ English)
- **हिन्दी ➔ English:** 1-Click translates all questions and answers into English while preserving delimiters (`===`, `-`, `:`).
- **English ➔ हिन्दी:** 1-Click translates English questions back into Hindi Devanagari.
- Smart header translation (e.g. `(भारतीय इतिहास)` ⇄ `(Indian History)`).
- Real-time progress indicator (`Translating 15 / 36...`).

### 4. Direct File Import, Export & Copy
- **📂 Upload .txt / .csv File:** Instantly loads questions from your local drive.
- **📋 Copy:** 1-click clipboard copy of all questions.
- **💾 Export:** 1-click download as a `.txt` file.

### 5. Live Search & Highlight
- Search bar in the preview toolbar highlights all matching keywords across all pages in realtime with a bright yellow highlight.

### 6. Built-in Sample Datasets
- 🏛️ **प्राचीन भारतीय इतिहास** (70 Ghatna Chakra GS Pointer questions with topic banners)
- ⚖️ **भारतीय राजव्यवस्था** (36 Indian Polity & Constitution questions)
- 📖 **सामान्य हिंदी** (36 Antonyms and One-Word Substitutions)
- 🔬 **सामान्य विज्ञान** (36 Physics and Biology units)

---

## 🚀 How to Run

1. Open `index.html` directly in any modern web browser (Google Chrome, Microsoft Edge, Brave, Firefox, Safari) by double-clicking the file.
2. Or use the running local server:
   ```
   http://localhost:3000
   ```

---

## 🖨️ How to Export High-Quality Vector PDF

1. Click the **"Save as PDF (Ctrl+P)"** or **"Generate / Save as PDF"** button.
2. In the Chrome/Edge Print Dialog:
   - **Destination:** Select `Save as PDF`.
   - **Paper Size:** Ensure `A4` is selected.
   - **Margins:** Select **`None`** (the software handles millimeter page geometry automatically).
   - **Options:** Check **`Background graphics`** (preserves borders, watermark, and red answers).
3. Click **Save**. Your PDF will be vector-sharp with active clickable links and colored answers!
