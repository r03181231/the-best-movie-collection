import { $cards } from "./values.js";

export const cards = (arr) => {
  arr.map((card) => {
    const { id, poster_path, title, overview, vote_average } = card;

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
