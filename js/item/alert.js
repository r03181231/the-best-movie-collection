// alert.js - 카드 하나를 클릭했을 때 해당 id를 alert 알림으로 보여주기
export const alert = (e) => {
  // 카드 외부 클릭 시, 들어오는 값 처리
  if (e.target.closest(".card-content") !== null) {
    const targetCardId = e.target.closest(".card-content").querySelector("div").id;
    //클릭해서 지정한 카드가 id가 있으면
    //알림으로 해당 영화 카드의 id를 보여주기
    if (targetCardId) {
      window.alert(`영화 id : ${targetCardId}`);
    }
  }
};
