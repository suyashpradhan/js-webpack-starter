import App from "./App";

const root = (document.getElementById(
  "root"
).innerHTML = `<h1>hello world</h1>  ${App({ name: "Suyash" })}`);
