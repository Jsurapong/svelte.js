import App from "./App.svelte";
import Header from "./UI/Header.svelte";

const app = new App({
  target: document.querySelector("#app"),
});

const header = new Header({ target: document.querySelector("#header") });

export default app;
