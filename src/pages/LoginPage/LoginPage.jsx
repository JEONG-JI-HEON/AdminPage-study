import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { tokenAtom } from "../../util/TokenAtom";
import { userAtom } from "../../util/UserAtom";

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

  const loginSubmit = (e) => {
    e.preventDefault();
    axios.post("/user/login", [{ id: id, pw: pw }]).then((res) => {
      // console.log(res.data);
      // console.log(res.data.accessToken);
      setAccessToken(res.data.accessToken);
      setUserInfo({ id: res.data.id, pw: res.data.pw });
      navigate(from);
    });
  };

  return (
    <div className="w-80">
      <form onSubmit={loginSubmit} className="flex flex-col p-4 border border-gray-200 items-start gap-4">
        <label className="flex flex-col items-start w-full">
          ID
          <input
            type="text"
            autoFocus
            value={testId}
            placeholder="아이디를 입력해주세요"
            onChange={(e) => {
              setId(e.target.value);
            }}
            className="w-full p-2 border border-gray-200"
          />
        </label>
        <label className="w-full flex flex-col items-start">
          Password
          <input
            type="password"
            value={testPw}
            placeholder="패스워드를 입력해주세요"
            onChange={(e) => setPw(e.target.value)}
            className="w-full p-2 border border-gray-200"
          />
        </label>
        <button type="submit" className="p-4 w-full bg-teal-500 text-white">
          로그인
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
