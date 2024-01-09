//goToTop.js - 클릭시 최상단으로 이동.
import { $top } from "../common/values.js";

// Y축 위치 300 넘게 이동시 top버튼 나타남
export const showTop = () => {
  if (window.scrollY > 300) {
    $top.style.display = "block";
  } else {
    // 그 전엔 none 상태
    $top.style.display = "none";
  }
};
// top버튼 클릭 시, 화면 최상단으로 이동
export const goToTop = () => {
  if (window.scrollY !== 0) {
    setTimeout(() => {
      //지정된 상단 x축 0, y축 상단에서 부터 아래로 100위치
      window.scrollTo(0, window.scrollY - 120);
      goToTop();
    }, 3);
  }
};
