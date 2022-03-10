const accessWebCamp = async () => {
  let stream = null;

  try {
    stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: {
        width: { ideal: 1280 },
        height: { ideal: 720 },
        facingMode: "user",
      },
    });
    return stream;
  } catch (err) {
    console.log(err);
  }
};

export default accessWebCamp;
