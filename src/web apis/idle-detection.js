const controller = new AbortController();
const signal = controller.signal;

export const startDetect = async () => {
  // @ts-ignore
  if ((await IdleDetector.requestPermission()) != "granted") {
    console.error("Idle detection permission denied.");
    return;
  }

  try {
    // @ts-ignore
    const idleDetector = new IdleDetector();
    idleDetector.addEventListener("change", (e) => {
      const { userState, screenState } = e.target;
      console.log(signal);
      console.log(`idle change: ${userState}, ${screenState}`);
    });
    idleDetector.start({
      threshold: 60000,
      signal: controller.signal,
    });
  } catch (err) {
    // Deal with initialization errors like permission denied,
    // running outside of top-level frame, etc.
    console.error(err.name, err);
  }
};

export const stopDetect = () => {
  controller.abort();
  console.log("IdleDetector is stopped.");
};
