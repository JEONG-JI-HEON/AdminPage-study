import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isLoginSelector } from "../util/TokenAtom";

const ProtectedRoute = () => {
  const isLogin = useRecoilValue(isLoginSelector);
  const currentLocation = useLocation();
  //   if (isLogin) {
  //     console.log("로그인");
  //     return <Outlet />;
  //   } else {
  //     navigate("/login");
  //   }

  // console.log(isLogin);

  return isLogin ? <Outlet /> : <Navigate to={"/login"} replace state={{ redirectFrom: currentLocation }} />;
};
export default ProtectedRoute;
