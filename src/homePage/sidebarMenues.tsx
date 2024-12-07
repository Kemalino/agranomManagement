import React, { useMemo } from "react";
import { GroupOutlined, InboxOutlined, StarFilled } from "@ant-design/icons";
import { theme, Menu } from "antd";
import { useLocation } from "react-router-dom";
import "../../../index.scss";
import { useAppSelector } from "../store/hooks";
// import EllipsedComponent from '../../../components/EllipsedComponent';
interface Props {
  collapsed?: boolean;
}

const SideBarMenues: React.FC<Props> = () => {
  const { token } = theme.useToken();
  const { currentLang } = useAppSelector((state) => state.general);

  const { SubMenu } = Menu;
  const { pathname } = useLocation();
  document.documentElement.style.setProperty("--text-color", token.colorText);

  const items = useMemo(() => {
    const items: {
      key: string;
      label: string;
      path?: string;
      icon: React.ReactNode;
      allowed?: (key: string) => void;
      children?: {
        label: string;
        path: string;
        icon: React.ReactNode;
        key: string;
        allowed?: (parent: string) => void;
      }[];
    }[] = [];
    return items;
  }, [currentLang]);

  const selectedKey = items.find((item) =>
    item.children
      ? item.children.some((child) => child.key === pathname.split("/")[1])
      : item.key === pathname.split("/")[1]
  )?.key;

  return (
    <Menu
      mode="inline"
      key={"menu"}
      selectedKeys={[selectedKey ? selectedKey : " "!]}
    >
      {items?.map((item) =>
        !item.children ? (
          <>
            {item.allowed?.length ? (
              <Menu.Item key={item.key} icon={item.icon}>
                <EllipsedComponent
                  data={item.label}
                  limit={17}
                  link={item.path}
                />
              </Menu.Item>
            ) : null}
          </>
        ) : (
          <>
            {item.children.some((child) => child.allowed?.length) ? (
              <SubMenu key={item.key} icon={item.icon} title={item.label}>
                {item.children.map(
                  (child: {
                    key: string;
                    label: string;
                    path: string;
                    icon: React.ReactNode;
                    allowed?: (key: string) => void;
                  }) => (
                    <div key={child.key}>
                      {child.allowed?.length ? (
                        <Menu.Item
                          key={child.key}
                          icon={child.icon}
                          style={{
                            paddingLeft: 35,
                            backgroundColor:
                              child.key === pathname.split("/")[1]
                                ? token.colorPrimaryBg
                                : "",
                            color:
                              child.key === pathname.split("/")[1]
                                ? token.colorPrimaryText
                                : "",
                          }}
                        >
                          <EllipsedComponent
                            data={child.label}
                            limit={17}
                            link={child.path}
                          />
                        </Menu.Item>
                      ) : null}
                    </div>
                  )
                )}
              </SubMenu>
            ) : null}
          </>
        )
      )}
    </Menu>
  );
};

export default SideBarMenues;
