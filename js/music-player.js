let media = document.querySelector("audio.fc-media");
let audio = new MediaElementPlayer(media, {
    iconSprite: "",
    audioHeight: 40,
    features : ["playpause", "current", "duration", "progress", "volume", "tracks", "fullscreen"],
    alwaysShowControls: true,
    timeAndDurationSeparator: "<span></span>",
    iPadUseNativeControls: false,
    iPhoneUseNativeControls: false,
    AndroidUseNativeControls: false
});

let img = new Image();
img.crossOrigin = "Anonymous";

let imageElement = document.getElementById("image");
img.src = imageElement.style.backgroundImage.replace('url("', "").replace('")', "");

img.onload = () => {
    let colorThief = new ColorThief();
    let color = colorThief.getColor(img);
    let player = document.getElementById("player");
    player.style.backgroundColor = "rgb(" + color + ")";
    player.style.display = "block";
}
