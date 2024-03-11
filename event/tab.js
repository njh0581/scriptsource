// orange
// li 클릭시 orange 클래스명 움직이기

// show
// 첫번째 li 클릭시 첫번째 div 보여주기

//세 개의 li 찾기
const firstLi = document.querySelector(".list li:first-child");

const secondtLi = document.querySelector(".list li:nth-child(2)");
const thirdLi = document.querySelector(".list li:last-child");

const firstdiv = document.querySelector(".container div:nth-child(2)");
console.log(firstdiv);
const seconddiv = document.querySelector(".container div:nth-child(3)");
const thirddiv = document.querySelector(".container div:last-child");

firstLi.addEventListener("click", () => {
  // 다른 li 에 orange 클래스명 제거
  secondtLi.classList.remove("orange");
  thirdLi.classList.remove("orange");
  // firstLi orange 클래스명 추가
  firstLi.classList.add("orange");

  // 다른 div 의 show 제거
  seconddiv.classList.remove("show");
  thirddiv.classList.remove("show");
  // 첫번째 div show 추가
  firstdiv.classList.add("show");
});
secondtLi.addEventListener("click", () => {
  // 다른 li 에 orange 클래스명 제거
  firstLi.classList.remove("orange");
  thirdLi.classList.remove("orange");
  // secondtLi orange 클래스명 추가
  secondtLi.classList.add("orange");

  // 다른 div 의 show 제거
  firstdiv.classList.remove("show");
  thirddiv.classList.remove("show");
  // 첫번째 div show 추가
  seconddiv.classList.add("show");
});
thirdLi.addEventListener("click", (e) => {
  // 다른 li 에 orange 클래스명 제거
  firstLi.classList.remove("orange");
  secondtLi.classList.remove("orange");
  // thirdLi orange 클래스명 추가
  e.target.classList.add("orange");

  // 다른 div 의 show 제거
  firstdiv.classList.remove("show");
  seconddiv.classList.remove("show");
  // 첫번째 div show 추가
  thirddiv.classList.add("show");
});
