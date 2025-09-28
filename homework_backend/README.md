# Django Backend for React Login System

## 설치 및 실행 방법

### 1. 가상환경 생성 및 활성화 (선택사항)
```bash
python -m venv venv
source venv/bin/activate  # Mac/Linux
# 또는
venv\Scripts\activate  # Windows
```

### 2. 패키지 설치
```bash
pip install -r requirements.txt
```

### 3. 데이터베이스 마이그레이션
```bash
python manage.py makemigrations
python manage.py migrate
```

### 4. 서버 실행
```bash
python manage.py runserver
```

## API 엔드포인트

### 회원가입
- **URL**: `POST /api/accounts/register/`
- **데이터**: 
  ```json
  {
    "username": "사용자명",
    "password": "비밀번호"
  }
  ```

### 로그인
- **URL**: `POST /api/accounts/login/`
- **데이터**: 
  ```json
  {
    "username": "사용자명",
    "password": "비밀번호"
  }
  ```

### 사용자 목록 조회 (개발용)
- **URL**: `GET /api/accounts/users/`

## 테스트 방법

### Postman 또는 curl로 테스트
```bash
# 회원가입
curl -X POST http://localhost:8000/api/accounts/register/ \
  -H "Content-Type: application/json" \
  -d '{"username": "testuser", "password": "testpass123"}'

# 로그인
curl -X POST http://localhost:8000/api/accounts/login/ \
  -H "Content-Type: application/json" \
  -d '{"username": "testuser", "password": "testpass123"}'
```

## React 연동
React 프로젝트에서 이 API를 호출하여 사용할 수 있습니다.

예시:
```javascript
const response = await fetch('http://localhost:8000/api/accounts/login/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ username, password })
});
```
