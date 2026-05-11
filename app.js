const tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
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
      list: "UU6DOFpA9UCTgNwJiVX1IOpQ",
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
      onError: onPlayerError,
    },
  });
  function onPlayerReady(event) {
    setShuffle();
    event.target.nextVideo();
  }

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
      event.target.playVideo();
    } else if (event.data == YT.PlayerState.ENDED) {
      changeBorderColor(event.data);
      setShuffle();
      event.target.playVideo();
      setShuffle();
      event.target.nextVideo();
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
    iframePlayer.destroy;
    onYouTubeIframeAPIReady();
  }
  function stopVideo() {
    iframePlayer.stopVideo();
  }

  function getVideoUrl() {
    iframePlayer.getVideoUrl();
  }

  function setLoop() {
    iframePlayer.setLoop(true);
  }

  function setShuffle() {
    iframePlayer.setShuffle(true);
  }

  function playVideo() {
    iframePlayer.playVideo();
  }
  function nextVideo() {
    iframePlayer.nextVideo();
  }

  function pauseVideo() {
    iframePlayer.pauseVideo();
  }
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbzhrxdXzM08AAwA5ualRXdnDtV6C_xQ7bcq4v6H0HNdBqPr2C8A1URyWN0FLLccQuoA/exec";

// var i = 0;

async function fetchData() {
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
      try {
        const errorTextDiv = document.getElementById("artiicleIndexError");
        errorTextDiv.innerHTML = "";
        const div = document.createElement("div");
        div.textContent = suggestion;
        div.classList.add("card-panel", "receipt", "btn-large");
        div.addEventListener("click", () => {
          response = fetch(scriptURL + "?action=getData");
          errorTextDiv.innerHTML = "";
        });
        errorTextDiv.appendChild(btn);
      } catch {
        throw new Error(`HTTP error! status: ${response.status}, ${errorText}`);
      }
    }

    let responseData;
    const contentType = response.headers.get("content-type");

    if (contentType && contentType.includes("application/json")) {
      responseData = await response.json();
    } else if (contentType && contentType.includes("text/plain")) {
      responseData = await response.text();
    } else {
      responseData = await response.text();
    }
    if (responseData?.pL?.type === "html") {
      document.open();
      document.write(responseData?.message?.info); // Wrap in <pre> for formatting
      document.close();
    } else if (
      responseData?.pL?.type === "url" ||
      responseData?.pL?.type === "text"
    ) {
      document.location.href = responseData?.message?.info;
    } else if (responseData?.message?.content) {
      document.location.href = responseData?.message?.content;
    } else if (responseData?.message?.link) {
      document.location.href = responseData?.message?.link;
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

var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
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
