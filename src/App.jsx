import React, { useState } from "react";
import ButtonEventFixed from "./components/ButtonEventFixed";
import TimerFixed from "./components/TimerFixed";
import MockDemoAPI from "./components/MockDemoAPI";

const App = () => {
    const [click, setClick] = useState(false);

    return (
        <>
        <ButtonEventFixed onClick={() => setClick(!click)} />
        {click && <TimerFixed />}
        <MockDemoAPI />
        </>
    );
};

export default App;