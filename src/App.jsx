import React, { useState } from "react";
import ButtonEventFixed from "./components/ButtonEventFixed";
import TimerFixed from "./components/TimerFixed";

const App = () => {
    const [click, setClick] = useState(false);

    return (
        <>
        <ButtonEventFixed onClick={() => setClick(!click)} />
        {click && <TimerFixed />}
        </>
    );
};

export default App;