import urllib.request
import re
import json

req = urllib.request.Request(
    'https://www.youtube.com/watch?v=JuAa0bUDrGQ',
    headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
)
try:
    with urllib.request.urlopen(req) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
    
    # search for ytInitialPlayerResponse
    match = re.search(r'ytInitialPlayerResponse\s*=\s*({.+?});(?:var\s|const\s|</script>)', html)
    if match:
        player_data = json.loads(match.group(1))
        storyboards = player_data.get('storyboards', {})
        print("Storyboards:", json.dumps(storyboards, indent=2))
        video_details = player_data.get('videoDetails', {})
        print("Video title:", video_details.get('title'))
        print("Length seconds:", video_details.get('lengthSeconds'))
    else:
        print("No ytInitialPlayerResponse found")
except Exception as e:
    print("Error:", e)

