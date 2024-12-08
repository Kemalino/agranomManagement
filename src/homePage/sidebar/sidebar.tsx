import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../../public/image.png';

const SideBar: FC<{ collapsed: boolean }> = ({ collapsed }) => {
  const navigate = useNavigate();
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{
        backgroundColor: '#ffff',
        overflow: 'hidden',
        borderRight: '1px solid rgb(234, 233, 233)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={logo}
            alt=""
            width="40px"
            height="40px"
            style={{
              margin: '5px',
              overflow: 'auto',
            }}
          />
          <span style={{ color: 'rgba(59, 140, 3, 1)', fontWeight: '700' }}>
            <i>GREEN horizon</i>
          </span>
        </span>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{ borderRight: 'none', width: '100%' }}
        >
          <Menu.Item key="1-1" onClick={() => navigate('/map')}>
            Map
          </Menu.Item>
          <Menu.Item key="1-2" onClick={() => navigate('/weather')}>
            weather
          </Menu.Item>
        </Menu>
      </div>
      <div
        style={{
          padding: '10px 5px',
          borderTop: '1px solid rgb(234, 233, 233)',
          position: 'absolute',
          top: '92%',
          width: '100%',
          display: 'flex',
        }}
      >
        <span
          style={{
            marginRight: '90px',
            fontWeight: '500',
            paddingTop: '5px',
          }}
        >
          Log Out
        </span>
        <Button
          style={{
            color: 'green',
            fontSize: '20px',
            border: '0',
            padding: '0',
          }}
          onClick={() => navigate('/login')}
        >
          <LogoutOutlined />
        </Button>
      </div>
    </Sider>
  );
};

export default SideBar;
