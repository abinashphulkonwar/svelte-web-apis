// @ts-ignore
import App from "./App.svelte";
import registerServiceWorker from "./service-worker/register";

registerServiceWorker();

// @ts-ignore
const pointer = new PointerEvent("pointermove");

// @ts-ignore
// pointer.onpointermove((data) => {
//   console.log(data);
// });

const app = new App({
  target: document.getElementById("app"),
});

export default app;
