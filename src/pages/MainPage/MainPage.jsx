import { useState } from "react";
import { Link } from "react-router-dom";

import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="w-full h-full flex flex-row justify-center items-center gap-4">
      <Link to="/login">
        <button className="border border-gray-400 w-52 py-9 px-4 rounded-t-lg text-2xl font-bold border-b-4 border-b-cyan-600">
          로그인
        </button>
      </Link>
      <Link to="/admin">
        <button className="border border-gray-400 w-52 py-9 px-4 rounded-t-lg text-2xl font-bold border-b-4 border-b-pink-600">
          어드민페이지
        </button>
      </Link>
    </div>
  );
};

export default MainPage;
