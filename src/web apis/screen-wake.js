let wakeLock = null;
const requestWakeLock = async () => {
  try {
    // @ts-ignore
    wakeLock = await navigator.wakeLock.request("screen");
    wakeLock.addEventListener("release", () => {
      console.log("Wake Lock was released");
    });
    console.log("Wake Lock is active");
  } catch (err) {
    console.error(err.name, err.message);
  }
};

const handleVisibilityChange = () => {
  if (wakeLock !== null && document.visibilityState === "visible") {
    requestWakeLock();
  } else {
    requestWakeLock();
  }
};

export default handleVisibilityChange;
