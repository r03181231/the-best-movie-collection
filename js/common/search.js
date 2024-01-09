//search.js - 검색 기능 - 검색 했을 때 화면과 반응
import movieColl from "./movieColl.js";
import { cards } from "./cards.js";
import { $cards, $input, blankPattern } from "./values.js";

export const search = async () => {
  const movies = await movieColl();
  const inputValue = $input.value;
  //키워드를 포함한 영화 찾기
  const equalCardData = movies.filter((movie) => {
    const upperValue = inputValue.toUpperCase();
    const movieTitle = movie.title.toUpperCase();
    const collect = movieTitle.includes(upperValue);

    return collect;
  });
  const regExp = inputValue.replace(blankPattern, "") === "" || equalCardData.length === 0;

  // 검색input 유효성 - 공백만 있거나 일치하는 결과가 없을 때 해당 메세지 첨부하기.
  if (regExp) {
    // 이전 정보 비워줘.
    $cards.innerHTML = "";
    //유효성이 true면 아래 내역을 카드 내용 대신에 보여주기
    return $cards.insertAdjacentHTML(
      "beforeend",
      `<div class="not-search">"<span>${inputValue}</span>"에 대한 검색 결과를 찾을 수 없습니다.</div>`
    );
  }
  // 이전 정보 비워주기
  $cards.innerHTML = "";

  //찾은 키워드에 대한 카드 정보를 채워주기
  cards(equalCardData);
};
