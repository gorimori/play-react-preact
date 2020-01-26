import { h, Fragment, render } from 'preact';
import { useState, useCallback } from 'preact/hooks';

const Greeting = ({ name }: { name: string }) => {
  return <h1>Ohayo {name}!</h1>;
};

const Input = () => {
  const [value, setValue] = useState('');
  const inputHandler: h.JSX.GenericEventHandler<HTMLInputElement> = useCallback(
    e => {
      console.log(e.__proto__);
      const input = e.currentTarget;
      setValue(input.value);
    },
    [value]
  );

  const clickHandler: h.JSX.MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    console.log(value);
  }, [value]);

  return (
    <Fragment>
      <input type="text" value={value} onInput={inputHandler} />
      <button type="button" onClick={clickHandler}>
        show
      </button>
    </Fragment>
  );
};

const App = () => {
  return (
    <Fragment>
      <Greeting name="unkoman" />
      <Input />
    </Fragment>
  );
};

render(<App />, document.body);
