import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from 'antd';
import SideBar from './sidebar/sidebar';
import Header from './header/header';
import { Outlet } from 'react-router-dom';
import { cookieGetter } from '../utils/cookies';

const { Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    const accessToken = cookieGetter('accessToken');
    if (!accessToken) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideBar collapsed={collapsed} />
      <Layout>
        <Header toggle={toggle} collapsed={collapsed} />
        <Content
          style={{
            padding: 24,
            minHeight: 280,
            background: '#fff',
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
