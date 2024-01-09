# 개인 프로젝트 "TBMC"

### < 목차 >

 **# 개인 프로젝트 팀 "TBMC"소개**

- 팀원소개

**# 개인 프로젝트 소개**

- 개발 기간, 프로젝트 명&소개&목표

**# 시작가이드**

- Installation

**# 와이어프레임**

- 프로젝트 기능

  - 필수 요구 사항

  - 선택 요구 사항
 
**# 트러블슈팅**

<br />

## 프로젝트 팀 소개

**팀원 소개**

---

|                            남해리                            |
| :----------------------------------------------------------: |
|                          Enfp, Infp                          |
| <p><img src="https://lh7-us.googleusercontent.com/Ysape_5NRn4N32ZU7oOgrQmrfIAjTdQXKka5lOI6M6JxrEWg48DNhLQEXET56SbLP6f4CEJsn5RpDDoHgM9m6eDLyUolLBdP_xbLnp0gftdJg0hYUrKGwSXXVQxNO02AiSTl_4Wp0nHn9CSfQBblXhM" width="250px" /></p> |
|          [@r03181231](https://github.com/r03181231)          |
|                           FrontEnd                           |


<br />

**목표** 

---

\- 포기하지 말자 ! 

\- 피할 수 없으면 돌아가자 ! 

\- 끝까지 완성하자 !

<br />


## 프로젝트 "TBMC" 



**프로젝트 명** : TBMC (the best movie collection)

**개발 기간** : 2024. 01.02 ~ 2024.01.07 (6일)

**프로젝트 소개** : 최고 평점을 가진 영화들을 검색하는 서비스입니다.

**프로젝트 목표** : 

1. 순수 바닐라 자바스크립트만으로 영화 리스트 조회 및 검색 UI 구현
2. 학습한 자바스크립트 문법을 최대한 활용
3. 스타일링 작업하며 css 와 친해지기



### 🚦 Project Rules

#### **개발 환경**

- **editor :** Visual Studio Code
- **environment :** git, github
- **development :** HTML5, CSS3, Javascript
- **API** : 영화정보 오픈API- TMDB(The Movie DB)



#### 코드 컨벤션

- class 사용시 대쉬( - ) 또는 카멜케이스 사용 (언더바( _ ) X)
- 파일 이름 카멜케이스 사용



#### github rules

- commit message
  - rename : 파일 이름 변경
  - refactor : 개선 사항 및 피드백 반영
  - bugfix : 버그, 오류 수정
  - add : 파일 및 내용 추가
  - feat : 기능 구현 상태
  - style : css 상태
  - del : 파일 및 내용 삭제


<br />


## 시작 가이드



### Installation

```bash
$ git clone https://github.com/r03181231/the-best-movie-collection.git
$ cd the-best-movie-collection
```


<br />


## 프로젝트 구성 및 기능





### 1. 필수 요구 사항       

- [x] jQuery 라이브러리 사용없이 순수 바닐라 자바스크립트 사용하기 

- [x] TMDB 오픈 API를 이용하여 인기영화 데이터 가져오기

- [x] 영화정보 카드 리스트 UI 구현
  - [x] 카드에는 title(제목), overview(내용 요약), poster_path(포스터 이미지 경로), 
    vote_average(평점) 이렇게 4가지 정보가 필수로 들어갑니다.
  - [x] 카드 클릭 시에는 클릭한 영화 id 를 나타내는 alert 창을 띄웁니다.	

| 스크린샷                                                     |
| ------------------------------------------------------------ |
| <p><img src="https://teamsparta.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F7007a3aa-483d-46e4-8110-4bdd2c2559e3%2FUntitled.png?table=block&id=e3e2ed6b-0789-4968-a391-aef369bb8219&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&width=1800&userId=&cache=v2" width="300px"></p> |



- [x] 영화 검색 UI 구현
  - [x] API로 받아온 전체 영화들 중 영화 제목에 input 창에 
    입력한 문자값이 포함되는 영화들만 화면에 보이도록 합니다.  
  - [x] 입력 후 검색버튼 클릭 시 실행되도록 합니다. 

- [x] 하기 기재된 Javascript 문법 요소를 이용하여 구현
  - [x] const와 let만을 이용한 변수 선언 필수
  - [x] 화살표 함수 : 하기 예시 중 1개 이상 사용
  - [x] 배열 메소드 : 하기 예시 중 2개 이상 사용
  - [x] DOM 제어하기 : 하기 api 목록 중 2개 이상 사용하기

### 2. 선택 요구 사항       

- [x] CSS
  - [x] flex 사용하기
  - [x] grid 사용하기

- [x] 웹사이트 랜딩 또는 새로고침 후 검색 입력란에 커서 자동 위치시키기

- [x] 대소문자 관계없이 검색 가능하게 하기

- [x] 키보드 enter키를 입력해도 검색버튼 클릭한 것과 동일하게 검색 실행시키기


<br />



