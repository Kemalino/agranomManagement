import { useState } from 'react';
import { Layout } from 'antd';
import SideBar from './sidebar/sidebar';
import Header from './header/header';
import { Outlet } from 'react-router-dom';

const { Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideBar collapsed={collapsed} />
      <Layout className="site-layout">
        <Header toggle={toggle} collapsed={collapsed} />
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: '#fff',
          }}
        >
          {/* Nested routes will render here */}
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
