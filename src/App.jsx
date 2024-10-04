import React from "react";
import Button from "./components/Button";

const App = () => (
    <>
     <div>
      <a href="https://reactjs.org">Welcome</a>
    </div>
    <Button label="Click me" onClick={() => console.log('Clicked')}/>
    </>
);

export default App;