## 1. Setting

```bash
# Install package
yarn install

# Run dev server
yarn dev

# Build project
yarn build

## Run Production Preview
yarn preview
```

<br> <br>

## 2. Branch Convention

### **브랜치 네이밍 규칙**

> - **형식**  
>    `[이슈번호]-[작업내용]` (3-4 단어로 작업 내용을 간결히 표현)  
>    ex) `14-admin-login-ui`

<br>

### **브랜치 종류**

- **main**: 서비스 운영용 브랜치 (프로덕션 코드)
- **develop**: 배포 전 개발 및 통합 브랜치
- **feature**: 기능 단위 구현
  - 예: `14-admin-login-ui`
- **refactor**: 코드 리팩토링
  - 예: `20-refactor-authentication`
- **hotfix**: 배포 버전 버그 수정
  - 예: `27-hotfix-login`

<br> <br>

## 3. 폴더구조

```
public/
├── assets // 각종 이미지 소스 관리
│   ├── font //
│   ├── icons //
│   ├── images //
│   ├── model //
src/
├── actions //
├── app //
│   ├── (main)
│       └── page.tsx // 메인 페이지
│   └── about // 만든 이 페이지
│   └── interview //
│       └── page.tsx // 인터뷰 페이지
│       └── [id] // 인터뷰 상세 페이지
│   └── project // 프로젝트 아카이빙 페이지
│   └── recruit // 모집 페이지
│   ├── global.css // 전역 css 관리
│   ├── layout // RootLayout
│   └── not-found.tsx // 404 Not Found Page
│       ...
├── components // 컴포넌트 관리
│   ├── Common // 공통 컴포넌트
│       ...
├── constants // 전역 상수 관리
├── hooks // custom hook 관리
├── store // 전역 상태 관리
├── types // 공유 타입 관리
├── utils // 각종 유틸 함수 관리
```

<br> <br>

## 4. Commit Convention

### **커밋 메시지 규칙**

- 커밋 메시지는 작업의 성격을 명확히 나타내기 위해 **타입**을 사용합니다.
  > - **형식**  
  >   `[타입]: 작업 내용 (#이슈번호)`

<br>

### **커밋 타입**

- feat: 기능 구현 또는 새로운 기능 추가
- fix: 버그 및 오류 수정
- setting: 빌드수행, 패키지 설치, 환경 설정 수정 등
- style: CSS 파일 위주의 UI 작업
- docs: README.md 작성, 주석 작성 등 문서 관련 작업
- refactor: 코드 리팩토링 (기능 변화 없이 코드 개선)
- chore: 기타 작업

<br>

### **커밋 메시지 작성 예시**

```bash
feat: 어드민 로그인 UI 구현 (#14)
```
