import { useState } from 'react';
import { Layout, Button } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import SideBar from './sidebar/sidebar';

const { Header, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideBar collapsed={collapsed} />
      <Layout className='site-layout'>
        <Header
          className='site-layout-background'
          style={{
            padding: 0,
            background: '#fff',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Button
            type='text'
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={toggle}
            style={{ marginLeft: '16px' }}
          />
          <h3 style={{ marginLeft: '16px' }}>Main Layout</h3>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: '#fff',
          }}
        >
          Content goes here
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
