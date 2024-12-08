import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';
import { backendUrl } from '../utils/cookies';
import { useNavigate } from 'react-router-dom';
import { cookieSetter } from '../utils/cookies';

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const signIn = async (login: { userName: string; password: string }) => {
    try {
      const { data } = await axios.post(`${backendUrl}/auth/login`, login);
      console.log('Login successful:', data);
      cookieSetter('accessToken', data?.accessToken);
      // navigate('/');
    } catch (e) {
      console.error('Login error:', e);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: '#f5f5f5',
      }}
    >
      <div
        style={{
          display: 'flex',
          width: '800px',
          height: '500px',
          boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
          borderRadius: '10px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            flex: 1,
            padding: '2rem',
            background: '#fff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <h1 style={{ fontSize: '24px', marginBottom: '1rem', color: '#333' }}>
            Welcome,{' '}
            <span style={{ color: '#639a67', fontWeight: 'bold' }}>
              GREEN horizon
            </span>
          </h1>

          <Form
            layout='vertical'
            onFinish={(values) => {
              console.log('Form values:', values);
              signIn(values); // Pass form values to the signIn function
            }}
          >
            <Form.Item
              label='Username'
              name='userName' // Ensure the name matches the backend expected field
              rules={[
                { required: true, message: 'Please enter your username!' },
              ]}
            >
              <Input placeholder='Enter your name' />
            </Form.Item>
            <Form.Item
              label='Password'
              name='password'
              rules={[
                { required: true, message: 'Please enter your password!' },
              ]}
            >
              <Input.Password placeholder='Enter your password' />
            </Form.Item>
            <Form.Item>
              <Button
                type='primary'
                htmlType='submit'
                style={{
                  width: '100%',
                  backgroundColor: '#639a67',
                  borderColor: '#639a67',
                }}
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div
          style={{
            flex: 1,
            backgroundImage: 'url("/public/login.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderTopRightRadius: '10px',
            borderBottomRightRadius: '10px',
          }}
        ></div>
      </div>
    </div>
  );
};

export default LoginForm;
