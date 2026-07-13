let againCap = null;
let allMatchesAvailable = [];
const localSuggestionsCache = {};
const tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
let rndList = [
  "UU6DOFpA9UCTgNwJiVX1IOpQ",
  "PL-KQSIBx-Icaao3EaHRz0m2P39PwypbnH",
  "PL-KQSIBx-IcaSkA9AdvIwkVVLl6F52LP-",
  "PL-KQSIBx-IcauCgXsM-DWDzGFXgJmZiSS",
  "PL-KQSIBx-Icb3a7aA78VNtQs8f2YBpTY6",
  "PL-KQSIBx-Icb63tQzYzMvbrLXrAvF4Z2b",
  "PL-KQSIBx-IcbI8gQVdlA6IFckuJ1fnkgM",
  "PL-KQSIBx-IcY1MxHJ6O_CCK5Nche7UBVd",
  "PL-KQSIBx-IcYIitriWRZ2caFI8ST-0Oil",
  "PL-KQSIBx-IcYddyYBPVasGjqtLLSHqlUX",
  "PL-KQSIBx-IcYFwEWIQAbL8YPrDnBv7wTU",
  "PL-KQSIBx-IcZaVi2VJ5TYwAOC4VYfKPrE",
  "PL-KQSIBx-IcZlVBWBx9Vm7k7aT9fLZDbH",
  "PL-KQSIBx-IcZh-CSTeWs-iRF4XrvzQwDh",
  "PL-KQSIBx-IcZHEQcLV7u4dK0_e93q8XZg",
  "PL-KQSIBx-IcZJqfk_sAI3FRSK60chqPSq",
  "PL-KQSIBx-IcZFVRDV9sQ_7Y-Scmyh7YG2",
  "PL-KQSIBx-IcZyrPGYJGEndWryKDTzxkaU",
  "PL-KQSIBx-IcZUxla8KuKBn5JJh9L9RDwu",
  "PL-KQSIBx-IcZZ07SBW_YiHMmvlned1cwG",
  "PL-KQSIBx-IcYRqRWWwd8Rias6dNUZBl38/",
  "PL-KQSIBx-IcY8JaNqmNmJNKAJz4ZbGcP8",
  "PL-KQSIBx-IcaI_ZoL2kSlSC-6X7peGk1O",
  "PL-KQSIBx-IcaGy7AczqTrXZTPKES9_j8t",
  "PL-KQSIBx-IcasHxWFITRTioWRbiLIeNGL",
  "PL-KQSIBx-IcY3Pf1mwyS99LiCZlJApy3X",
  "PL-KQSIBx-IcYGHpZ35GGKvMgsObK9g3zp",
  "PL-KQSIBx-IcbUMq5vZwv09N8f0KZAG4xU",
  "PL-KQSIBx-IcZNXv-dsX6CZigwfmPx0Jph",
  "PL-KQSIBx-IcY0o83j7UBC_NxmCLU4Tp4U",
  "PL-KQSIBx-IcalePiVb9Ofn46yLUM9j14L",
  "PL-KQSIBx-IcZVLG2oKqyszC0DqV6DF0Jd",
  "PL-KQSIBx-IcZVZ0PsxV57076LUHOzExUf",
  "PL-KQSIBx-IcbVzRygc78dfuf7zLyiZ7Zc",
  "PL-KQSIBx-IcbMpZMFDy97Gus6iYU9lXPd",
  "PL-KQSIBx-IcbFvTx-1LZ0RF0GYGEdiih8",
  "PL-KQSIBx-IcZSGTxWHnZVNnKcgRmTiNdw",
  "PL-KQSIBx-Ica_WxCr0VQQjsVPkoqgLTiO",
  "PL-KQSIBx-IcYMclwewl_yLyo6HCO-3qw_",
  "PL-KQSIBx-IcYdjHXym4aokCMtuavhIGPd",
  "PL-KQSIBx-IcZqkVyD5BfkjU7dFd25m9XM",
  "PL-KQSIBx-IcajN74k7efJhMJ5MZR4XmDF",
  "PL-KQSIBx-IcZ5ozITE68wYr60PAQ9NkAC",
  "PL-KQSIBx-Ica2cva4cD6W1fqQHd77xtAg",
  "PL-KQSIBx-IcahaFq5-bhXKux6ke3cVqTK",
  "PL-KQSIBx-IcaPf-sl6AsyvQZs7I_UgpwN",
  "PL-KQSIBx-IcbfdK4r8BiqkyUMEXqvkjpB",
  "PL-KQSIBx-IcaVyt1GOo5qKKG7f9TkOCNM",
  "PL-KQSIBx-IcaSaJ2S2r_OXl4-GmAcuDzT",
  "PL-KQSIBx-IcalfjUhAMVjJPDe8IWifPW7",
  "PL-KQSIBx-IcYSN63unAUvBEueZ0HwBiLI",
  "PL-KQSIBx-IcZtON9I0EuoZJWLHnAm5Od1",
  "PL-KQSIBx-IcYVqw3sLpta1rxcmZ9TleSp",
  "PL-KQSIBx-IcYfNnWuEq32xFOvWjrl6ujy",
  "PL-KQSIBx-IcZIctHbC4zQI6TvDo9tiMcV",
  "PL-KQSIBx-IcYIt9-kNTR616vCKiLJJ_nf",
  "PL-KQSIBx-IcY0hOO0LTim8801-ljcZodK",
  "PL-KQSIBx-IcaPIUwuNO5Lk4U1RciAxRYw",
  "PL-KQSIBx-Ica08MHDdMEiJRoW72MM5qLn",
  "PL-KQSIBx-IcYqx7A9Ltvvsl1g0P6N7f3V",
  "PL-KQSIBx-IcbwA47FUEmaiaj2Jjme9JqX",
  "PL-KQSIBx-IcYSTVe3Aj6hwSaAeMXBFDHB",
  "PL-KQSIBx-Ica5VeAV7v-xWt1WQAbo-Sgx",
  "PL-KQSIBx-IcZqqp_P0zS441QWtpWeentz",
  "PL-KQSIBx-IcaiOLzLSKmRbskNT3bElv7X",
  "PL-KQSIBx-IcYbQj3rX2pZZhTNgKlYJhNf",
  "PL-KQSIBx-IcZeW3kWwKBJ8NtGUbI5n63-",
  "PL-KQSIBx-IcY6SM2mDPe5xk_C6mhsZP7I",
  "PL-KQSIBx-IcYTWkEhQLdthy-_9T2oFMw2",
  "PL-KQSIBx-IcYkZ4JW9nP_G0ZfdRClFaeu",
  "PL-KQSIBx-IcbP0N0mnVyUOtZ2cGqG_XIr",
  "PL-KQSIBx-IcbRD0U2choAMUDjNNnMkEc-",
  "PL-KQSIBx-IcZUkdnsCpgVJejk2qB17gY_",
  "PL-KQSIBx-IcYIHFSvFMDByWOyO95Wj0uE",
  "PL-KQSIBx-IcYj-w-zZcHqoCdr8s_7MZAB",
  "PL-KQSIBx-IcawVL5fjvxr-azalLGt5n3i",
  "PL-KQSIBx-IcagDrUm1dafyPXFI_AoqDI9",
  "PL-KQSIBx-IcajR9-JVyy77jX1AodF9Bby",
  "PL-KQSIBx-IcYSNSXa0jXDEFamItASleH1",
  "PL-KQSIBx-Icb7PUexeE-OUqqWGP1MiaGX",
  "PL-KQSIBx-IcYkxB7f4n9fcEtHmt7u2YCF",
  "PL-KQSIBx-IcZCkELb1p7WtOhYW1AjEQxJ",
  "PL-KQSIBx-IcZ5SQtZm-LgOWq591FW65Ls",
  "PL-KQSIBx-IcagEjNQoZnkVnwjhmO2kMmC",
  "PL-KQSIBx-IcYY7eaOMIjN0KKBsGcPApre",
  "PL-KQSIBx-IcYwkP020I7rYDkUDexfMc9d",
  "PL-KQSIBx-IcaPRS9Vzls74npCKPPStV0j",
  "PL-KQSIBx-IcYcx5gp9f8jCk3ZD5vKwJ_z",
  "PL-KQSIBx-IcYurTzT2oKgn_GStUUBRkee",
  "PL-KQSIBx-Icb6vpkKr0AYw3AkzhkaYqCM",
  "PL-KQSIBx-IcYpk1xaFEUvpHrnMiYfE7PS",
  "PL-KQSIBx-IcYvmdvo1xy6qZW6C7R1ajuA",
  "PL-KQSIBx-IcaeWFg-MFIfMunM7Y7-YcXg",
  "PL-KQSIBx-IcYiqrzT3fPt-bZX7CBgGC6v",
  "PL-KQSIBx-IcZZP4oyI3OYlqT-6k68wkMU",
  "PL-KQSIBx-IcayXiA8_PVYDqFqKEtld7l3",
  "PL-KQSIBx-IcZUznynUf41fHFYDxaUruTp",
  "PL-KQSIBx-IcaukxRP8rSsKIpn96qhZ5gY",
  "PL-KQSIBx-IcaLSbAe8jj6JwTgh4hIpgEw",
  "PL-KQSIBx-IcbLL5UgjT15dXRbwwLC4oJO",
  "PL-KQSIBx-Icbo05iXhgfCXI6QjzbfLBZA",
  "PL-KQSIBx-IcYlxZgh6URnU36fOTYceyCG",
  "PL-KQSIBx-IcYWuRrSecRDb7tjkFnpWRIv",
  "PL-KQSIBx-Ical1WzYffTNgQFqyrr4pi20",
  "PL-KQSIBx-IcaG-2QiyUszWzGEsFi6uTpK",
  "PL-KQSIBx-IcbvBiTi_i_NM0_QSoNwuzSu",
  "PL-KQSIBx-IcZOAMtskJO3ImPY3bPbBGa0",
  "PL-KQSIBx-IcbvM4PpklFKEtuU-l8wgSjg",
  "PL-KQSIBx-IcZGHvlTQEQDLym231vTmJr8",
];
localSuggestionsCache["allMatches"] = rndList;
console.log("all matches length greater than intents: ");
console.log(
  allMatchesAvailable.length < localSuggestionsCache["allMatches"].length,
);
while (
  allMatchesAvailable.length !== localSuggestionsCache["allMatches"].length
) {
  allMatchesAvailable = localSuggestionsCache["allMatches"].sort((a, b) => {
    let i = Math.random();
    let tSorted = a;
    // console.log(againCap + ": tSorted = " + tSorted);
    let zSorted = b;
    // console.log(againCap + ": zSorted = " + zSorted);
    if (i < 0.3) {
      let matchA = zSorted.toLowerCase().localeCompare(tSorted.toLowerCase());
      if (matchA > -1) {
        // console.log(againCap + ": matchA = " + matchA);
        return zSorted;
      }
    } else {
      if (i > 0.3 && i < 0.5) {
        let matchB = tSorted.toLowerCase().localeCompare(zSorted.toLowerCase());
        if (matchB === -1) {
          // console.log(againCap + ": matchB = " + matchB);
          return tSorted;
        }
      } else {
        if (i > 0.5 && i < 0.8) {
          // console.log(againCap + ": matchC = " + zSorted);
          return zSorted;
        } else {
          if (i > 0.8) {
            // console.log(againCap + ": matchD = " + tSorted);
            return tSorted;
          }
        }
      }
    }
  });
}
function myPlay() {
  let list = null;
  list =
    allMatchesAvailable[
      Math.floor(Math.random() * Math.floor(allMatchesAvailable.length))
    ];
  return list;
}
if (!againCap) {
  localStorage.setItem("ytSearch", myPlay());
  againCap = localStorage.getItem("ytSearch");
}
let ctr = 0;
let iframePlayer;
function onYouTubeIframeAPIReady() {
  iframePlayer = new YT.Player("iframePlayer", {
    height: "505",
    width: "585",
    //  videoId: 'OTeQee-gxa4',
    playerVars: {
      autoplay: 1,
      loop: 1,
      controls: 0,
      showinfo: 0,
      rel: 0,
      autohide: 1,
      playsinline: 1,
      mute: 0,
      modestbranding: 1,
      vq: "hd1080",
      iv_load_policy: 3,
      cc_load_policy: 1,
      listType: "playlist",
      list: againCap,
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
      onError: onPlayerError,
    },
  });
  function onPlayerReady(event) {
    playVideo();
  }
  // $(".user-icon").click(function (event) {
  //   let confirmation = window.confirm(
  //     "Opening a NEW youtube playList. Click OK to continue. Or Click CANCEL",
  //   );
  //   let ifPlayerDisplay = document.getElementById("iframePlayer");
  //   if (confirmation) {
  //     if (ifPlayerDisplay.style.display === "none") {
  //       ifPlayerDisplay.style.display = "block";
  //       playVideo();
  //     } else {
  //       loadPlaylist();
  //       setShuffle();
  //       nextVideo();
  //       playVideo();
  //     }
  //   } else {
  //     // stopVideo();
  //     console.log(ifPlayerDisplay);
  //     ifPlayerDisplay.style.display = "none";
  //   }
  // });

  // 5. The API calls this function when the player's state changes.
  //    The function indicates that when playing a video (state=1),
  //    the player should play for six seconds and then stop.
  let done = false;
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
      changeBorderColor(event.data);
      setLoop();
    } else if (event.data == YT.PlayerState.UNSTARTED) {
      changeBorderColor(event.data);
      playVideo();
    } else if (event.data == YT.PlayerState.ENDED) {
      changeBorderColor(event.data);
      loadPlaylist();
      setShuffle();
      nextVideo();
      playVideo();
    } else if (event.data == YT.PlayerState.PAUSED) {
      changeBorderColor(event.data);
    } else if (event.data == YT.PlayerState.BUFFERING) {
      changeBorderColor(event.data);
      setShuffle();
    } else if (event.data == YT.PlayerState.VIDEO_CUED) {
      changeBorderColor(event.data);
    }
    done = true;
  }

  function changeBorderColor(playerStatus) {
    let color;

    if (playerStatus == -1) {
      color = "#37474F";
    } // unstarted = gray
    else if (playerStatus == 0) {
      color = "#FFFF00";
    } // ended = yellow
    else if (playerStatus == 1) {
      color = "#33691E";
    } // playing = green
    else if (playerStatus == 2) {
      color = "#DD2C00";
    } // paused = red
    else if (playerStatus == 3) {
      color = "#AA00FF";
    } // buffering = purple
    else if (playerStatus == 5) {
      color = "#FF6DOO";
    } // video cued = orange

    if (color) {
      document.getElementById("iframePlayer").style.borderColor = color;
    }
  }

  function onPlayerError() {
    if (iframePlayer && iframePlayer.destroy) {
      iframePlayer.destroy;
      // onYouTubeIframeAPIReady();
    }
  }
  function stopVideo() {
    if (iframePlayer && iframePlayer.stopVideo) {
      iframePlayer.stopVideo();
    }
  }

  function getVideoUrl() {
    if (iframePlayer && iframePlayer.getVideoUrl) {
      iframePlayer.getVideoUrl();
    }
  }

  function setLoop() {
    if (iframePlayer && iframePlayer.setLoop) {
      iframePlayer.setLoop(true);
    }
  }

  function setShuffle() {
    if (iframePlayer && iframePlayer.setShuffle) {
      iframePlayer.setShuffle(true);
    }
  }

  function playVideo() {
    if (iframePlayer && iframePlayer.playVideo) {
      iframePlayer.playVideo();
    }
  }
  function nextVideo() {
    if (iframePlayer && iframePlayer.nextVideo) {
      iframePlayer.nextVideo();
    }
  }
  function muteVideo() {
    if (iframePlayer && iframePlayer.mute) {
      iframePlayer.mute();
    }
  }
  function unmuteVideo() {
    if (iframePlayer && iframePlayer.unMute) {
      iframePlayer.unMute();
    }
  }
  function setVolume(vol) {
    if (iframePlayer && iframePlayer.setVolume) {
      iframePlayer.setVolume(vol);
    }
  }
  function pauseVideo() {
    if (iframePlayer && iframePlayer.pauseVideo) {
      iframePlayer.pauseVideo();
    }
  }
  function loadPlaylist() {
    if (iframePlayer && iframePlayer.loadPlaylist) {
      iframePlayer.loadPlaylist({
        listType: "playlist",
        list: allMatchesAvailable[
          Math.floor(Math.random() * Math.floor(allMatchesAvailable.length))
        ],
        index: 0,
        startSeconds: 0,
      });
    }
  }
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbzhrxdXzM08AAwA5ualRXdnDtV6C_xQ7bcq4v6H0HNdBqPr2C8A1URyWN0FLLccQuoA/exec";

