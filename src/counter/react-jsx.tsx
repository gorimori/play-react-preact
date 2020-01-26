/** @jsx React.createElement */
import React, { Fragment } from "react";
import ReactDOM from "react-dom";

const render = ReactDOM.render.bind(ReactDOM);

import { useCounter } from "./counter-react";

const root = document.querySelector("body")!;

const Header = () => {
  const [n, inc, dec] = useCounter();

  return (
    <Fragment>
      <h1>This is static string.</h1>
      <div>
        <p>{n}</p>
        <button onClick={inc}>+</button>
        <button disabled={n === 0} onClick={dec}>
          -
        </button>
      </div>
    </Fragment>
  );
};

render(
  <div>
    <Header />
    <footer>i'm footer</footer>
  </div>,
  root
);
