import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { userAtom } from "../../util/UserAtom";

import { UploadOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { collapsedAtom } from "../../util/PageAtom";
import AdminHeader from "./_components/AdminHeader";

const { Sider, Content } = Layout;

const AdminPage = () => {
  const [userInfo, setUserInfo] = useRecoilState(userAtom);

  const [collapsed, setCollapsed] = useRecoilState(collapsedAtom);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);

  return (
    <div className="w-full">
      <Layout className="h-screen">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: "nav 1",
              },
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                label: "nav 2",
              },
              {
                key: "3",
                icon: <UploadOutlined />,
                label: "nav 3",
              },
            ]}
          />
        </Sider>
        <Layout>
          <AdminHeader />
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default AdminPage;
