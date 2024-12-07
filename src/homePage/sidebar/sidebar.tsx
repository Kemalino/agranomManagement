import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const SideBar: FC<{ collapsed: boolean }> = ({ collapsed }) => {
  const navigate = useNavigate();
  const { SubMenu } = Menu;
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div
        className='logo'
        style={{
          height: '32px',
          margin: '16px',
          background: 'rgba(255, 255, 255, 0.3)',
        }}
      />
      <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
        <SubMenu key='sub1' icon={<UserOutlined />} title='Nav 1'>
          <Menu.Item key='1-1' onClick={() => navigate('/map')}>
            Map
          </Menu.Item>
          <Menu.Item key='1-2'>Option 2</Menu.Item>
        </SubMenu>
        <SubMenu key='sub2' icon={<VideoCameraOutlined />} title='Nav 2'>
          <Menu.Item key='2-1'>Option 1</Menu.Item>
          <Menu.Item key='2-2'>Option 2</Menu.Item>
        </SubMenu>
        <SubMenu key='sub3' icon={<UploadOutlined />} title='Nav 3'>
          <Menu.Item key='3-1'>Option 1</Menu.Item>
          <Menu.Item key='3-2'>Option 2</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default SideBar;
