const https = require('https');
const fs = require('fs');

// We have the spec:
// Base: https://i.ytimg.com/sb/JuAa0bUDrGQ/storyboard3_L$L/$N.jpg?sqp=-oaymwGhAUg48quKqQOYAYgBAZUBAAAEQpgBMqABPKgBBLIBQBANDBAVHyYtDg4PEhcrLCkPDhAVHyoyKQ8RFBgmPTgtERQeKjFLRzYVHCkuOUdNPyUuNz1HUlFFM0BCQ0xERkO6AUARERUjRENDQxETFi9DQ0NDFRYpQ0NDQ0MjL0NDQ0NDQ0RDQ0NDQ0JCQ0NDQ0NCQkJDQ0NDQkJCQkNDQ0JCQkJCovOX_wMGCJjNuNYG
// Level 3 is 320x180, 110 total frames, 3x3 grid per sheet (9 frames per sheet), sigh=rs$AOn4CLD9PI-g4kU4J_f5Nu12df-U1luS_g
// 109 seconds total duration.
// Sheet 0 has frames 0 to 8 (seconds 0 to ~9)
// Sheet 1 has frames 9 to 17 (seconds ~10 to ~18)
// etc.

const base = "https://i.ytimg.com/sb/JuAa0bUDrGQ/storyboard3_L3/M";
const sigh = "rs$AOn4CLD9PI-g4kU4J_f5Nu12df-U1luS_g";
const sqp = "-oaymwGhAUg48quKqQOYAYgBAZUBAAAEQpgBMqABPKgBBLIBQBANDBAVHyYtDg4PEhcrLCkPDhAVHyoyKQ8RFBgmPTgtERQeKjFLRzYVHCkuOUdNPyUuNz1HUlFFM0BCQ0xERkO6AUARERUjRENDQxETFi9DQ0NDFRYpQ0NDQ0MjL0NDQ0NDQ0RDQ0NDQ0JCQ0NDQ0NCQkJDQ0NDQkJCQkNDQ0JCQkJCovOX_wMGCJjNuNYG";

function downloadSheet(m) {
  const url = `${base}${m}.jpg?sqp=${sqp}&sigh=${sigh}`;
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => {
        const buf = Buffer.concat(chunks);
        fs.writeFileSync(`sheet_${m}.jpg`, buf);
        console.log(`Saved sheet_${m}.jpg, size: ${buf.length}`);
        resolve();
      });
    }).on('error', reject);
  });
}

async function run() {
  for (let i = 0; i < 13; i++) {
    await downloadSheet(i);
  }
}
run();

