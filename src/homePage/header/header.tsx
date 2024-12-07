import {
  BellOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Button } from 'antd';
import { Layout } from 'antd';
import { FC } from 'react';

const Header: FC<{ collapsed: boolean; toggle: () => void }> = ({
  collapsed,
  toggle,
}) => {
  const { Header } = Layout;
  return (
    <Header
      className="site-layout-background"
      style={{
        padding: 10,
        background: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgb(234, 233, 233)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={toggle}
          style={{ marginLeft: '16px' }}
        />
      </div>
      <Button>
        <BellOutlined style={{ fontSize: '18px' }} />
      </Button>
    </Header>
  );
};

export default Header;
