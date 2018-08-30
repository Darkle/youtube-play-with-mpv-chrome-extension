# Youtube Play With MPV Chrome Extension

This is an extension that lets you play youtube videos with [mpv](https://mpv.io/ "mpv homepage").

There are 3 ways to open a video with this extension:

  1. Right-click on a youtube link.
    * When you right-click on a youtube link you will get a menu item that says "Open In MPV"
  2. If you are on a Youtube video page, a button will be shown below the video.
    * Clicking on the button will open the video in mpv.
  3. Clicking on the button in the chrome extensions toolbar.
    * When you click on the extension button, a popup will display showing all the Youtube links and embeds on the page. Clicking on one of these in the popup will open the video in mpv.
    * Note: if you click on the button when you are on a Youtube video page, it will open that video without showing the popup.

You can open multiple videos at once.

### Screenshots

#### Button On Youtube Video Page

![Youtube video page Open In MPV button](https://github.com/Darkle/youtube-play-with-mpv-chrome-extension/raw/master/readmeMedia/yt-page-button-j.jpg "Youtube video page Open In MPV button")

#### Extension Button Popup

![Extension popup](https://github.com/Darkle/youtube-play-with-mpv-chrome-extension/raw/master/readmeMedia/button-ext-popup.jpg "Extension popup")

### Native Client

This extension requires a native client to be installed. You can download the installer for the native client here: https://github.com/Darkle/youtube-play-with-mpv-native-client#readme

### Keybindings

I have changed the mpv keybindings slightly:

  * The up and down arrow keys now increase and decrease the volume.
  * The ctrl+right now skips ahead by one minute and ctrl+left skips back one minute (left and right still skip the normal amount: 5 seconds)

You can find the rest of the default mpv keybindings here: https://github.com/mpv-player/mpv/blob/master/etc/input.conf
