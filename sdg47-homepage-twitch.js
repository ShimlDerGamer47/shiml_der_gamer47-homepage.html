document.addEventListener("DOMContentLoaded", () => {
  try {
    const currentDomain = window.location.hostname || window.location.href;
    const html = document.documentElement;
    const head = document.head;

    const fontFamilyVar = "--font-family-var";
    const robotoBold = getComputedStyle(html)
      .getPropertyValue(fontFamilyVar)
      .trim();

    const load = "load";

    const none = "none";
    const def = "default";

    const copy = "copy";
    const dragstart = "dragstart";
    const keydown = "keydown";
    const select = "select";

    const twitchEmbedPlayerDiv =
      document.getElementById("twitchEmbedPlayerContainerId") ||
      document.querySelector("#twitchEmbedPlayerContainerId");

    (function twitchEmbedCreateToken() {
      const eventArray = [copy, dragstart, keydown, select];

      const widthIfr = 1920;
      const heightIfr = 1080;
      const embedChannel = "shiml_der_gamer47";
      const emebedTheme = "dark";
      const embedAutoplay = true;
      const embedAllowFullScreen = true;
      const embedlayout = "video-with-chat";
      const embedVolume = 1;
      const embedMuted = true;
      const embedQuality = "chunked";

      const cssClassTwitchEmbedPlayer = "twitch-embed-player";
      const loading = "loading";
      const lazy = "lazy";

      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          const script = document.createElement("script");
          script.async = true;
          script.src = "https://player.twitch.tv/js/embed/v1.js";
          script.addEventListener(load, (e) => {
            e.preventDefault();

            const embed = new Twitch.Embed(twitchEmbedPlayerDiv, {
              width: widthIfr,
              height: heightIfr,
              channel: embedChannel,
              theme: emebedTheme,
              autoplay: embedAutoplay,
              allowfullscreen: embedAllowFullScreen,
              layout: embedlayout,
              parent: [currentDomain],
            });

            embed.addEventListener(Twitch.Embed.LIVESTREAM_READY, () => {
              let player = embed.getPlayer();

              player.setVolume(embedVolume);
              player.setMuted(embedMuted);
              player.setQuality(embedQuality);

              return;
            });

            const iframe = twitchEmbedPlayerDiv.querySelector("iframe");
            iframe.classList.add(cssClassTwitchEmbedPlayer);
            iframe.setAttribute(loading, lazy);

            eventArray.forEach((event) => {
              if (!event) return;

              iframe.addEventListener(event, (e) => e.preventDefault());
            });

            if (robotoBold) {
              Object.assign(iframe.style, {
                fontFamily: robotoBold,
                WebkitUserSelect: none,
                userSelect: none,
                cursor: def,
              });
            }

            observer.unobserve(twitchEmbedPlayerDiv);
          });

          head.appendChild(script);
        }

        return;
      });

      observer.observe(twitchEmbedPlayerDiv);
    })();
  } catch (error) {
    console.error(
      "Hautp-Fehler bei der Datei sgd47-homepage-twitch.js:",
      error,
    );
  }
});
