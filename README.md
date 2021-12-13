# embeddable-music-player
Embed a simple HTML music player from local audio on your website using [MediaElement.js](https://www.mediaelementjs.com/).

(Fullscreen Live [Demo](https://embeddable-music-player.yizack.com/player/just-stay.html))
[![Live Demo](https://yizack.com/images/embeddable-music-player/full-screen.jpg)](https://embeddable-music-player.yizack.com/player/just-stay.html)

## Recommended requeriments
- Mp3 audio source.
- Square image.

## Configuration
- Edit the file [`/player/song.html`](https://github.com/Yizack/embeddable-music-player/blob/master/player/song.html)
  - Paste your song name in `{SONG-NAME}` for the title of your page.
  - Paste your audio file URL in `{MP3-SOURCE}` for the audio that will be played when you press the play button.
  - Paste your image URL in `{ARTWORK}` for the image that will be displayed.
 
- Edit the file [`/css/music-player.css`](https://github.com/Yizack/embeddable-music-player/blob/master//css/music-player.css)
  - At the end of the css file in `.player-color` you can edit the background color of your player or adding a new class, for example for the live demo I added a new class:
  ```css
  ...
  .just-stay {
      background: rgb(240 170 194);
   }
  ...
  ```
  - If you add a new class make sure to change the class attribute in [`/player/song.html`](https://github.com/Yizack/embeddable-music-player/blob/master/player/song.html) at this line `<div id="player" class="player-color">`, for example for the live demo I changed it to `<div id="player" class="just-stay">`.

- Use the code below, replace `{YOUR-HTML-PLAYER}` with your HTML filename inside the folder `/player` and paste it on your site where you want your audio player to appear.
  ```html
  <iframe src="/player/{YOUR-PLAYER-HTML}.html" width="300" height="385"></iframe>
  ```
  (Example of use on a website using iframes: [Dimatis Website](https://dimatis.yizack.com))
  [![Live Demo](https://yizack.com/images/embeddable-music-player/embeddeds.jpg)](https://dimatis.yizack.com)