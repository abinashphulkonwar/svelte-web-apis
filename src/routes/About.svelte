<script>
  import { count } from "../store/web-api-state";
  import handleVisibilityChange from "../web apis/screen-wake";
  import { startDetect, stopDetect } from "../web apis/idle-detection";
  import accessWebCamp from "../web apis/web-capm-api";

  const onPressHandler = () => {
    count.update((val) => {
      return val + 1;
    });
  };

  const webcampVideo = async () => {
    const data = await accessWebCamp();

    const video = document.getElementById("video");
    // @ts-ignore
    video.srcObject = data;
    video.onloadedmetadata = function (e) {
      // @ts-ignore
      video.play();
    };
  };
</script>

<div>
  <h1>hiiiiiiiii</h1>
  <p>{$count}</p>
  <button on:click={onPressHandler}>count</button>
  <h1>Screen wake</h1>
  <button on:click={handleVisibilityChange}>screen wake</button>
  <button on:click={startDetect}> start</button>
  <button on:click={stopDetect}> stop</button>
  <!-- svelte-ignore a11y-media-has-caption -->
  <video controls width="250" id="video" />

  <button on:click={webcampVideo}> webcamp</button>
</div>
