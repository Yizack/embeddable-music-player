# embeddable-music-player
Embed a simple HTML music player from local audio on your website using [MediaElement.js](https://www.mediaelementjs.com/) and [Color Thief](https://lokeshdhakar.com/projects/color-thief/). Inspired by Spotify's embed player.

(Fullscreen Live [Demo](https://embeddable-music-player.yizack.com/player/just-stay.html))
[![Live Demo](https://yizack.com/images/embeddable-music-player/full-screen.jpg)](https://embeddable-music-player.yizack.com/player/just-stay.html)

## Recommended requeriments
- Mp3 audio source.
- Square image.

## Configuration
- Clone or download my repository ([Yizack/embeddable-music-player](https://github.com/Yizack/embeddable-music-player)).
- Edit the file [`/player/song.html`](https://github.com/Yizack/embeddable-music-player/blob/master/player/song.html)
  - Paste your song name in `{SONG-NAME}` for the title of your page.
  - Paste your audio file URL in `{MP3-SOURCE}` for the audio that will be played when you press the play button.
  - Paste your image URL in `{ARTWORK}` for the image that will be displayed.
  - You can also rename or create a new html file to have different players, for example for the live demo I have [`/player/just-stay.html`](https://embeddable-music-player.yizack.com/player/just-stay.html).
  
- Color Thief will detect automatically the dominant color of your song image for your player.
 
- Use the code below, replace `{YOUR-HTML-PLAYER}` with your HTML filename inside the folder [`/player`](https://github.com/Yizack/embeddable-music-player/blob/master/player) and paste it on your site where you want your audio player to appear.
  ```html
  <iframe src="/player/{YOUR-HTML-PLAYER}.html" width="300" height="385"></iframe>
  ```
  (Example of use on a website using iframes: [Dimatis Website](https://dimatis.yizack.com))
  [![Live Demo](https://yizack.com/images/embeddable-music-player/embeddeds.jpg)](https://dimatis.yizack.com)

- Thanks to the responsiveness you can play with the width and height as you want.
  ```html
  <iframe src="/player/{YOUR-HTML-PLAYER}.html" width="100%" height="450"></iframe>
  ```
  (Another example of use on a website using iframes: [Dimatis - Fly Again](https://dimatis.yizack.com/music/fly-again))
  [![Live Demo](https://yizack.com/images/embeddable-music-player/embeddeds2.jpg)](https://dimatis.yizack.com/music/fly-again)
