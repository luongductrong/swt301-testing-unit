import React, { useState } from "react";
import { Layout, Button, Space } from "antd";
import TimerFixed from "./components/TimerFixed";
import MockDemoAPI from "./components/MockDemoAPI";
import Login from "./pages/login";

const { Header, Content } = Layout;

const App = () => {
    const [timeClick, setTimeClick] = useState(false);
    const [apiClick, setApiClick] = useState(false);
    const [loginClick, setLoginClick] = useState(false);

    const handleClick = (btn) => {
        if (btn === "time") {
            setTimeClick(!timeClick);
            if (timeClick !== true) {
                setApiClick(false);
                setLoginClick(false);
            }
        } else if (btn === "api") {
            setApiClick(!apiClick);
            if (apiClick !== true) {
                setTimeClick(false);
                setLoginClick(false);
            }
        } else if (btn === "login") {
            setLoginClick(!loginClick);
            if (loginClick !== true) {
                setTimeClick(false);
                setApiClick(false);
            }
        }
    }


    return (
        <Layout>
            <Header>
                <Space>
                    <Button color="danger" variant={timeClick ? "solid" : "filled"} onClick={() => handleClick("time")}>Show Time</Button>
                    <Button color="danger" variant={apiClick ? "solid" : "filled"} onClick={() => handleClick("api")}>Show API</Button>
                    <Button color="danger" variant={loginClick ? "solid" : "filled"} onClick={() => handleClick("login")}>Show Login</Button>
                </Space>
            </Header>
            <Content>
                {timeClick && <TimerFixed />}
                {apiClick && <MockDemoAPI />}
                {loginClick && <Login />}
            </Content>
        </Layout>
    );
};

export default App;