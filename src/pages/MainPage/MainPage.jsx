import { Link } from "react-router-dom";

import "./MainPage.css";

import { Button } from "antd";

const MainPage = () => {
  return (
    <div className="w-full h-full flex flex-row justify-center items-center gap-4">
      <Link to="/login">
        <Button type="primary">로그인</Button>
      </Link>
      <Link to="/admin">
        <Button type="primary">어드민페이지</Button>
      </Link>
    </div>
  );
};

export default MainPage;
