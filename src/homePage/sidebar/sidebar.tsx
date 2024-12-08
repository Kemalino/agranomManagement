import { UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../../public/image.png';

const SideBar: FC<{ collapsed: boolean }> = ({ collapsed }) => {
  const navigate = useNavigate();
  const { SubMenu } = Menu;
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{
        backgroundColor: '#ffff',
        overflow: 'hidden',
        borderRight: '1px solid rgb(234, 233, 233)',
      }}
    >
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={logo}
          alt=''
          width='40px'
          height='40px'
          style={{
            margin: '5px',
            overflow: 'auto',
          }}
        />
        <span style={{ color: 'rgba(59, 140, 3, 1)', fontWeight: '700' }}>
          GREEN horizon
        </span>
      </span>
      <Menu
        theme='light'
        mode='inline'
        defaultSelectedKeys={['1']}
        style={{ borderRight: 'none', width: '100%' }}
      >
        <SubMenu key='sub1' icon={<UserOutlined />} title=''>
          <Menu.Item key='1-1' onClick={() => navigate('/map')}>
            Map
          </Menu.Item>
          <Menu.Item key='1-2' onClick={() => navigate('/weather')}>
            weather
          </Menu.Item>
        </SubMenu>
        <Menu.Item key='2-1'></Menu.Item>
        <Menu.Item key='2-2'>Option 2</Menu.Item>
        <Menu.Item key='3-1'>Option 1</Menu.Item>
        <Menu.Item key='3-2'>Option 2</Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideBar;
