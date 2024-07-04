import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { userAtom } from "../../util/UserAtom";

import { DatabaseOutlined, HomeOutlined, PieChartOutlined } from "@ant-design/icons";
import { Layout, Menu, theme, Avatar, Space } from "antd";
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
          {/* <Space className="w-full h-40 text-white" mode="inline" size={16} wrap collapsible> */}
          <div className="w-full h-40 text-white flex justify-center items-center gap-3">
            <Avatar size={40}>USER</Avatar>
            {!collapsed && <div className="whitespace-nowrap">관리자 {userInfo.id}</div>}
          </div>
          {/* </Space> */}
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <HomeOutlined />,
                label: "Dashboard",
              },
              {
                key: "2",
                icon: <PieChartOutlined />,
                label: "자재관리",
              },
              {
                key: "3",
                icon: <DatabaseOutlined />,
                label: "입고관리",
              },
              {
                key: "4",
                icon: <DatabaseOutlined />,
                label: "출고관리",
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
