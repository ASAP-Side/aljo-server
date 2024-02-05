# Node.js 이미지 사용
FROM  --platform=linux/amd64 node:18-alpine

# 작업 디렉토리 생성 및 설정
WORKDIR /usr/src/app

# 애플리케이션 의존성 파일 복사
COPY package*.json ./

# 애플리케이션 의존성 설치
RUN npm install

# 애플리케이션 소스 복사
COPY . .

# 애플리케이션 실행에 필요한 포트 열기
EXPOSE 3000

# 애플리케이션 실행 명령어
CMD ["npm", "start"]
