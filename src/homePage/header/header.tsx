import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
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
        padding: 0,
        background: '#fff',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={toggle}
        style={{ marginLeft: '16px' }}
      />
      <h3 style={{ marginLeft: '16px' }}>Main Layout</h3>
    </Header>
  );
};

export default Header;
