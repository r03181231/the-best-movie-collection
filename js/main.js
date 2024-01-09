// main.js - 메인 기능 모음
import movieColl from "./common/movieColl.js";
import { cards } from "./common/cards.js";
import { search } from "./common/search.js";
import { enterSearch } from "./item/enterSearch.js";
import { alert } from "./item/alert.js";
import { $cards, $goToPage, $input, $searchBtn, $top, goToPage } from "./common/values.js";
import { goToTop, showTop } from "./item/goToTop.js";

//브라우저가 켜진 후
document.addEventListener("DOMContentLoaded", async () => {
  // window.addEventListener("scroll", headerScroll);
  //영화 내용 가져오기
  const movies = await movieColl();
  // 헤더 제목 클릭 시, 메인 페이지 이동
  $goToPage.addEventListener("click", goToPage);
  // 웹사이트 랜딩 또는 새로고침 후 input에 커서 자동 위치시키기
  $input.focus();
  // 영화정보 카드 리스트 UI - 로드될 시, 보이는 메인 화면
  cards(movies);
  // 필수요구 - 카드 클릭 시에는 클릭한 영화 id 를 나타내는 alert 창을 띄웁니다.
  $cards.addEventListener("click", alert);

  //검색 기능===================================
  //input값 입력하고 엔터해도 검색 기능 동작
  $input.addEventListener("keyup", enterSearch);
  // 검색 버튼 클릭될 시, 검색기능 활성화
  $searchBtn.addEventListener("click", search);
});
// 스크롤 이동시 top버튼 나타남
window.addEventListener("scroll", showTop);
// top버튼 클릭 시, 화면 최상단으로 이동
$top.addEventListener("click", goToTop);
