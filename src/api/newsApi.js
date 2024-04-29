import axios from "axios";

// async/await를 사용하는 함수 따로 선언
const host = `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${process.env.REACT_APP_API_KEY}`;

export const getData = async ({ params, successFn, failFn, errorFn }) => {
  try {
    const response = await axios.get(`${host}`, { params: params });
    console.log(response.data.articles);
    const status = response.status.toString();
    if (status.charAt() === "2") {
      successFn(response.data.articles);
    } else {
      failFn("뉴스 호출 오류");
    }
  } catch (error) {
    errorFn("서버 오류");
  }
};
