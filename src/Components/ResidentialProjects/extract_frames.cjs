const https = require('https');
const fs = require('fs');

const req = https.get('https://www.youtube.com/watch?v=JuAa0bUDrGQ', {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
  }
}, (res) => {
  let body = '';
  res.on('data', chunk => body += chunk);
  res.on('end', () => {
    const match = body.match(/ytInitialPlayerResponse\s*=\s*({.+?});(?:var\s|const\s|<\/script>)/);
    if (match) {
      try {
        const player_data = JSON.parse(match[1]);
        const storyboards = player_data.storyboards;
        console.log("Storyboards:", JSON.stringify(storyboards, null, 2));
        console.log("Video title:", player_data.videoDetails?.title);
        console.log("Length seconds:", player_data.videoDetails?.lengthSeconds);
        fs.writeFileSync('storyboard.json', JSON.stringify(storyboards || {}, null, 2));
      } catch (err) {
        console.error("JSON parse err:", err.message);
      }
    } else {
      console.log("No ytInitialPlayerResponse match found");
    }
  });
});
req.on('error', err => console.error("Request err:", err));
