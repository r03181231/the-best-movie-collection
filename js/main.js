// openAPI
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZmYyZWNmMzg2NmU3NDI5Nzk5ODdmMWY4NWIxOGQxNyIsInN1YiI6IjY1OGVjZmUwOWYxYmU3Njg2NzgwY2I3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GCIqNf864_nSJFKca9jtRMZzbPuVE4F2TBjeQm1in5A",
  },
};

//브라우저가 켜진 후
document.addEventListener("DOMContentLoaded", async () => {
  const url =
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
  const movies = await fetch(url, options)
    .then((res) => res.json())
    .then((res) => {
      const movie = res.results;
      return movie;
    })
    .catch((err) => console.error(err));
  const $searchBtn = document.querySelector("#searchBtn"); // 검색버튼
  const $cards = document.querySelector("#cards-container"); // 카드 최상위 div
  const $input = document.querySelector("#input"); // 검색어 input태그
  // 웹사이트 랜딩 또는 새로고침 후 input에 커서 자동 위치시키기
  $input.focus();
  // 영화정보 카드 리스트 UI
  // 로드될 시 보이는 메인 화면
  movies.map((mainCards) => {
    const $mainCardsDiv = document.createElement("div");
    $mainCardsDiv.setAttribute("class", "card-content");
    $mainCardsDiv.setAttribute("movieId", mainCards.id);
    //div로 따로 놀던 div들을 묶어서 하나의 카드를 클릭했을 때 어딜 클릭해도 나오게끔
    $mainCardsDiv.innerHTML = `
                  <div id="${mainCards.id}" class="card-wrap">
                    <div class="target">id : ${mainCards.id}</div>
                    <div class="imgSort">
                       <img
                         src="https://image.tmdb.org/t/p/w500${mainCards.poster_path}"
                         alt="${mainCards.title}"
                       />
                    </div>                    
                    <h3>${mainCards.title}</h3>
                    <p class="over-view">${mainCards.overview}</p>
                    <p class="rating">Rating : <span class="rating-number">${mainCards.vote_average}</span></p>
                  </div>
                  `;
    return $cards.insertAdjacentElement("beforeend", $mainCardsDiv);
  });

  // 필수요구 - 카드 클릭 시에는 클릭한 영화 id 를 나타내는 alert 창을 띄웁니다.
  $cards.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.closest(".card-content") !== null) {
      const targetCardId = e.target
        .closest(".card-content")
        .querySelector("div").id;

      console.log(e.target.getElementsByClassName("card-content"));
      if (targetCardId) {
        window.alert(`영화 id : ${targetCardId}`);
      }
    }
  });

  //검색 기능=========================================================
  const searchBtnClick = () => {
    const inputValue = $input.value;
    //키워드 포함한 영화 찾기
    const equalCardData = movies.filter((movie) => {
      const upperValue = inputValue.toUpperCase();
      return movie.title.toUpperCase().includes(upperValue);
    });
    // 이전 정보 비워주기
    $cards.innerHTML = "";

    // 찾은 키워드에 대한 카드 정보를 채우기
    equalCardData.forEach((searchCard) => {
      const $searchCardDiv = document.createElement("div");
      $searchCardDiv.setAttribute("class", "card-content");
      $searchCardDiv.setAttribute("movieId", searchCard.id);
      //  -incertAdjacentHTML("afterend", "");로 추후 수정해보기
      // innerHTML은 script문으로 공격하면 text로 dom정보를 다 가져와서 볼 수 있기에 XXS공격에 취약
      $searchCardDiv.innerHTML = `
                  <div id="${searchCard.id}" class="card-wrap">
                    <div class="target">id : ${searchCard.id}</div>
                    <div class="imgSort">
                       <img
                         src="https://image.tmdb.org/t/p/w500${searchCard.poster_path}"
                         alt="${searchCard.title}"
                       />
                    </div>
                    <h3>${searchCard.title}</h3>
                    <p class="over-view">${searchCard.overview}</p>
                    <p class="rating">Rating : <span class="rating-number">${searchCard.vote_average}</span></p>
                </div>
                  `;

      return $cards.insertAdjacentElement("beforeend", $searchCardDiv);
    });
  };
  // 여기까지 검색 기능과 검색하면 다시 붙이는
  //input값 입력하고 엔터해도 검색 기능 동작
  $input.addEventListener("keyup", (key) => {
    if (key.keyCode === 13) {
      document.getElementsByClassName("seachBtn");
      searchBtnClick();
    }
  });
  // 검색 버튼 클릭될 시, 검색기능 활성화
  $searchBtn.addEventListener("click", searchBtnClick);
});
