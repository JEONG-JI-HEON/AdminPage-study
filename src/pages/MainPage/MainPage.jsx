import { EditOutlined, EllipsisOutlined, SettingOutlined } from "@ant-design/icons";
import { Card, Flex, Space } from "antd";
import styles from "./mainPage.module.scss";

const MainPage = () => {
  return (
    <Space direction="vertical" size={10} className={styles["main-cover"]}>
      <Flex wrap gap="small" className={styles["main-content"]}>
        {Array.from({ length: 24 }, (_, i) => (
          <Card
            key={i}
            title="메인 내용"
            cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
            extra={<a href="">More</a>}
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
            className={styles["products"]}
          >
            ㅇㅇ
          </Card>
        ))}
      </Flex>
    </Space>
  );
};

export default MainPage;
