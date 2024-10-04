import React, { useState } from "react";
import Button from "./components/Paragraph";
import Timer from "./components/Timer";

const App = () => {
    const [click, setClick] = useState(false);

    return (
        <>
        <Button label="Click me" onClick={() => setClick(!click)} />
        {click && <Timer />}
        </>
    );
};

export default App;