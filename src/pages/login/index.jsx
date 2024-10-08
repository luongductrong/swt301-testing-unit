import React from "react";
import { useState } from "react";
import { Flex, Button, Form, Input, ConfigProvider, Typography } from "antd";
import { login as loginAPI } from "../../apis";

const formStyles = {
  width: "20vw",
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "20px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
};

const { Text } = Typography;

function Login() {
  const [req, setReq] = useState(null);
  const [res, setRes] = useState(null);

  const handleFinish = async (values) => {
    let response;
    try {
      console.log("Logging in:", values);
      setReq(values);

      response = await fetch(loginAPI, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const contentType = response.headers.get("content-type");
      let data;
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        data = await response.text();
      }
      console.log(data);
      setRes(JSON.stringify(data));
    } catch (error) {
      try {
        setRes(`${response.statusText}: ${response.status}`);
      } catch (e) {
        setRes("Error: " + e);
      }
    }
  };

  const handleFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#ff13fa",
          borderRadius: "20px",
        },
      }}
    >
      <Flex
        justify="center"
        align="center"
        style={{ minHeight: "100vh", flexDirection: "column" }}
      >
        <Form
          layout="vertical"
          style={formStyles}
          onFinish={handleFinish}
          onFinishFailed={handleFinishFailed}
        >
          <Form.Item
            label="Tên đăng nhập"
            name="userName"
            rules={[
              { required: true, message: "Vui lòng nhập tên đăng nhập!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>

        <br />
        <Text>{req && <Text code>Request: {JSON.stringify(req)}</Text>}</Text>
        <br />
        <Text style={{ maxWidth: "50vw" }}>
          {res && <Text code>Response: {res}</Text>}
        </Text>
      </Flex>
    </ConfigProvider>
  );
}

export default Login;
