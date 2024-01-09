//card.js - 카드 생성 템플릿
import { $cards } from "./values.js";

// arr라는 배열의 자료를 가져와서
export const cards = (arr) => {
  arr.map((card) => {
    // 객체 구조분해할당 - key값을 모셔와서 나열
    const { id, poster_path, title, overview, vote_average } = card;
    // 템플릿 리터럴 내에 자료 뿌리기
    return $cards.insertAdjacentHTML(
      "beforeend",
      `
               <div class="card-content" id="${id}">
                  <div class="card-wrap" id="${id}">
                    <div class="target">id : ${id}</div>
                    <div class="img-wrap">
                       <img
                         src="https://image.tmdb.org/t/p/w500${poster_path}"
                         alt="${title}"
                       />
                    </div>
                    <h3>${title}</h3>
                    <p class="over-view">${overview}</p>
                    <p class="rating">Rating : <span class="rating-number">${vote_average}</span></p>
                  </div>
                </div>
                  `
    );
  });
};
