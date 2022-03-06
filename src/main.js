// @ts-ignore
import App from "./App.svelte";
import registerServiceWorker from "./service-worker/register";

registerServiceWorker();

const app = new App({
  target: document.getElementById("app"),
});

export default app;
