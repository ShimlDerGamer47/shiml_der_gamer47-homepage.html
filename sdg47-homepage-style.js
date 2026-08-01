document.addEventListener("DOMContentLoaded", () => {
  try {
    const body = document.body;

    const hidden = "hidden";
    const visible = "visible";
    const zero = 0;
    const one = 1;
    const translateProperty = "translate(-50%, -50%)";
    const scaleInProperty = `scale(${one.toString()})`;
    const scaleOutProperty = `scale(${zero.toString()})`;

    const diamond = "#";
    const get = (id) =>
      document.getElementById(id) || document.querySelector(diamond + id);

    const backgroundImgDiv = get("backgroundImgContainerId");

    const homepageWelcomeTitleDiv = get("homepageWelcomeTitleContainerId");
    const twitchEmbedPlayerDiv = get("twitchEmbedPlayerContainerId");
    const youtubePlayerDiv = get("youtubePlayerContainerId");
    const youtubeInfoMainDiv = get("youtubeInfoMainContainerId");

    const discordImgLinkDiv = get("discordImgLinkContainerId");
    const discordHOnePDiv = get("discordHOnePContainerId");

    const twitterImgLinkDiv = get("twitterImgLinkContainerId");
    const twitterHOnePDiv = get("twitterHOnePContainerId");

    const instagramImgLinkDiv = get("instagramImgLinkContainerId");
    const instagramHOnePDiv = get("instagramHOnePContainerId");

    const spotifyImgLinkDiv = get("spotifyImgLinkContainerId");
    const spotifyHOnePDiv = get("spotifyHOnePContainerId");

    const restSocialMediaDiv = get("restSocialMediaContainerId");

    const wait = (ms) => new Promise((r) => setTimeout(r, ms));

    const transitionScrollProperty =
      "transform 1.5s cubic-bezier(0.445, 0.05, 0.55, 0.95), visibility 1.5s cubic-bezier(0.445, 0.05, 0.55, 0.95), opacity 1.5s cubic-bezier(0.445, 0.05, 0.55, 0.95)";
    const transitionVisibleProperty =
      "visibility 1.5s cubic-bezier(0.445, 0.05, 0.55, 0.95), opacity 1.5s cubic-bezier(0.445, 0.05, 0.55, 0.95)";

    async function initializePageAnimation() {
      const elementArray = [
        backgroundImgDiv,
        homepageWelcomeTitleDiv,
        twitchEmbedPlayerDiv,
        youtubePlayerDiv,
      ].filter(Boolean);

      const loading = 750;
      const onOff = 1000;

      elementArray.forEach((element) => {
        element.style.visibility = hidden;
        element.style.opacity = zero;
      });

      homepageWelcomeTitleDiv.style.transform = scaleOutProperty;
      twitchEmbedPlayerDiv.style.transform = scaleOutProperty;

      body.style.backgroundColor = "rgb(0, 0, 0)";
      await wait(onOff);

      backgroundImgDiv.style.transition = transitionVisibleProperty;
      backgroundImgDiv.style.visibility = visible;
      backgroundImgDiv.style.opacity = one;
      await wait(onOff);

      homepageWelcomeTitleDiv.style.transition = transitionScrollProperty;
      homepageWelcomeTitleDiv.style.transform =
        translateProperty + scaleInProperty;
      homepageWelcomeTitleDiv.style.visibility = visible;
      homepageWelcomeTitleDiv.style.opacity = one;
      await wait(loading);

      twitchEmbedPlayerDiv.style.transition = transitionScrollProperty;
      twitchEmbedPlayerDiv.style.transform =
        translateProperty + scaleInProperty;
      twitchEmbedPlayerDiv.style.visibility = visible;
      twitchEmbedPlayerDiv.style.opacity = one;

      setTimeout(() => {
        const transitionName = "transition";
        const transformName = "transform";
        const visibilitName = "visibility";
        const opacityName = "opacity";

        elementArray.forEach((element) => {
          if (!element) return;

          element.style.removeProperty(transitionName);
          element.style.removeProperty(transformName);
          element.style.removeProperty(visibilitName);
          element.style.removeProperty(opacityName);
        });
      }, loading);
    }

    const setupScrollAnimationInitialState = () => {
      youtubePlayerDiv.style.visibility = hidden;
      youtubePlayerDiv.style.opacity = zero;
      youtubePlayerDiv.style.transition = transitionVisibleProperty;

      youtubeInfoMainDiv.style.visibility = hidden;
      youtubeInfoMainDiv.style.opacity = zero;
      youtubeInfoMainDiv.style.transform = translateProperty + scaleOutProperty;

      discordImgLinkDiv.style.visibility = hidden;
      discordImgLinkDiv.style.opacity = zero;
      discordImgLinkDiv.style.transform = translateProperty + scaleOutProperty;

      discordHOnePDiv.style.visibility = hidden;
      discordHOnePDiv.style.opacity = zero;
      discordHOnePDiv.style.transform = translateProperty + scaleOutProperty;

      twitterImgLinkDiv.style.visibility = hidden;
      twitterImgLinkDiv.style.opacity = zero;
      twitterImgLinkDiv.style.transform = translateProperty + scaleOutProperty;

      twitterHOnePDiv.style.visibility = hidden;
      twitterHOnePDiv.style.opacity = zero;
      twitterHOnePDiv.style.transform = translateProperty + scaleOutProperty;

      instagramImgLinkDiv.style.visibility = hidden;
      instagramImgLinkDiv.style.opacity = zero;
      instagramImgLinkDiv.style.transform =
        translateProperty + scaleOutProperty;

      instagramHOnePDiv.style.visibility = hidden;
      instagramHOnePDiv.style.opacity = zero;
      instagramHOnePDiv.style.transform = translateProperty + scaleOutProperty;

      spotifyImgLinkDiv.style.visibility = hidden;
      spotifyImgLinkDiv.style.opacity = zero;
      spotifyImgLinkDiv.style.transform = translateProperty + scaleOutProperty;

      spotifyHOnePDiv.style.visibility = hidden;
      spotifyHOnePDiv.style.opacity = zero;
      spotifyHOnePDiv.style.transform = translateProperty + scaleOutProperty;

      restSocialMediaDiv.style.visibility = hidden;
      restSocialMediaDiv.style.opacity = zero;
      restSocialMediaDiv.style.transform = translateProperty + scaleOutProperty;
    };

    let hasScrollAnimationStarted = false;

    const startScrollAnimationSequenceToken = async () => {
      if (hasScrollAnimationStarted) return;
      hasScrollAnimationStarted = true;

      const loading = 750;

      youtubePlayerDiv.style.transition = transitionVisibleProperty;
      youtubePlayerDiv.style.visibility = visible;
      youtubePlayerDiv.style.opacity = one;
      await wait(loading);

      youtubeInfoMainDiv.style.transition = transitionScrollProperty;
      youtubeInfoMainDiv.style.transform = translateProperty + scaleInProperty;
      youtubeInfoMainDiv.style.visibility = visible;
      youtubeInfoMainDiv.style.opacity = one;
      await wait(loading);

      discordImgLinkDiv.style.transition = transitionScrollProperty;
      discordImgLinkDiv.style.transform = translateProperty + scaleInProperty;
      discordImgLinkDiv.style.visibility = visible;
      discordImgLinkDiv.style.opacity = one;
      await wait(loading);

      discordHOnePDiv.style.transition = transitionScrollProperty;
      discordHOnePDiv.style.transform = translateProperty + scaleInProperty;
      discordHOnePDiv.style.visibility = visible;
      discordHOnePDiv.style.opacity = one;
      await wait(loading);

      twitterImgLinkDiv.style.transition = transitionScrollProperty;
      twitterImgLinkDiv.style.transform = translateProperty + scaleInProperty;
      twitterImgLinkDiv.style.visibility = visible;
      twitterImgLinkDiv.style.opacity = one;
      await wait(loading);

      twitterHOnePDiv.style.transition = transitionScrollProperty;
      twitterHOnePDiv.style.transform = translateProperty + scaleInProperty;
      twitterHOnePDiv.style.visibility = visible;
      twitterHOnePDiv.style.opacity = one;
      await wait(loading);

      instagramImgLinkDiv.style.transition = transitionScrollProperty;
      instagramImgLinkDiv.style.transform = translateProperty + scaleInProperty;
      instagramImgLinkDiv.style.visibility = visible;
      instagramImgLinkDiv.style.opacity = one;
      await wait(loading);

      instagramHOnePDiv.style.transition = transitionScrollProperty;
      instagramHOnePDiv.style.transform = translateProperty + scaleInProperty;
      instagramHOnePDiv.style.visibility = visible;
      instagramHOnePDiv.style.opacity = one;
      await wait(loading);

      spotifyImgLinkDiv.style.transition = transitionScrollProperty;
      spotifyImgLinkDiv.style.transform = translateProperty + scaleInProperty;
      spotifyImgLinkDiv.style.visibility = visible;
      spotifyImgLinkDiv.style.opacity = one;
      await wait(loading);

      spotifyHOnePDiv.style.transition = transitionScrollProperty;
      spotifyHOnePDiv.style.transform = translateProperty + scaleInProperty;
      spotifyHOnePDiv.style.visibility = visible;
      spotifyHOnePDiv.style.opacity = one;
      await wait(loading);

      restSocialMediaDiv.style.transition = transitionScrollProperty;
      restSocialMediaDiv.style.transform = translateProperty + "scale(0.89)";
      restSocialMediaDiv.style.visibility = visible;
      restSocialMediaDiv.style.opacity = one;

      setTimeout(() => {
        const transitionName = "transition";
        const transformName = "transform";
        const visibilitName = "visibility";
        const opacityName = "opacity";

        [
          youtubePlayerDiv,
          youtubeInfoMainDiv,
          discordImgLinkDiv,
          discordHOnePDiv,
          twitterImgLinkDiv,
          twitterHOnePDiv,
          instagramImgLinkDiv,
          instagramHOnePDiv,
          spotifyImgLinkDiv,
          spotifyHOnePDiv,
          restSocialMediaDiv,
        ]
          .filter(Boolean)
          .forEach((element) => {
            if (!element) return;

            element.style.removeProperty(transitionName);
            element.style.removeProperty(transformName);
            element.style.removeProperty(visibilitName);
            element.style.removeProperty(opacityName);
          });
      }, loading);
    };

    window.addEventListener("scroll", () => {
      if (!hasScrollAnimationStarted && window.scrollY > 100) {
        startScrollAnimationSequenceToken();
      }
    });

    initializePageAnimation();
    setupScrollAnimationInitialState();

    (function mediaQueriesToken() {
      const width = "width";
      const height = "height";
      const mqWidth = 1080;
      const mqHeight = 1920;

      const mediaQueryList = [
        "only screen and (min-width: 320px) and (max-width: 359px) and (orientation: portrait)",
        "only screen and (min-width: 360px) and (max-width: 389px) and (orientation: portrait)",
        "only screen and (min-width: 390px) and (max-width: 427px) and (orientation: portrait)",
        "only screen and (min-width: 428px) and (max-width: 599px) and (orientation: portrait)",
        "only screen and (min-width: 600px) and (max-width: 768px) and (orientation: portrait)",
        "only screen and (min-width: 480px) and (max-width: 599px) and (orientation: landscape)",
        "only screen and (min-width: 600px) and (max-width: 767px) and (orientation: landscape)",
        "only screen and (min-width: 768px) and (max-width: 959px) and (orientation: landscape)",
        "only screen and (min-width: 960px) and (max-width: 1023px) and (orientation: landscape)",
      ].map((query) => window.matchMedia(query));

      const twitchEmbedPlayerDiv = document.getElementById(
        "twitchEmbedPlayerContainerId",
      );

      const applySize = () => {
        const twitchEmbedPlayer =
          twitchEmbedPlayerDiv.querySelector(".twitch-embed-player") ||
          twitchEmbedPlayerDiv.querySelector("iframe");

        if (twitchEmbedPlayer) {
          twitchEmbedPlayer.setAttribute(width, mqWidth.toString());
          twitchEmbedPlayer.setAttribute(height, mqHeight.toString());
        }
      };

      const setupMediaQueryListenersToken = () => {
        mediaQueryList.forEach((mq) => {
          if (mq.matches) {
            applySize();
          }

          mq.addEventListener("change", (e) => {
            if (e.matches) {
              applySize();
            }
          });
        });
      };

      applySize();

      const mutationObserverToken = new MutationObserver(() => {
        const twitchEmbedPlayer =
          twitchEmbedPlayerDiv.querySelector(".twitch-embed-player") ||
          twitchEmbedPlayerDiv.querySelector("iframe");

        if (twitchEmbedPlayer) {
          console.log("Twitch iframe gefunden und Media Queries aktiviert!");
          applySize();
          mutationObserverToken.disconnect();
        }
      });

      mutationObserverToken.observe(twitchEmbedPlayerDiv, {
        childList: true,
        subtree: true,
        attributes: false,
      });

      setupMediaQueryListenersToken();

      setTimeout(() => {
        applySize();
      }, 2000);
    })();
  } catch (error) {
    console.error("Haupt-Fehler:", error);
  }
});