// var i = 0;
let hError = document.getElementById("data-display");
let elem = document.getElementById("myBar");
let i = 0;

async function fetchData() {
  let confirmation = window.confirm("Request data?");

  if (confirmation) {
    try {
      const response = await fetch(scriptURL + "?action=getData");
      // if (i == 0) {
      //   i = 1;
      //   var elem = document.getElementById("myBar");
      //   var width = 1;
      //   var id = setInterval(frame, 10);
      //   function frame() {
      //     if (width >= 100) {
      //       clearInterval(id);
      //       i = 0;
      //     } else {
      //       width++;
      //       elem.style.width = width + "%";
      //     }
      //   }
      // }
      if (!response.ok) {
        const errorText = await response.text();
        const errorTextDiv = document.getElementById("artiicleIndexError");
        errorTextDiv.innerHTML = "";
        const div = document.createElement("div");
        div.textContent = suggestion;
        div.classList.add("card-panel", "receipt", "btn-large");
        div.addEventListener("click", () => {
          response = fetch(scriptURL + "?action=getData");
        });
        errorTextDiv.appendChild(btn);
        try {
          errorTextDiv.innerHTML = "";
        } catch {
          throw new Error(
            `HTTP error! status: ${response.status}, ${errorText}`,
          );
        }
      }

      let responseData;
      const contentType = response.headers.get("content-type");

      if (contentType && contentType.includes("application/json")) {
        responseData = await response.json();
        console.log(responseData);
      } else if (contentType && contentType.includes("text/plain")) {
        responseData = await response.text();
        console.log(responseData);
      } else {
        responseData = await response.text();
        console.log(responseData);
      }
      if (responseData?.pL?.type === "html") {
        document.open();
        document.write(responseData?.message?.info); // Wrap in <pre> for formatting
        document.close();
      } else if (
        responseData?.pL?.type === "url" ||
        responseData?.pL?.type === "text"
      ) {
        document.location.href = scriptURL;
      } else if (responseData?.message?.content) {
        document.location.href = scriptURL;
      } else if (responseData?.message?.link) {
        document.location.href = scriptURL;
      } else {
        document.getElementById("data-display").textContent = JSON.stringify(
          responseData,
          null,
          2,
        );
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      document.getElementById("data-display").textContent =
        "Error fetching data: " + error.message;
    }
  } else {
    hError.textContent = "No data! Click here to load:";
    return;
  }
}

async function submitForm() {
  const form = document.getElementById("myForm");
  const formData = new FormData(form);
  const data = {};
  formData.forEach((value, key) => (data[key] = value));
  if (!data.name) {
    document.getElementById("form-message").textContent =
      "Error: Name is required";
    return;
  }
  if (!data.email) {
    document.getElementById("form-message").textContent =
      "Error: Email is required";
    return;
  }

  try {
    const response = await fetch(scriptURL + "?action=submitForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error ${response.status}: ${errorText}`);
    }
    const responseData = await response.json();
    document.getElementById("form-message").textContent = responseData.message;

    if (responseData.success) {
      form.reset();
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    document.getElementById("form-message").textContent =
      `Error: ${error.message}`;
  }
}

fetchData(); // Call on page load
document.addEventListener("DOMContentLoaded", function () {
  if (hError.textContent === String("No data! Click here to load:")) {
    hError.addEventListener("click", function () {
      reFetch();
      function reFetch() {
        hError.textContent = "Loading...";
        fetchData();
      }
    });
    // if (i == 0) {
    //   i = 1;
    //   let width = 1;
    //   let id = setInterval(frame, 10);
    //   function frame() {
    //     if (width >= 100) {
    //       clearInterval(id);
    //       i = 0;
    //     } else {
    //       width++;
    //       elem.style.width = width + "%";
    //     }
    //   }
    // }
    // console.log(event);
  }
});

// let cancelFetch = null;
// hError.addEventListener("mouseover", function () {
//   // cancelRequest();
//   this.textContent = "Error fetching data:";
//   cancelFetch = true;
// });

// function cancelRequest() {
//   hError.textContent = "Error fetching data:";
// }

function move() {
  if (i == 0) {
    i = 1;
    // elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

move(); // Call on page load

function serverSide(func, args) {
  return new Promise((resolve, reject) => {
    try {
      resolve(fetch(scriptURL + "?func=" + func + "&args=" + args));
    } catch (error) {
      reject(error);
    }
  });
}
/**
 * VideoStreamer class
 * Streams video from a given source URL using MediaSource API
 */

class VideoStreamer {
  constructor(videoElementId, startShareId, stopShareId) {
    this.videoElement = document.getElementById(videoElementId);
    this.startShare = document.getElementById(startShareId);
    this.stopShare = document.getElementById(stopShareId);
    try {
      if (!(this.videoElement instanceof HTMLVideoElement)) {
        throw new Error("Invalid video element ID");
      }
      this.mediaSource = new MediaSource();
      this.reader - null;
      this.recorder = null;
      this.sourceBuffer = null;
      this.blob = null;
      this.chunks = [];
    } catch (noVideo) {
      console.error("Error processing request:", noVideo);
    }
  }

  async startStream(
    sourceUrl,
    mimeType = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
  ) {
    if (!("MediaSource" in window)) {
      console.error("MediaSource API not supported in this browser.");
      return;
    }

    this.videoElement.src = URL.createObjectURL(this.mediaSource);
    this.videoElement.srcObject = this.mediaSource.addEventListener(
      "sourceopen",
      async () => {
        try {
          this.sourceBuffer = this.mediaSource.addSourceBuffer(mimeType);
          const options = { muteHttpExceptions: true };
          const response = await fetch(sourceUrl, options);

          if (!response.ok)
            throw new Error("HTTP error! Status: " + response.status);
          const videoData = await response.arrayBuffer();

          this.sourceBuffer.addEventListener("updated", () => {
            this.mediaSource.endOfStream();
            this.videoElement
              .play()
              .catch((err) => console.error("Playback error:", err));
          });

          this.sourceBuffer.appendBuffer(videoData);
        } catch (err) {
          console.error("Streaming error:", err);
        }
      },
    );
    this.startShare.addEventListener("click", async (event) => {
      try {
        /** Request permission to capture the screen */
        const stream = await navigator.mediaDevices.getDisplayMedia({
          video: { cursor: "always" },
          audio: true, // Optional: capture system audio
        });

        /** Display the captured screen in the video element */
        this.videoElement.srcObject = stream;

        // Start recording
        this.recorder = new MediaRecorder(stream);
        this.recorder.ondataavailable = (e) => this.chunks.push(e.data);
        this.recorder.onstop = saveRecording;
        this.recorder.start();

        event.target.disabled = true;
        this.stopShare.disabled = false;

        /** Handle when user stops sharing */
        this.stopShare.addEventListener("click", (event) => {
          this.recorder.stop();
          stream.getTracks().forEach((track) => track.stop());
          stream.getVideoTracks()[0].addEventListener("ended", () => {
            alert("Screen sharing stopped.");
            this.videoElement.srcObject = null;
          });
          this.startShare.disabled = false;
          event.target.disabled = true;
        });

        function saveRecording() {
          this.blob = new Blob(this.chunks, { type: "video/webm" });
          this.chunks = [];

          this.reader = new FileReader();
          this.reader.onloadend = () => {
            const base64Data = this.reader.result.split(",")[1];
            serverSide("postToDrive", ["screen_share.webm", base64Data]).data;
          };
          this.reader.readAsDataURL(blob);
        }
      } catch (err) {
        console.error("Error starting screen share:", err);
        alert("Screen share failed: " + err.message);
      }
    });
  }
}
const streamer = new VideoStreamer("videoPlayer", "startShare", "stopShare");
streamer.startStream();
