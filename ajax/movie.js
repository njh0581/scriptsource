const txtYear = document.querySelector("#txtYear");
const selMon = document.querySelector("#selMon");
const selDay = document.querySelector("#selDay");

// 어제 날짜 구하기
const init = () => {
  // 오늘 날짜 구하기
  const today = new Date();
  console.log(today);
  // 년, 월, 일 변수에 담기
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  // 일 -1
  let day = today.getDate() - 1;

  //화면에 보여주기
  //요소 찾은 후 vlaue 변경
  txtYear.value = year;
  //1~9월 : "0"+month => 01,02...
  //1~9일 : "0"+day => 01,02...
  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }
  selMon.value = month;
  selDay.value = day;
};

init();

function show(movieCd) {
  console.log(movieCd);
  url = "https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd=";
  url += movieCd;

  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error();
      return response.json();
    })
    .then((data) => {
      let result = "";
      let movieInfo = data.movieInfoResult.movieInfo;
      // 영화한글제목 : movieNm
      let movieNm = movieInfo.movieNm;
      // 영화영어제목 : movieNmEn
      let movieNmEn = movieInfo.movieNmEn;
      // 상영시간 : showTm
      let showTm = movieInfo.showTm;
      let directors = "";
      // 감독 : directors
      // 배우 : actors
      result += `<ul>`;
      result += `<li> 영화 제목 : ${movieNm}</li>`;
      result += `<li> 영어 제목 : ${movieNmEn}</li>`;
      result += `<li> 상영 시간 : ${showTm}</li>`;
      result += `<li> 감독 : ${directors}</li>`;
      result += `<li> 출연 배우 : ${actors}</li>`;
      result += `</ul>`;
      movieInfo.directors.forEach((director) => {
        directors += `${director.peopleNm}, `;
      });
      let actors = "";
      movieInfo.actors.forEach((actor) => {
        actors += `${actor.peopleNm}, `;
      });
      document.querySelector(".box2").innerHTML = result;
    })
    .catch(() => console.log("주소 확인"));
}

document.querySelector("button").addEventListener("click", () => {
  //영화진흥위원회 사용자가 선택한 날짜의 박스 오피스 가져오기
  let url = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=";
  url += txtYear.value + selMon.value + selDay.value;
  console.log(url);
  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error();
      return response.json();
    })
    .then((data) => {
      console.log(data);

      let boxofficeList = data.boxOfficeResult.dailyBoxOfficeList;
      console.log(boxofficeList);
      let result = "";

      boxofficeList.forEach((movie) => {
        // 순위
        // 1 위(▲ 1) : 파묘
        //
        //증감
        console.log(movie.rank);
        console.log(movie.rankInten);
        console.log(movie.movieNm);
        console.log(movie.movieCd);

        let rankInten = movie.rankInten;
        result += `${movie.rank} 위( `;
        if (rankInten > 0) {
          result += "▲";
        } else if (rankInten < 0) {
          result += "▼";
        }
        result += `${movie.rankInten} ) : `;
        result += `<a href="#" onclick="javascript:show(${movie.movieCd})">${movie.movieNm}</a><br>`;
      });
      document.querySelector("#msg").innerHTML = result;
    })
    .catch(() => console.log("주소 확인"));
});
