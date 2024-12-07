import React, { CSSProperties } from 'react';
import { Spin } from 'antd';

const Loader: React.FC<{ style?: CSSProperties }> = ({ style }) => (
  <div
    style={{
      ...style,
      position: 'fixed',
      zIndex: 100,
      height: '100vh',
      width: '100vw',
      top: 0,
      left: 0,
    }}
  >
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'transparent',
          zIndex: 10,
        }}
      ></div>
      <Spin size="large" />
    </div>
  </div>
);

export default Loader;
