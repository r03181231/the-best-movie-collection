export const alert = (e) => {
  if (e.target.closest(".card-content") !== null) {
    const targetCardId = e.target
      .closest(".card-content")
      .querySelector("div").id;
    if (targetCardId !== null) {
      if (targetCardId) {
        window.alert(`영화 id : ${targetCardId}`);
      }
    }
  }
};
