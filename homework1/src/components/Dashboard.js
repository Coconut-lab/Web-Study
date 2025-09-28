import React from 'react';

function Dashboard({ user, onLogout }) {
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px' }}>
      <h2>환영합니다!</h2>
      <p>{user.username}님, 로그인이 완료되었습니다.</p>
      <p>사용자 ID: {user.id}</p>
      <button onClick={onLogout}>로그아웃</button>
    </div>
  );
}

export default Dashboard;
