'use client';

import React from 'react';

interface IDashboardProps {
  signOut: () => void;
}

const Dashboard: React.FC<IDashboardProps> = ({ signOut }) => {
  return (
    <div>
      Dashboard
      <button onClick={() => signOut()}>SignOut</button>
    </div>
  );
};

export default Dashboard;
