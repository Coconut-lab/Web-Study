import React, { useState } from 'react';

function Login({ onLoginSuccess, onSwitchToRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
      try {
          const response = await fetch('http://localhost:8000/api/accounts/login/', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ username, password }),
          });

          const data = await response.json();

          if (data.success) {
              alert('로그인 성공!');
              onLoginSuccess(data.user);
          } else {
              alert(data.message);
          }
      } catch (error) {
          alert('서버 연결 오류가 발생했습니다!!');
      }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px' }}>
      <h2>로그인</h2>
      <div>
        <label>아이디: </label>
        <input 
          type="text" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <br />
      <div>
        <label>비밀번호: </label>
        <input 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <br />
      <button onClick={handleLogin}>로그인</button>
      <br /><br />
      <button onClick={onSwitchToRegister}>회원가입하러 가기</button>
    </div>
  );
}

export default Login;
