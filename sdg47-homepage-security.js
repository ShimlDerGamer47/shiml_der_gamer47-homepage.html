document.addEventListener("DOMContentLoaded", () => {
  try {
    const html = document.documentElement;
    const body = document.body;

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

    (function bodyToken() {
      body.addEventListener(select, (e) => e.preventDefault());

      if (robotoBold) {
        Object.assign(body.style, {
          fontFamily: robotoBold,
          WebkitUserSelect: none,
          userSelect: none,
          cursor: def,
        });
      }
    })();

    const diamond = "#";
    const get = (id) =>
      document.getElementById(id) || document.querySelector(diamond + id);

    const backgroundImgDiv = get("backgroundImgContainerId");
    const backgroundImg = get("backgroundImgId");

    (function bgSecurityToken() {
      const elementArray = [backgroundImgDiv, backgroundImg];
      const eventArray = [copy, dragstart, keydown, select];

      elementArray.forEach((element) => {
        if (!element) return;

        eventArray.forEach((event) => {
          if (!event) return;
          element.addEventListener(event, (e) => e.preventDefault());
        });
      });

      elementArray.filter(Boolean).forEach((element) => {
        if (!element) return;

        if (robotoBold) {
          Object.assign(element.style, {
            fontFamily: robotoBold,
            WebkitUserSelect: none,
            userSelect: none,
            cursor: def,
            pointerEvents: none,
          });
        }
      });
    })();

    const homepageWelcomeTitleDiv = get("homepageWelcomeTitleContainerId");
    const homepageWelcomeTitleHOne = get("homepageWelcomeTitleHOneId");
    const homepageWelcomeNameTitleHTwo = get("homepageWelcomeNameTitleHTwoId");

    (function homepageTitleSecurityToken() {
      const elementArray = [
        homepageWelcomeTitleDiv,
        homepageWelcomeTitleHOne,
        homepageWelcomeNameTitleHTwo,
      ];
      const eventArray = [copy, dragstart, keydown, select];

      elementArray.forEach((element) => {
        if (!element) return;

        eventArray.forEach((event) => {
          if (!event) return;
          element.addEventListener(event, (e) => e.preventDefault());
        });
      });

      elementArray.filter(Boolean).forEach((element) => {
        if (!element) return;

        if (robotoBold) {
          Object.assign(element.style, {
            fontFamily: robotoBold,
            WebkitUserSelect: none,
            userSelect: none,
            cursor: def,
            pointerEvents: none,
          });
        }
      });
    })();

    const twitchEmbedPlayerDiv = get("twitchEmbedPlayerContainerId");
    const youtubePlayerDiv = get("youtubePlayerContainerId");

    (function iframeDivSecurityToken() {
      const elementArray = [twitchEmbedPlayerDiv, youtubePlayerDiv];
      const eventArray = [copy, dragstart, keydown, select];

      elementArray.forEach((element) => {
        if (!element) return;

        eventArray.forEach((event) => {
          if (!event) return;
          element.addEventListener(event, (e) => e.preventDefault());
        });
      });

      elementArray.filter(Boolean).forEach((element) => {
        if (!element) return;

        if (robotoBold) {
          Object.assign(element.style, {
            fontFamily: robotoBold,
            WebkitUserSelect: none,
            userSelect: none,
            cursor: def,
          });
        }
      });
    })();

    const youtubeInfoMainDiv = get("youtubeInfoMainContainerId");
    const youtubeTitleImgLinkDiv = get("youtubeTitleImgLinkContainerId");
    const youtubeLinkA = get("youtubeLinkAId");
    const youtubeLinkTitleHOne = get("youtubeLinkTitleHOneId");
    const youtubeLinkImg = get("youtubeLinkImgId");
    const youtubeInfoParagraphsDiv = get("youtubeInfoParagraphsContainerId");
    const youtubeInfoParagraphs = get("youtubeInfoParagraphsId");

    (function youtubeInfoSecurityToken() {
      const elementArray = [
        youtubeInfoMainDiv,
        youtubeTitleImgLinkDiv,
        youtubeLinkA,
        youtubeLinkTitleHOne,
        youtubeLinkImg,
        youtubeInfoParagraphsDiv,
        youtubeInfoParagraphs,
      ];

      elementArray.forEach((element) => {
        if (!element) return;
        element.addEventListener(select, (e) => e.preventDefault());
      });

      elementArray.filter(Boolean).forEach((element) => {
        if (!element) return;

        if (robotoBold) {
          Object.assign(element.style, {
            fontFamily: robotoBold,
            WebkitUserSelect: none,
            userSelect: none,
          });
        }
      });

      [copy, dragstart, keydown].forEach((event) => {
        if (!event) return;
        youtubeLinkTitleHOne.addEventListener(event, (e) => e.preventDefault());
        youtubeLinkImg.addEventListener(event, (e) => e.preventDefault());
      });

      [youtubeLinkTitleHOne, youtubeLinkImg]
        .filter(Boolean)
        .forEach((element) => {
          if (!element) return;

          Object.assign(element.style, {
            cursor: def,
            pointerEvents: none,
          });
        });

      [copy, dragstart, keydown].forEach((event) => {
        if (!event) return;
        youtubeLinkImg.addEventListener(event, (e) => e.preventDefault());
      });

      [youtubeInfoParagraphsDiv, youtubeInfoParagraphs].forEach((element) => {
        if (!element) return;

        [copy, dragstart, keydown].forEach((event) => {
          if (!event) return;
          element.addEventListener(event, (e) => e.preventDefault());
        });
      });

      [youtubeInfoParagraphsDiv, youtubeInfoParagraphs]
        .filter(Boolean)
        .forEach((element) => {
          if (!element) return;

          Object.assign(element.style, {
            cursor: def,
            pointerEvents: none,
          });
        });
    })();

    const discordImgLinkDiv = get("discordImgLinkContainerId");
    const discordLinkA = get("discordLinkAId");
    const discordImg = get("discordImgId");
    const discordHOnePDiv = get("discordHOnePContainerId");
    const discordTitleHOneDiv = get("discordTitleHOneContainerId");
    const discordTitleHOne = get("discordTitleHOneId");
    const discordTextParagraphsDiv = get("discordTextParagraphsContainerId");
    const discordTextParagraphs = get("discordTextParagraphsId");

    (function discordSecurityToken() {
      const elementArray = [
        discordImgLinkDiv,
        discordLinkA,
        discordImg,
        discordHOnePDiv,
        discordTitleHOneDiv,
        discordTitleHOne,
        discordTextParagraphsDiv,
        discordTextParagraphs,
      ];

      elementArray.forEach((element) => {
        if (!element) return;
        element.addEventListener(select, (e) => e.preventDefault());
      });

      elementArray.filter(Boolean).forEach((element) => {
        if (!element) return;

        if (robotoBold) {
          Object.assign(element.style, {
            fontFamily: robotoBold,
            WebkitUserSelect: none,
            userSelect: none,
          });
        }
      });

      [copy, dragstart, keydown].forEach((event) => {
        if (!event) return;
        discordImg.addEventListener(event, (e) => e.preventDefault());
      });

      Object.assign(discordImg.style, {
        cursor: def,
        pointerEvents: none,
      });

      [
        discordHOnePDiv,
        discordTitleHOneDiv,
        discordTitleHOne,
        discordTextParagraphsDiv,
        discordTextParagraphs,
      ].forEach((element) => {
        if (!element) return;

        [copy, dragstart, keydown].forEach((event) => {
          if (!event) return;
          element.addEventListener(event, (e) => e.preventDefault());
        });
      });

      [
        discordHOnePDiv,
        discordTitleHOneDiv,
        discordTitleHOne,
        discordTextParagraphsDiv,
        discordTextParagraphs,
      ]
        .filter(Boolean)
        .forEach((element) => {
          if (!element) return;

          Object.assign(element.style, {
            cursor: def,
            pointerEvents: none,
          });
        });
    })();

    const twitterImgLinkDiv = get("twitterImgLinkContainerId");
    const twitterLinkA = get("twitterLinkAId");
    const twitterImg = get("twitterImgId");
    const twitterHOnePDiv = get("twitterHOnePContainerId");
    const twitterHOneDiv = get("twitterHOneContainerId");
    const twitterHOne = get("twitterHOneId");
    const twitterParagraphsDiv = get("twitterParagraphsContainerId");
    const twitterParagraphs = get("twitterParagraphsId");

    (function twitterSecurityToken() {
      const elementArray = [
        twitterImgLinkDiv,
        twitterLinkA,
        twitterImg,
        twitterHOnePDiv,
        twitterHOneDiv,
        twitterHOne,
        twitterParagraphsDiv,
        twitterParagraphs,
      ];

      twitterLinkA.addEventListener("dblclick", (e) => e.preventDefault());

      elementArray.forEach((element) => {
        if (!element) return;
        element.addEventListener(select, (e) => e.preventDefault());
      });

      elementArray.filter(Boolean).forEach((element) => {
        if (!element) return;

        if (robotoBold) {
          Object.assign(element.style, {
            fontFamily: robotoBold,
            WebkitUserSelect: none,
            userSelect: none,
          });
        }
      });

      [
        twitterHOnePDiv,
        twitterHOneDiv,
        twitterHOne,
        twitterParagraphsDiv,
        twitterParagraphs,
      ].forEach((element) => {
        if (!element) return;

        [copy, dragstart, keydown].forEach((event) => {
          if (!event) return;
          element.addEventListener(event, (e) => e.preventDefault());
        });
      });

      [
        twitterHOnePDiv,
        twitterHOneDiv,
        twitterHOne,
        twitterParagraphsDiv,
        twitterParagraphs,
      ]
        .filter(Boolean)
        .forEach((element) => {
          if (!element) return;

          Object.assign(element.style, {
            cursor: def,
            pointerEvents: none,
          });
        });
    })();

    const instagramImgLinkDiv = get("instagramImgLinkContainerId");
    const instagramLinkA = get("instagramLinkAId");
    const instagramImg = get("instagramImgId");
    const instagramHOnePDiv = get("instagramHOnePContainerId");
    const instagramHOneDiv = get("instagramHOneContainerId");
    const instagramHOne = get("instagramHOneId");
    const instagramParagraphsDiv = get("instagramParagraphsContainerId");
    const instagramParagraphs = get("instagramParagraphsId");

    (function instagramSecurityToken() {
      const elementArray = [
        instagramImgLinkDiv,
        instagramLinkA,
        instagramImg,
        instagramHOnePDiv,
        instagramHOneDiv,
        instagramHOne,
        instagramParagraphsDiv,
        instagramParagraphs,
      ];

      elementArray.forEach((element) => {
        if (!element) return;
        element.addEventListener(select, (e) => e.preventDefault());
      });

      elementArray.filter(Boolean).forEach((element) => {
        if (!element) return;

        if (robotoBold) {
          Object.assign(element.style, {
            fontFamily: robotoBold,
            WebkitUserSelect: none,
            userSelect: none,
          });
        }
      });

      [copy, dragstart, keydown].forEach((event) => {
        if (!event) return;
        instagramImg.addEventListener(event, (e) => e.preventDefault());
      });

      [
        instagramHOnePDiv,
        instagramHOneDiv,
        instagramHOne,
        instagramParagraphsDiv,
        instagramParagraphs,
      ].forEach((element) => {
        if (!element) return;

        [copy, dragstart, keydown].forEach((event) => {
          if (!event) return;
          element.addEventListener(event, (e) => e.preventDefault());
        });
      });

      [
        instagramHOnePDiv,
        instagramHOneDiv,
        instagramHOne,
        instagramParagraphsDiv,
        instagramParagraphs,
      ]
        .filter(Boolean)
        .forEach((element) => {
          if (!element) return;

          Object.assign(element.style, {
            cursor: def,
            pointerEvents: none,
          });
        });
    })();

    const spotifyImgLinkDiv = get("spotifyImgLinkContainerId");
    const spotifyLinkA = get("spotifyLinkAId");
    const spotifyImg = get("spotifyImgId");
    const spotifyHOnePDiv = get("spotifyHOnePContainerId");
    const spotifyHOneDiv = get("spotifyHOneContainerId");
    const spotifyHOne = get("spotifyHOneId");
    const spotifyParagraphsDiv = get("spotifyParagraphsContainerId");
    const spotifyParagraphs = get("spotifyParagraphsId");

    (function spotifySecurityToken() {
      const elementArray = [
        spotifyImgLinkDiv,
        spotifyLinkA,
        spotifyImg,
        spotifyHOnePDiv,
        spotifyHOneDiv,
        spotifyHOne,
        spotifyParagraphsDiv,
        spotifyParagraphs,
      ];

      elementArray.forEach((element) => {
        if (!element) return;
        element.addEventListener(select, (e) => e.preventDefault());
      });

      elementArray.filter(Boolean).forEach((element) => {
        if (!element) return;

        if (robotoBold) {
          Object.assign(element.style, {
            fontFamily: robotoBold,
            WebkitUserSelect: none,
            userSelect: none,
          });
        }
      });

      [
        spotifyHOnePDiv,
        spotifyHOneDiv,
        spotifyHOne,
        spotifyParagraphsDiv,
        spotifyParagraphs,
      ].forEach((element) => {
        if (!element) return;

        [copy, dragstart, keydown].forEach((event) => {
          if (!event) return;
          element.addEventListener(event, (e) => e.preventDefault());
        });
      });

      [
        spotifyHOnePDiv,
        spotifyHOneDiv,
        spotifyHOne,
        spotifyParagraphsDiv,
        spotifyParagraphs,
      ]
        .filter(Boolean)
        .forEach((element) => {
          if (!element) return;

          Object.assign(element.style, {
            cursor: def,
            pointerEvents: none,
          });
        });
    })();

    const restSocialMediaDiv = get("restSocialMediaContainerId");

    (function restSocialSecurityToken() {
      restSocialMediaDiv.addEventListener(select, (e) => e.preventDefault());

      if (robotoBold) {
        Object.assign(restSocialMediaDiv.style, {
          fontFamily: robotoBold,
          WebkitUserSelect: none,
          userSelect: none,
          cursor: def,
        });
      }
    })();

    const threadsLinkImgHOneDiv = get("threadsLinkImgHOneContainerId");
    const threadsLinkA = get("threadsLinkAId");
    const threadsImg = get("threadsImgId");
    const threadsHOne = get("threadsHOneId");

    (function threadsSecurityToken() {
      const elementArray = [
        threadsLinkImgHOneDiv,
        threadsLinkA,
        threadsImg,
        threadsHOne,
      ];

      elementArray.forEach((element) => {
        if (!element) return;
        element.addEventListener(select, (e) => e.preventDefault());
      });

      elementArray.filter(Boolean).forEach((element) => {
        if (!element) return;

        if (robotoBold) {
          Object.assign(element.style, {
            fontFamily: robotoBold,
            WebkitUserSelect: none,
            userSelect: none,
          });
        }
      });

      [copy, dragstart, keydown].forEach((event) => {
        if (!event) return;
        threadsHOne.addEventListener(event, (e) => e.preventDefault());
      });

      Object.assign(threadsHOne.style, {
        cursor: def,
        pointerEvents: none,
      });
    })();

    const redditAImgHOneDiv = get("redditAImgHOneContainerId");
    const redditLinkA = get("redditLinkAId");
    const redditImg = get("redditImgId");
    const redditHOne = get("redditHOneId");

    (function redditSecurityToken() {
      const elementArray = [
        redditAImgHOneDiv,
        redditLinkA,
        redditImg,
        redditHOne,
      ];

      elementArray.forEach((element) => {
        if (!element) return;
        element.addEventListener(select, (e) => e.preventDefault());
      });

      elementArray.filter(Boolean).forEach((element) => {
        if (!element) return;

        if (robotoBold) {
          Object.assign(element.style, {
            fontFamily: robotoBold,
            WebkitUserSelect: none,
            userSelect: none,
          });
        }
      });

      [copy, dragstart, keydown].forEach((event) => {
        if (!event) return;
        redditHOne.addEventListener(event, (e) => e.preventDefault());
      });

      Object.assign(redditHOne.style, {
        cursor: def,
        pointerEvents: none,
      });
    })();

    const fbLinkImgHOneDiv = get("fbLinkImgHOneContainerId");
    const fbLinkA = get("fbLinkAId");
    const fbImg = get("fbImgId");
    const fbHOne = get("fbHOneId");

    (function facebookSecurityToken() {
      const elementArray = [fbLinkImgHOneDiv, fbLinkA, fbImg, fbHOne];

      elementArray.forEach((element) => {
        if (!element) return;
        element.addEventListener(select, (e) => e.preventDefault());
      });

      elementArray.filter(Boolean).forEach((element) => {
        if (!element) return;

        if (robotoBold) {
          Object.assign(element.style, {
            fontFamily: robotoBold,
            WebkitUserSelect: none,
            userSelect: none,
          });
        }
      });

      [copy, dragstart, keydown].forEach((event) => {
        if (!event) return;
        fbHOne.addEventListener(event, (e) => e.preventDefault());
      });

      Object.assign(fbHOne.style, {
        cursor: def,
        pointerEvents: none,
      });
    })();
  } catch (error) {
    console.error(
      "Haupt-Fehler bei der Datei sgd47-homepage-security.js:",
      error,
    );
  }
});
