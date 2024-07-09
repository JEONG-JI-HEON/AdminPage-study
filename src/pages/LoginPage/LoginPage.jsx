import { HomeOutlined } from "@ant-design/icons";
import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { tokenAtom } from "../../util/TokenAtom";
import { userAtom } from "../../util/UserAtom";

import { Button, Form, Input } from "antd";

const LoginPage = () => {
  const testId = "testID";
  const testPw = 1234;

  const [id, setId] = useState(testId);
  const [pw, setPw] = useState(testPw);
  const setAccessToken = useSetRecoilState(tokenAtom);
  const setUserInfo = useSetRecoilState(userAtom);
  const navigate = useNavigate();
  // const isLogin = useRecoilValue(isLoginSelector);

  const location = useLocation();
  // console.log(location);
  const from = location?.state?.redirectedForm?.pathname || "/"; //직전 위치 해있던 페이지 링크 불러오기

  const onFinish = (values) => {
    console.log("로그인 성공:", values);
    axios.post("/user/login", [{ id: id, pw: pw }]).then((res) => {
      setAccessToken(res.data.accessToken);
      setUserInfo({ id: res.data.id, pw: res.data.pw });
      navigate(from);
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("로그인 실패:", errorInfo);
  };

  const onHome = () => {
    navigate("/");
  };

  return (
    <div className="w-80">
      <Button type="primary" icon={<HomeOutlined />} onClick={onHome}></Button>

      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ username: id, password: pw, remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="py-[30px] px-[20px] box-border border border-gray-200 "
      >
        <Form.Item label="아이디" name="username" rules={[{ required: true, message: "아이디를 입력하세요." }]}>
          <Input
            // defaultValue={testId}
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </Form.Item>

        <Form.Item label="비밀번호" name="password" rules={[{ required: true, message: "비밀번호를 입력하세요." }]}>
          <Input.Password
            // defaultValue={testPw}
            onChange={(e) => {
              setPw(e.target.value);
            }}
          />
        </Form.Item>

        {/* <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>아이디 저장</Checkbox>
        </Form.Item> */}

        <Form.Item wrapperCol={{ offset: 8, span: 16 }} className="m-0">
          <Button type="primary" htmlType="submit">
            로그인
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
