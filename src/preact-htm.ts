// @ts-ignore
import htm from "htm";
import { h, render } from "preact";
const html = htm.bind(h);
import { useCounter } from "./counter-preact";

const root = document.querySelector("body")!;

const Header = () => {
  const [n, inc, dec] = useCounter();

  return html`
    <h1>This is static string.</h1>
    <div>
      <p>${n}</p>
      <button onClick=${inc}>+</button>
      <button disabled=${n === 0} onClick=${dec}>
        -
      </button>
    </div>
  `;
};

render(
  html`
    <div>
      <${Header} />
      <footer>i'm footer</footer>
    </div>
  `,
  root
);
