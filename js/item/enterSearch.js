import { search } from "../common/search.js";

export const enterSearch = (key) => {
  if (key.keyCode === 13) {
    document.querySelector("seachBtn");
    search();
  }
};
