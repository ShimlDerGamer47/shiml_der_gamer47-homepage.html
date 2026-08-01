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

    const nodeText = (text) => document.createTextNode(text);
    const breakEl = (element) => document.createElement(element);

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
      const br = "br";

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

      youtubeLinkTitleHOne.innerHTML = "";
      youtubeLinkTitleHOne.appendChild(nodeText("Shiml_der_Gamer47"));
      youtubeLinkTitleHOne.appendChild(breakEl(br));
      youtubeLinkTitleHOne.appendChild(nodeText("Youtube Channel"));

      const youtubeImgWidth = 1920;
      const youtubeImgHeight = 1080;
      const youtubeImgFile =
        "IMG Ordner/Sozial Medias IMG Ordner/YouTube Banner 1.1.png";
      const youtubeImgAlt = "Shiml_der_Gamer47 Youtube Channel";
      const lazy = "lazy";

      youtubeLinkImg.width = youtubeImgWidth;
      youtubeLinkImg.height = youtubeImgHeight;
      youtubeLinkImg.src = youtubeImgFile;
      youtubeLinkImg.alt = youtubeImgAlt;
      youtubeLinkImg.loading = lazy;

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

      youtubeInfoParagraphs.innerHTML = "";
      youtubeInfoParagraphs.appendChild(
        nodeText("Schau dir mal meinen YouTube Channel an."),
      );
      youtubeInfoParagraphs.appendChild(breakEl(br));
      youtubeInfoParagraphs.appendChild(
        nodeText("Es könnte dir vielleicht gefallen."),
      );
      youtubeInfoParagraphs.appendChild(breakEl(br));
      youtubeInfoParagraphs.appendChild(
        nodeText("Falls es tut lass doch einen Kostenlosen YouTube Abo da."),
      );
      youtubeInfoParagraphs.appendChild(breakEl(br));
      youtubeInfoParagraphs.appendChild(
        nodeText("Vergess nicht die Glocke zu Aktivieren."),
      );
      youtubeInfoParagraphs.appendChild(breakEl(br));
      youtubeInfoParagraphs.appendChild(
        nodeText("Ebenso auch auf denn YouTube Video ein Like &"),
      );
      youtubeInfoParagraphs.appendChild(breakEl(br));
      youtubeInfoParagraphs.appendChild(nodeText("Kommentar da zu lassen!"));
      youtubeInfoParagraphs.appendChild(breakEl(br));
      youtubeInfoParagraphs.appendChild(
        nodeText("Verbesserungs Vorschlage sind,"),
      );
      youtubeInfoParagraphs.appendChild(breakEl(br));
      youtubeInfoParagraphs.appendChild(nodeText("auch gerne gesehen."));
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
      const br = "br";

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

      const discordImgWidth = 1920;
      const discordImgHeight = 1080;
      const discordImgFile =
        "IMG Ordner/Sozial Medias IMG Ordner/Discord Banner 1.1.png";
      const discordImgAlt = "Shiml_der_Gamer47 Community Server";
      const lazy = "lazy";

      discordImg.width = discordImgWidth;
      discordImg.height = discordImgHeight;
      discordImg.src = discordImgFile;
      discordImg.alt = discordImgAlt;
      discordImg.loading = lazy;

      discordTitleHOne.innerHTML = "";
      discordTitleHOne.appendChild(nodeText("Shiml_der_Gamer47"));
      discordTitleHOne.appendChild(breakEl(br));
      discordTitleHOne.appendChild(nodeText("Community Server"));

      discordTextParagraphs.innerHTML = "";
      discordTextParagraphs.appendChild(
        nodeText("Auf meinem Discord Serve könnt ihr euch Connecten,"),
      );
      discordTextParagraphs.appendChild(breakEl(br));
      discordTextParagraphs.appendChild(
        nodeText("Leute kennenlernen, miteinander chatten,"),
      );
      discordTextParagraphs.appendChild(breakEl(br));
      discordTextParagraphs.appendChild(
        nodeText("Qwatschen über die Voice-Channels."),
      );
      discordTextParagraphs.appendChild(breakEl(br));
      discordTextParagraphs.appendChild(
        nodeText("Spieler suchen & zusammen finden."),
      );
      discordTextParagraphs.appendChild(breakEl(br));
      discordTextParagraphs.appendChild(
        nodeText("Gemeinsam eine schöne Zeit verbringen."),
      );
      discordTextParagraphs.appendChild(breakEl(br));
      discordTextParagraphs.appendChild(
        nodeText("Freundschaften entstehen lassen."),
      );
      discordTextParagraphs.appendChild(breakEl(br));
      discordTextParagraphs.appendChild(nodeText("Gemeinsam Games zocken."));
      discordTextParagraphs.appendChild(breakEl(br));
      discordTextParagraphs.appendChild(
        nodeText("Natürlich wird man auch auf dem Server"),
      );
      discordTextParagraphs.appendChild(breakEl(br));
      discordTextParagraphs.appendChild(
        nodeText("Benachrichtet wenn man auf Twitch Live ist!"),
      );
      discordTextParagraphs.appendChild(breakEl(br));
      discordTextParagraphs.appendChild(
        nodeText("Genau so wie wenn andere Twitch Streamer Kollegen"),
      );
      discordTextParagraphs.appendChild(breakEl(br));
      discordTextParagraphs.appendChild(nodeText("Benachrichtet wird!"));
      discordTextParagraphs.appendChild(breakEl(br));
      discordTextParagraphs.appendChild(
        nodeText("Ihr seit herzlichst eingeladen auf dem Server!"),
      );
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
      const br = "br";

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

      twitterHOne.innerHTML = "";
      twitterHOne.appendChild(nodeText("Shiml_der_Gamer47"));
      twitterHOne.appendChild(breakEl(br));
      twitterHOne.appendChild(nodeText("Twitter Channel"));

      twitterParagraphs.innerHTML = "";
      twitterParagraphs.appendChild(
        nodeText("Shiml_der_Gamer47 Twitter Channel,"),
      );
      twitterParagraphs.appendChild(breakEl(br));
      twitterParagraphs.appendChild(
        nodeText("da werden die neusten YouTube Videos"),
      );
      twitterParagraphs.appendChild(breakEl(br));
      twitterParagraphs.appendChild(
        nodeText("oder Twitch Live Stream ankündigungen gepostet."),
      );
      twitterParagraphs.appendChild(breakEl(br));
      twitterParagraphs.appendChild(nodeText("Genau so wie vieles andere."));
      twitterParagraphs.appendChild(breakEl(br));
      twitterParagraphs.appendChild(
        nodeText("Schaut einfach mal vorbei & lasst doch einen Follow da!"),
      );
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
      const br = "br";

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

      const instagramImgWidth = 1920;
      const instagramImgHeight = 1080;
      const instagramImgFile =
        "IMG Ordner/Sozial Medias IMG Ordner/Instagram Panel 1.0.png";
      const instagramImgAlt = "Shiml_der_Gamer47 Instagram Account";
      const lazy = "lazy";

      instagramImg.width = instagramImgWidth;
      instagramImg.height = instagramImgHeight;
      instagramImg.src = instagramImgFile;
      instagramImg.alt = instagramImgAlt;
      instagramImg.loading = lazy;

      instagramHOne.innerHTML = "";
      instagramHOne.appendChild(nodeText("Shiml_der_Gamer47"));
      instagramHOne.appendChild(breakEl(br));
      instagramHOne.appendChild(nodeText("Instagram Account"));

      instagramParagraphs.innerHTML = "";
      instagramParagraphs.appendChild(
        nodeText("Schaut mal bei Insta mal vorbei."),
      );
      instagramParagraphs.appendChild(breakEl(br));
      instagramParagraphs.appendChild(
        nodeText("Es gibt genug Content auf dem Account."),
      );
      instagramParagraphs.appendChild(breakEl(br));
      instagramParagraphs.appendChild(
        nodeText("Bilder & Videos, auch Twitch Live Benachrichtungen´s"),
      );
      instagramParagraphs.appendChild(breakEl(br));
      instagramParagraphs.appendChild(
        nodeText("Würde mich aber auch auf einem Follow freuen."),
      );
      instagramParagraphs.appendChild(breakEl(br));
      instagramParagraphs.appendChild(
        nodeText("Genau so auch bei denn Beitragen einen ein Like"),
      );
      instagramParagraphs.appendChild(breakEl(br));
      instagramParagraphs.appendChild(
        nodeText("& genau so einen Kommentar freuen."),
      );
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
      const br = "br";

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

      spotifyHOne.innerHTML = "";
      spotifyHOne.appendChild(nodeText("Shiml_der_Gamer47"));
      spotifyHOne.appendChild(breakEl(br));
      spotifyHOne.appendChild(nodeText("Spotify Channel"));

      spotifyParagraphs.innerHTML = "";
      spotifyParagraphs.appendChild(nodeText("Hier bei Spotify,"));
      spotifyParagraphs.appendChild(breakEl(br));
      spotifyParagraphs.appendChild(nodeText("habe ich Musik Playlisten"));
      spotifyParagraphs.appendChild(breakEl(br));
      spotifyParagraphs.appendChild(
        nodeText("in prinzip für jeden Geschmack."),
      );
      spotifyParagraphs.appendChild(breakEl(br));
      spotifyParagraphs.appendChild(
        nodeText("Schaut einfach mal vorbei Tested die Playlisten aus."),
      );
      spotifyParagraphs.appendChild(breakEl(br));
      spotifyParagraphs.appendChild(nodeText("Beesonders die"));
      spotifyParagraphs.appendChild(breakEl(br));
      spotifyParagraphs.appendChild(
        nodeText("Shiml_der_Gamer47 Stream Playlist Musik"),
      );
      spotifyParagraphs.appendChild(breakEl(br));
      spotifyParagraphs.appendChild(
        nodeText("die nutze Ich am häuftigsten von denn Playlisten."),
      );
      spotifyParagraphs.appendChild(breakEl(br));
      spotifyParagraphs.appendChild(
        nodeText("Lasst doch auch einen Follow da, bei dem Spotify Channel."),
      );
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
      const br = "br";

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

      threadsHOne.innerHTML = "";
      threadsHOne.appendChild(nodeText("Shiml_der_Gamer47"));
      threadsHOne.appendChild(breakEl(br));
      threadsHOne.appendChild(nodeText("Threads Channel"));
    })();

    const redditAImgHOneDiv = get("redditAImgHOneContainerId");
    const redditLinkA = get("redditLinkAId");
    const redditImg = get("redditImgId");
    const redditHOne = get("redditHOneId");

    (function redditSecurityToken() {
      const br = "br";

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

      redditHOne.innerHTML = "";
      redditHOne.appendChild(nodeText("Shiml_der_Gamer47"));
      redditHOne.appendChild(breakEl(br));
      redditHOne.appendChild(nodeText("Reddit Channel"));
    })();

    const fbLinkImgHOneDiv = get("fbLinkImgHOneContainerId");
    const fbLinkA = get("fbLinkAId");
    const fbImg = get("fbImgId");
    const fbHOne = get("fbHOneId");

    (function facebookSecurityToken() {
      const br = "br";

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

      fbHOne.innerHTML = "";
      fbHOne.appendChild(nodeText("Shiml_der_Gamer47"));
      fbHOne.appendChild(breakEl(br));
      fbHOne.appendChild(nodeText("Facebook Channel"));
    })();
  } catch (error) {
    console.error(
      "Haupt-Fehler bei der Datei sgd47-homepage-security.js:",
      error,
    );
  }
});
