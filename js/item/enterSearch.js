// enterSearch.js - 해당 키에 키보드 Enter이벤트 일어나면 검색 기능 활성화
import { search } from "../common/search.js";

export const enterSearch = (key) => {
  if (key.keyCode === 13) {
    document.querySelector("seachBtn");
    search();
  }
};
