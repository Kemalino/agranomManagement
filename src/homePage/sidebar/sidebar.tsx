import { UploadOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { FC } from "react";

const SideBar:FC<{collapsed:boolean}> = ({collapsed}) => {
  return ( 
    <Sider trigger={null} collapsible collapsed={collapsed}>
        <div
          className="logo"
          style={{
            height: "32px",
            margin: "16px",
            background: "rgba(255, 255, 255, 0.3)",
          }}
        />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            Nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            Nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            Nav 3
          </Menu.Item>
        </MenU>
      </Sider>
   );
}
 
export default SideBar;