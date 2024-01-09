// openAPI
// 영화 DB 자료 가져와서
export const movieColl = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZmYyZWNmMzg2NmU3NDI5Nzk5ODdmMWY4NWIxOGQxNyIsInN1YiI6IjY1OGVjZmUwOWYxYmU3Njg2NzgwY2I3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GCIqNf864_nSJFKca9jtRMZzbPuVE4F2TBjeQm1in5A"
    }
  };

  const url = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
  //변수에 자료 할당하기
  const data = await fetch(url, options)
    .then((res) => res.json())
    .then((res) => {
      const movie = res.results;
      return movie;
    });
  return data;
};

export default movieColl;
