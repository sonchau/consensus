import React from 'react';
import Link from 'next/link';
import Header from './Header';

const page = {
    'width' : '100%',
    'height': '100%'
}
const content = {
  'margin': '0 auto',
  'max-width': '1200px',
  'padding': '1rem'
}

const Layout: React.FC = ({ children }) => {
  return (
    <div style={page}>
      <Header />
      <div style={content}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
//<img src="/geografia-logo.png" alt="Logo" />
