# Countdown Download Page

A lightweight, embeddable PDF download page with a 15-second animated countdown, live progress bar, and auto-redirect to the file URL passed via a query parameter. Built with vanilla HTML, CSS, and JavaScript — no frameworks or dependencies required.

## How It Works

1. The page loads and starts a 15-second countdown.
2. A spinning ring animation and progress bar fill up in real time.
3. Status messages update at key intervals to indicate progress.
4. When the countdown reaches zero, the page automatically redirects the user to the PDF file.
5. A download button also appears as a fallback.

## Usage

Pass the PDF (or any file) URL as a `link` query parameter:

```
index.html?link=https://example.com/your-file.pdf
```

## File Structure

```
countdown-download-page/
├── index.html      # HTML structure
├── styles.css      # All styles and responsive layout
└── script.js       # Countdown, progress, and redirect logic
```

## Features

- 15-second animated countdown with spinning ring
- Live progress bar synced to the countdown
- Dynamic status messages that update during the countdown
- Auto-redirect to the file URL on completion
- Fallback download button shown after countdown ends
- Disclaimer section for educational/informational use
- Fully responsive for mobile devices
- No dependencies — pure HTML, CSS, and JavaScript

## Customization

### Change the countdown duration

In `script.js`, update the `seconds` variable and the progress percentage calculation:

```js
var seconds = 15; // change this value
```

Also update the divisor in the progress formula to match:

```js
var percentage = ((15 - seconds) / 15) * 100;
// replace both 15s with your new duration
```

### Change the accent color

In `styles.css`, search for `#2563eb` and replace it with your preferred color. This controls the countdown ring, progress bar, button, and icon tints.

## License

This project is open source and available under the [MIT License](LICENSE).
