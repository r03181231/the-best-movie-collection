// alert.js - ex ) alert (`영화 Id : 123`)
const movieIdAlert = (keyName, prop) => {
  // 전체카드 중에서
  for (let i = 0; i < prop.length; i++) {
    //카드 하나 클릭 시,
    prop[i].addEventListener("click", async (event) => {
      let onetargetCardId = event.target.children[0].id;
      window.alert(`${keyName} : ${onetargetCardId}`);
    });
  }
};
