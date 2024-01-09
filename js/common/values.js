// values.js - 공통으로 쓰는 변수 모음
export const $searchBtn = document.querySelector("#searchBtn"); // 검색버튼
export const $cards = document.querySelector("#cards-container"); // 카드 최상위 div
export const $input = document.querySelector("#input");
export const $goToPage = document.querySelector("#go-page");
export const blank_pattern = /^\s+|\s+$/g; // 유효성 - 공백만 있을 경우
export const goToPage = () => {
  location.replace("https://tbmc.vercel.app/");
};
