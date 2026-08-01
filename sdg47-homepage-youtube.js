document.addEventListener("DOMContentLoaded", () => {
  try {
    const html = document.documentElement;
    const head = document.head;

    const fontFamilyVar = "--font-family-var";
    const robotoBold = getComputedStyle(html)
      .getPropertyValue(fontFamilyVar)
      .trim();

    const copy = "copy";
    const dragstart = "dragstart";
    const keydown = "keydown";
    const select = "select";

    const none = "none";
    const def = "default";

    const youtubePlayer =
      document.getElementById("youtubePlayerId") ||
      document.querySelector("#youtubePlayerId");

    (function youtubeEmbedCreateToken() {
      const widthIfr = 1920;
      const heightIfr = 1080;

      const decApiUrl =
        "https://decapi.me/youtube/latest_video/?handle=shiml_der_gamer47&format={id}";

      const loading = "loading";
      const lazy = "lazy";

      const eventArray = [copy, dragstart, keydown, select];

      eventArray.forEach((event) => {
        if (!event) return;
        youtubePlayer.addEventListener(event, (e) => e.preventDefault());
      });

      if (robotoBold) {
        Object.assign(youtubePlayer.style, {
          fontFamily: robotoBold,
          WebkitUserSelect: none,
          userSelect: none,
          cursor: def,
        });
      }

      fetch(decApiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `Fehler beim Auslesen der DecApi! Status=${response.status}.`,
            );
          }
          return response.text();
        })
        .then((decApiYtVidIdUrl) => {
          const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
              const script = document.createElement("script");
              script.async = true;
              script.type = "text/javascript";
              script.src = "https://www.youtube.com/iframe_api";
              head.appendChild(script);

              let player;
              let done = false;

              window.onYouTubeIframeAPIReady = function () {
                player = new YT.Player(youtubePlayer, {
                  width: widthIfr,
                  height: heightIfr,
                  videoId: decApiYtVidIdUrl,
                  playerVars: {
                    playsinline: 1,
                  },
                  events: {
                    onReady: onPlayerReady,
                    onStateChange: onPlayerStateChange,
                  },
                });
              };

              function onPlayerReady(event) {
                event.target.playVideo();
              }

              function onPlayerStateChange(event) {
                if (event.data === YT.PlayerState.PLAYING && !done) {
                  setTimeout(stopVideo, 6000);
                  done = true;
                }
              }

              function stopVideo() {
                if (player) {
                  player.stopVideo();
                }
              }

              observer.unobserve(youtubePlayer);
            }

            return;
          });

          observer.observe(youtubePlayer);
        })
        .catch((error) => {
          console.error("Fehler beim Auslesen der DecApi:", error);
        });
    })();
  } catch (error) {
    console.error(
      "Haupt-Fehler bei der Datei sdg47-homepage-youtube.js:",
      error,
    );
  }
});
