import movieColl from "./movieColl.js";
import { cards } from "./cards.js";
import { $cards, $input } from "./values.js";

export const search = async () => {
  const movies = await movieColl();
  const inputValue = $input.value;
  //키워드 포함한 영화 찾기
  const equalCardData = movies.filter((movie) => {
    console.log(inputValue);
    const upperValue = inputValue.toUpperCase();
    return movie.title.toUpperCase().includes(upperValue);
  });
  // 이전 정보 비워주기
  $cards.innerHTML = "";
  // 찾은 키워드에 대한 카드 정보를 채우기
  cards(equalCardData);
};
