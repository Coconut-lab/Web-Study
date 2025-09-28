import React, { useState } from 'react';

function Register({ onRegisterSuccess, onSwitchToLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
      if (!username || !password || !confirmPassword) {
          alert('모든 필드를 입력해주세요.');
          return;
      }

      if (password !== confirmPassword) {
          alert('비밀번호가 일치하지 않습니다.');
          return;
      }

      try {
          const response = await fetch('http://localhost:8000/api/accounts/register/', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ username, password })
          });

          const data = await response.json();

          if (data.success) {
              alert(data.message);
              onRegisterSuccess();
          } else {
              alert(data.message);
          }
      } catch (error) {
          alert('서버 연결 오류가 발생했습니다.');
          console.error('Register error:', error);
      }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px' }}>
      <h2>회원가입</h2>
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
      <div>
        <label>비밀번호 확인: </label>
        <input 
          type="password" 
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <br />
      <button onClick={handleRegister}>회원가입</button>
      <br /><br />
      <button onClick={onSwitchToLogin}>로그인하러 가기</button>
    </div>
  );
}

export default Register;
