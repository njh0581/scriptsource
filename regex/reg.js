// 폼에 submit 이 일어나면 submit 중지후
// required
// input value가 들어 있는지 확인
// value 가 어떤 특정 조건을 만족하는지 확인

// const userid = document.querySelector("#userid");
// const password = document.querySelector("#password");
// const confirmPassword = document.querySelector("#confirm-password");
const userid = document.getElementById("userid");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

const regId = /(?=^[A-Za-z])(?=.+\d)[A-Za-z\d]{6,12}$/;
const regPwd = /(?=^[A-Za-z])(?=.+\d)(?=.+[!@%$])[A-Za-z\d!@%$]{8,15}$/;

//true 자료 : 0을 제외 숫자, '문자', [], {}
//false 자료 : 0, '', undefined
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  if (!userid.vlaue || !regId.test(userid.value)) {
    userid.nextElementSibling.classList.add("show");
  } else {
    userid.nextElementSibling.classList.remove("show");
  }
  if (!password.vlaue || !regPwd.test(password.value)) {
    password.nextElementSibling.classList.add("show");
  } else {
    password.nextElementSibling.classList.remove("show");
  }
  if (!confirmPassword.vlaue || !regPwd.test(confirmPassword.value)) {
    confirmPassword.nextElementSibling.classList.add("show");
  } else {
    confirmPassword.nextElementSibling.classList.remove("show");
  }
  //password != confrim-password
  //이전 비밀번호와 다릅니다

  if (confirmPassword.value != password.vlaue) {
    confirmPassword.nextElementSibling.textContent = "이전 비밀번호와 다릅니다";
    confirmPassword.nextElementSibling.classList.add("show");
  } else {
    //password, confrim 둘다 입력 안된 경우 값이 동일하기 때문에 이 코드가 실행됨
    if (confirmPassword.value) {
      confirmPassword.nextElementSibling.classList.remove("show");
    }
  }
});
