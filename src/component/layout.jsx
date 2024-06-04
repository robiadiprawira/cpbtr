import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className='bg-primary text-blue-50'>
      {children}
    </div>
  );
};

export default Layout;