import { LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined, SettingOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { collapsedAtom } from "../../../util/PageAtom";
import { isLoginSelector } from "../../../util/TokenAtom";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;

const AdminHeader = () => {
  const [isLogOut, setIsLogOut] = useState(false);
  const [collapsed, setCollapsed] = useRecoilState(collapsedAtom);
  const [loginState, setLoginState] = useRecoilState(isLoginSelector);

  const navigate = useNavigate();

  const buttonStyle = {
    fontSize: "16px",
    width: 64,
    height: 64,
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items = [
    {
      label: "설정",
      key: "group",
      icon: <SettingOutlined />,
    },
    {
      label: "로그아웃",
      key: "group",
      icon: <LogoutOutlined />,
    },
  ];

  useEffect(() => {
    if (isLogOut) {
      setLoginState(false);
    }
  }, [isLogOut]);

  return (
    <Header className="p-0 pl-2 pr-2 flex justify-between" style={{ background: colorBgContainer }}>
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={buttonStyle}
      />
      {/* <Button type="text" icon={<LogoutOutlined />} onClick={() => setIsLogOut(true)} style={buttonStyle} /> */}
      <Menu mode="horizontal" items={items} onClick={() => setIsLogOut(true)} style={buttonStyle} />
    </Header>
  );
};

export default AdminHeader;
