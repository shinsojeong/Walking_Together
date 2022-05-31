![walking-together2](https://user-images.githubusercontent.com/61176569/171169106-47c75395-c20c-4a1e-8674-d048f98afaa2.png)

# 1. Walking Together
## 1.1. 프로젝트 기간
<p align="center"><b>2021.01.15 ~ 2021.06.24</b></p>

## 1.2. 프로젝트 설명
- Walking Together은 COVID-19로 인해 둔화된 봉사 활동에 어떻게 활기를 불어 넣어 줄 수 있을지에 대한 고민에서 시작되었습니다.
실외 활동이 보다 어려운 아동/임산부/노약자 등과 함께 실외 활동을 하고, 그 활동을 봉사 활동 실적으로 인정함으로써 학생들의 봉사 활동 폭을 넓혀줍니다.

- COVID-19로 인해 봉사 활동이 제한되어 새로운 봉사활동이 필요한 삼육대학교 대학생이 이용 대상자입니다.

- Walking Together는 이동 거리, 이동 경로 등의 정보를 수집하고, 수집 정보에 따른 경로를 출력합니다. 인증 사진 촬영, 소감문 작성을 통해 활동 증빙 자료를 기록할 수 있습니다. 활동 종료 이후에는 어플리케이션 내에서 봉사 활동 인증서(.pdf) 발급이 가능합니다.

- 보다 정확하고 쉽게 학생들에 대한 봉사 실적을 확인할 수 있으며, 수혜자에 따라 봉사시간이 자동 환산되는 봉사 활동에 특화된 프로그램입니다.

- 별도의 관리자 모드에서는 학생 정보, 봉사 활동 정보 및 파트너(봉사 수혜자) 정보를 단순한 UI를 통해 간편하게 관리할 수 있습니다.

- Walking Together를 통해 학생 입장에서는 직접 봉사 활동처를 알아보고 신청하는 시간적, 심적 부담이 줄어듭니다. 또한 상대적으로 시간에 구애를 받지 않고 봉사 활동을 할 수 있어서 심적 부담을 완화시킬 수 있습니다.
수혜자 입장에서는 COVID-19로 인해 야외 활동이 줄어듦에 따라 타인과의 소통마저 단절이 된 상황에서 '함께 걸음'을 통해 트인 공간에서 보다 안전하게 소통의 단절을 해결할 수 있습니다.

- 반응형 웹앱으로서 기초 구동은 웹(Web)으로 동작합니다. 반응형 웹으로서 웹에 기초하지만 모바일에 더 특화되어 있는 웹앱입니다. 또한 PWA화를 거쳤기에 모바일에서 조금 더 부드럽게 동작합니다.
가장 핵심 기능인 활동(지도) 기능은 Geolocation API를 사용하여 좌표를 30초 마다 받아와서 Kakao map API를 사용하여 경로를 띄우고, 종료 시에 경로는 기타 정보와 함께 서버로 전송합니다. 출력 시에는 Kakao map API를 사용하여 활동 경로를 출력합니다.

<br></br>
# 2. 프로젝트 정보
## 2.1. 주요 기술
### 2.1.1. 프론트엔드
- axios
- lodash
- pdfmake
- react
- react-csv
- react-router-dom
- react-quill
- redux
- redux-thunk
- sass
### 2.1.2. 백엔드
- spring boot v2.4.3
- spring security jwt - 로그인 시 인증 및 보안
- spring data jpa - 엔티티 구성
- querydsl - 쿼리 작성
### 2.1.3. 테스트
- Postman - API 테스트
- Jmeter - 부하 테스트
### 2.1.4. 배포
- React(AWS S3, CloudFront)
- Spring boot (AWS S3, Linux2, AWS EC2 with clb)
- MariaDB(RDS)
- domain (Route 53)
## 2.2. 폴더 구조
```
├─client
│  │  README.md
│  ├─public
│  │  ├─images
│  │  │ Install.js
│  │  │ Service-Worker.js
│  │  │ index.html
│  │  └ manifest.json
│  └─src
│     ├─admin
│     │  ├─Menu
│     │  ├─Notice
│     │  ├─Partner-info
│     │  ├─User-activity
│     │  ├─User-info
│     │  └ Admin.js
│     ├─hoc
│     │  └ Admin.js
│     ├─modules
│     │  ├─store
│     │  │ activity.js
│     │  │ admin.js
│     │  │ feed.js
│     │  │ notice.js
│     │  │ partner.js
│     │  │ topbar.js
│     │  └ user.js
│     ├─source
│     ├─styles
│     ├─user
│     │  ├─Activity
│     │  ├─Certification
│     │  ├─Feed
│     │  ├─Mypage
│     │  ├─Partner
│     │  ├─Ranking
│     │  ├─find
│     │  ├─home
│     │  ├─login
│     │  ├─notice
│     │  ├─register
│     │  │ User.js
│     │  └ User1.js
│     ├─utils
│     │ App.js
│     └ index.js
├─server
```
## 2.3. 기능 및 파트 소개
### 2.3.1. 프론트엔드 - [sunpl13](https://github.com/sunpl13)
저는 크게 로그인/회원가입, 인증, Redirect, 피드, PWA를 구현하였습니다. 로그인 회원가입은 CRUD처럼 구현하였고, 인증은 HOC방식을 사용하였습니다. 컴포넌트를 로그인된 사용자만 들어갈 수 있는 부분과 로그인된 사용자가 들어갈 수 없는 부분, 둘 다 들어갈 수 있는 부분으로 나눠서 컴포넌트를 인자로 넘겨줘서 그에 대응되는 값(로그인 된 사용자만 들어갈 수 있는 페이지 = true, 로그인 안된 사용자만 들어갈 수 있는 부분 =false)도 같이 넘겨줘서 리턴된 값에 다라 접속할 수 있게 만들었습니다. 피드는 서버에서 받아온 값을 map 함수를 사용하여 리스트 부분으로 출력할 수 있게 만들었습니다. 그리고 PWA는 리액트 라이브러리에서 지원이 잘 되어 manifest.json을 수정하고 IOS 부분의 호환성을 위해서 따로 meta태그로 지정해 주었습니다. 그리고 이 만든 웹앱을  PWA Builder를 통해서 변환 후에 PlayStore에 출시하였습니다.(현재 출시 대기중입니다.)
### 2.3.2. 프론트엔드 - [shinsojeong](https://github.com/shinsojeong)
#### 관리자 모드
- <b>[회원 정보]</b> 입력받은 이름/학번 키워드를 axios를 사용하여 서버에 요청하고, 일치하는 회원 정보 response를 화면에 출력합니다. 
- <b>[활동 정보]</b> 입력받은 기간, 이름/학번, 활동 구분을 axios를 사용하여 서버에 요청하고, 일치하는 활동 정보 response를 화면에 출력합니다. 조회한 내용은 react-csv를 사용해 Excel 파일로 생성할 수 있습니다. 또한 각 활동의 상세보기 버튼을 클릭하면 Kakao map API를 통해 활동 경로를 나타냅니다.
- <b>[파트너 정보]</b> 입력받은 이름/학번, 파트너 구분을 axios를 사용하여 서버에 요청하고, 일치하는 파트너 정보 response를 화면에 출력합니다. 조회한 내용은 react-csv를 사용해 Excel 파일로 생성할 수 있습니다.
- <b>[공지사항]</b> Pagination을 통해 해당 페이지의 공지사항 리스트를 조회합니다. 리스트의 각 공지사항을 클릭하면 해당 공지사항의 세부 내용을 출력합니다. 공지 세부 화면의 삭제 버튼을 통해 해당 공지글을 삭제할 수 있습니다. 공지사항 작성 에디터로는 ReactQuill을 사용하였고, 입력받은 제목/내용/이미지/파일 등의 정보를 formData로 묶어 서버에 전송합니다.
#### 유저 모드
- <b>[파트너 정보]</b> 함께 활동할 파트너 정보를 조회, 생성, 수정, 삭제할 수 있습니다.
- <b>[활동]</b> 파트너를 선택하여 활동을 생성합니다. 활동 시작 전, 증빙 자료로 제출할 인증 사진을 촬영하도록 카메라 어플을 실행합니다. 활동이 시작되면 Geolocation을 통해 사용자의 위치 정보를 받아오고, 사용자의 현재 위치를 Kakao map API를 사용하여 지도에 표시합니다. 30초 마다 사용자의 위치 정보를 수집하고 지도를 해당 위치로 panToMove, polyline을 생성하여 경로를 표시합니다. 30분 이상 활동 시, 활동 종료가 가능하며 종료 시 증빙 사진을 촬영하기 위해 카메라 어플을 실행합니다. 활동 종료 후 경로, 거리 및 각종 정보를 서버에 제출합니다.
- <b>[랭킹]</b> 활동 거리 기준 상위 10명의 정보를 받아와서 출력합니다.
- <b>[정보 수정]</b> 유저의 프로필 이미지, 학과, 비밀번호를 변경할 수 있습니다.
- <b>[인증서 발급]</b> 조회 기간을 입력받아 서버에 요청하고, Response로 받아온 활동 정보를 pdfMake를 사용하여 pdf로 생성합니다. 사용자는 생성된 인증서를 다운로드할 수 있습니다.
- <b>[상단바]</b> 상단바는 별도의 모듈로 구현했습니다. 좌,우,중앙의 icon 및 text와 좌,우 function을 입력받아 상단바를 생성합니다. 
#### 공통
- <b>[debouncing]</b> debounce 처리를 통해 사용자의 짧은 시간 내의 연속적인 요청을 막음으로써 성능 저하를 방지했습니다.
- <b>[Redux]</b> 활동, 피드, 공지, 상단바의 상태 관리를 위한 리덕스 모듈을 설계, 구현했습니다. 또한 Redux-thunk 미들웨어를 통하여 비동기 작업을 수행했습니다.
#### 디자인
- <b>[관리자 모드]</b> 화면 좌측에는 네비게이션 바, 우측에는 라우트 공간을 두어 직관적으로 구성했습니다.
- <b>[유저 모드]</b> 하단에 네비게이션 바를 두어 주 기능인 활동, 피드, 홈, 랭킹, 마이페이지에 쉽게 접근할 수 있도록 구성했습니다. 상단바의 좌/우 버튼을 통해 뒤로가기, 취소, 등록 등의 활동을 수행할 수 있습니다.
- <b>[공통]</b> 접근성이 좋은 배치, 답답하고 무겁지 않은 심플한 디자인을 담았습니다. 관리자 모드와 유저 모드 모두 최소한의 애니메이션을 적용하여 사용자가 피로감을 느끼지 않도록 노력했습니다.

### 2.3.3. 백엔드 - [rhdtn311](https://github.com/rhdtn311)

## 2.4. 사용법
매뉴얼 : [WT_manual.pdf](https://github.com/sunpl13/Walking_Together/files/6645239/WT_manual.pdf)
<br></br>
