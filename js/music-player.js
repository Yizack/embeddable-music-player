const media = document.querySelector("audio.mp__music");
const audio = new MediaElementPlayer(media, {
  iconSprite: "",
  audioHeight: 40,
  features : ["playpause", "current", "duration", "progress", "volume", "tracks", "fullscreen"],
  alwaysShowControls: true,
  timeAndDurationSeparator: "<span></span>",
  iPadUseNativeControls: false,
  iPhoneUseNativeControls: false,
  AndroidUseNativeControls: false
});

const fac = new FastAverageColor();
const img = document.querySelector(".musicplayer .mp__image");

const detectColor = async () => {
  const color = await fac.getColorAsync(img.src);
  const player = document.querySelector(".musicplayer");
  player.style.backgroundColor = color.rgb;
}

detectColor();
