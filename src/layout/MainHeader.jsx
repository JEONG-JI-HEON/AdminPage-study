import React from "react";
import { Link } from "react-router-dom";

import { Button } from "antd";

const MainHeader = () => {
  return (
    <div className="w-full py-[20px] box-border absolute top-0 bg-slate-500 flex justify-center items-center gap-5 text-white">
      <Link to="/login">
        <Button type="primary">로그인페이지</Button>
      </Link>
      <Link to="/admin">
        <Button type="primary">어드민페이지</Button>
      </Link>
    </div>
  );
};

export default MainHeader;
